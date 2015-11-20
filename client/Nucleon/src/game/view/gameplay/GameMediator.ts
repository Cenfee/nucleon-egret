/**
 * Created by Administrator on 2015/7/8.
 */
module game.view.gameplay
{
    export class GameMediator extends puremvc.Mediator
    {
        public static NAME:string = "GameMediator";
        
        private _component: component.GameView;

        public constructor(mediatorName?: string, viewComponent?: any)
        {
            super(GameMediator.NAME, viewComponent);
        }
        
        public listNotificationInterests():string[]
        {
            var arr:string[] = [];
            arr.push(GameMediator.NAME + "Show");
            arr.push(GameMediator.NAME + "Hide");
            return arr;
        }
        public handleNotification( note:puremvc.INotification ):void
        {

            switch ( note.getName() )
            {
                case GameMediator.NAME + "Show":
                    this.show();
                    break;

                case GameMediator.NAME + "Hide":
                    this.hide();
                    break;
            }
        }

        public show():void
        {
            var self:GameMediator = this;
     
            game.manager.scene.SceneManager.getInstance().switchScene(game.manager.scene.SceneConstants.GAME, function()
            {
                game.manager.view.ViewManager.getInstance().showView( game.manager.view.ViewConstants.GAME_VIEW, {complete:self.showViewCompleteHandler, completeThis:self});
            });
        }
        public hide():void
        {
            this._component.removeEventListener(event.GameEvent.SHOW_LOGIN, this.showLoginHandler, this);     
            this._component.removeEventListener(event.GameEvent.REPLAY, this.showReplayHandler, this);
            
            game.manager.view.ViewManager.getInstance().hideView(game.manager.view.ViewConstants.GAME_VIEW, true);
        }

        public showViewCompleteHandler(mainComponent:egret.Sprite):void
        {
            var self = this;
            this._component = <component.GameView>mainComponent;
            
            this._component.addEventListener(event.GameEvent.SHOW_LOGIN, this.showLoginHandler, this);
                   
                            
            this._component.addEventListener(event.GameEvent.REPLAY, this.showReplayHandler, this);
        }
        private showLoginHandler(event:event.GameEvent):void
        {
            this.hide();
            
            this.facade.sendNotification(game.view.login.LoginMediator.NAME+"Show");
             
        }
        private showReplayHandler(event:event.GameEvent):void
        {
            this.hide();

            game.manager.view.ViewManager.getInstance().showView( game.manager.view.ViewConstants.GAME_VIEW, {complete:this.showViewCompleteHandler, completeThis:this});
       }
        
    }
}