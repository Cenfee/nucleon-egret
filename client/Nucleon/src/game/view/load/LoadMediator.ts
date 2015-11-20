/**
 * Created by Administrator on 2015/7/8.
 */
module game.view.load
{
    export class LoadMediator extends puremvc.Mediator
    {
        public static NAME:string = "LoadMediator";
        
        private _component: component.LoadView;

        public constructor(mediatorName?: string, viewComponent?: any)
        {
            super(LoadMediator.NAME, viewComponent);
        }
        
        public listNotificationInterests():string[]
        {
            var arr:string[] = [];
            arr.push(LoadMediator.NAME + "Show");
            arr.push(LoadMediator.NAME + "Hide");
            return arr;
        }
        public handleNotification( note:puremvc.INotification ):void
        {

            switch ( note.getName() )
            {
                case LoadMediator.NAME + "Show":
                    this.show();
                    break;

                case LoadMediator.NAME + "Hide":
                    this.hide();
                    break;
            }
        }

        public show():void
        {
            var self:LoadMediator = this;
     
            game.manager.scene.SceneManager.getInstance().switchScene(game.manager.scene.SceneConstants.LOAD, function()
            {
                game.manager.view.ViewManager.getInstance().showView( game.manager.view.ViewConstants.LOAD_VIEW, {complete:self.showViewCompleteHandler, completeThis:self});
            });
        }
        public hide():void
        {
            this._component.removeEventListener(event.LoadEvent.COMPLETE, this.componentCompleteHandler, this);
            
            game.manager.view.ViewManager.getInstance().hideView(game.manager.view.ViewConstants.LOAD_VIEW, true);
        }

        public showViewCompleteHandler(component:egret.Sprite):void
        {
            this._component = <component.LoadView>component;
            this._component.addEventListener(event.LoadEvent.COMPLETE, this.componentCompleteHandler, this);
        }
        
        private componentCompleteHandler(event:event.LoadEvent):void
        {
            this.hide();
            
            this.facade.sendNotification(game.view.login.LoginMediator.NAME+"Show");
            
        }
    }
}