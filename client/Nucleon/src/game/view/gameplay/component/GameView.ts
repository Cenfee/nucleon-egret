/**
 * Created by Administrator on 2015/7/8.
 */
module game.view.gameplay.component
{
    export class GameView extends egret.Sprite
    {
        private _backgroundLayer: BackgroundLayer;
        private _gameLayer: GameLayer;
        private _uiLayer: UILayer;
        
          public constructor()
          {
                var self:GameView = this;
                  
                super();
                  
                this._backgroundLayer = new BackgroundLayer();
                this.addChild(this._backgroundLayer);
                
                this._gameLayer = new GameLayer();
                this.addChild(this._gameLayer);
            
                this._uiLayer = new UILayer();
                game.manager.layer.LayerManager.getInstance().getGuiLayer().addElement(this._uiLayer);
                this._uiLayer.onPause = this.pauseHandler;
            this._uiLayer.onPauseThis = this;
                
            
          }
          
          public dispose():void
          {
            game.manager.view.ViewManager.getInstance().hideView(game.manager.view.ViewConstants.PAUSE_VIEW, true);
            
               this._backgroundLayer.dispose();
               this._gameLayer.dispose();
               
            game.manager.layer.LayerManager.getInstance().getGuiLayer().removeElement(this._uiLayer);
               this._uiLayer.dispose();
          }
          
          private pauseHandler():void
          {
                this._gameLayer.pause();
                game.manager.view.ViewManager.getInstance().showView(game.manager.view.ViewConstants.PAUSE_VIEW, {complete:this.pauseViewGettedHandler, completeThis:this});
          }
          
          private pauseViewGettedHandler(view:pause.PauseView):void
          {
            var self = this;
            view.onReplay = function()
            {
                game.manager.view.ViewManager.getInstance().hideView(game.manager.view.ViewConstants.PAUSE_VIEW, false);
                self.dispatchEvent(new event.GameEvent(event.GameEvent.REPLAY));
            };
            view.onPlay = function()
            {
                game.manager.view.ViewManager.getInstance().hideView(game.manager.view.ViewConstants.PAUSE_VIEW, false);
                self._gameLayer.resume();
            };
            view.onHome = function()
            {
                game.manager.view.ViewManager.getInstance().hideView(game.manager.view.ViewConstants.PAUSE_VIEW, false);
                self.dispatchEvent(new event.GameEvent(event.GameEvent.SHOW_LOGIN));
            };
            
          }
    }
}