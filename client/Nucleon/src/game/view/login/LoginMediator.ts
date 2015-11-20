/**
 * Created by Administrator on 2015/7/8.
 */


module game.view.login
{
    export class LoginMediator extends puremvc.Mediator
    {
        public static NAME:string = "LoginMediator";
        
        private _component: component.LoginView;

        public constructor(mediatorName?: string, viewComponent?: any)
        {
            super(LoginMediator.NAME, viewComponent);
        }
        
        public listNotificationInterests():string[]
        {
            var arr:string[] = [];
            arr.push(LoginMediator.NAME + "Show");
            arr.push(LoginMediator.NAME + "Hide");
            return arr;
        }
        public handleNotification( note:puremvc.INotification ):void
        {

            switch ( note.getName() )
            {
                case LoginMediator.NAME + "Show":
                    this.show();
                    break;

                case LoginMediator.NAME + "Hide":
                    this.hide();
                    break;
            }
        }

        public show():void
        {
            var self:LoginMediator = this;
     
            game.manager.scene.SceneManager.getInstance().switchScene(game.manager.scene.SceneConstants.LOGIN, function()
            {
                game.manager.view.ViewManager.getInstance().showView( game.manager.view.ViewConstants.LOGIN_VIEW, {complete:self.showViewCompleteHandler, completeThis:self});
            });
        }
        public hide():void
        {
            this._component.removeEventListener(event.LoginEvent.START,this.startHandler, this);
            
            game.manager.view.ViewManager.getInstance().hideView(game.manager.view.ViewConstants.LOGIN_VIEW, true);
        }

        public showViewCompleteHandler(component:egret.Sprite):void
        {
            this._component = <component.LoginView>component;
            
            this._component.addEventListener(event.LoginEvent.START,this.startHandler, this);
            
        }
        private startHandler(event:event.LoginEvent):void
        {
            this.hide();
            this.facade.sendNotification(game.view.gameplay.GameMediator.NAME+"Show");       
        }
        
    }
}