/**
 * Created by Administrator on 2015/7/8.
 */
module game.view.pause
{
    export class PauseView extends egret.Sprite
    {
        public onReplay:()=>void;
        public onPlay:()=>void;
        public onHome:()=>void;
        private _uiLayer: UILayer;
        

                
      public constructor()
      {
          var self:PauseView = this;
          
          super();
          
            
            this._uiLayer = new UILayer();
            game.manager.layer.LayerManager.getInstance().getGuiLayer().addElement(this._uiLayer);
            
            this._uiLayer.onChildrenCreated = function()
            {
                self._uiLayer.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, self.replayHandler, self);
                self._uiLayer.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, self.playHandler, self);
                self._uiLayer.homeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, self.homeHandler, self);
                
            }
            
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addedHandler,this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removedHandler,this);
      }
          
        public dispose():void
        {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addedHandler,this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removedHandler,this);
            
            this._uiLayer.replayBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.replayHandler, this);
            this._uiLayer.playBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.playHandler, this);
            this._uiLayer.homeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.homeHandler, this);
            
            if(this._uiLayer.parent)
                game.manager.layer.LayerManager.getInstance().getGuiLayer().removeElement(this._uiLayer);
                
            this._uiLayer.dispose();
        }
        private addedHandler(event:egret.Event):void
        {
            game.manager.layer.LayerManager.getInstance().getGuiLayer().addElement(this._uiLayer);
        }
        private removedHandler(event:egret.Event):void
        {
            game.manager.layer.LayerManager.getInstance().getGuiLayer().removeElement(this._uiLayer);      
        }
        
        private replayHandler(event:egret.TouchEvent):void
        {
            if(this.onReplay)
                this.onReplay();
        }
        private playHandler(event:egret.TouchEvent):void
        {
            if(this.onPlay)
                this.onPlay();                    
        }
        private homeHandler(event:egret.TouchEvent):void
        {
            if(this.onHome)
                this.onHome();                   
        }        
    }
}