/**
 * Created by Administrator on 2015/7/8.
 */
module game.view.load.component
{
    export class LoadView extends egret.Sprite
    {
        private _uiLayer: UILayer;
                
          public constructor()
          {
              var self:LoadView = this;
              
              super();
              
                
                this._uiLayer = new UILayer();
                game.manager.layer.LayerManager.getInstance().getGuiLayer().addElement(this._uiLayer);
                
            
                game.manager.asset.AssetManager.getInstance().loadViewAsset(game.manager.asset.AssetConstants.GLOBAL,
                    function(progress: number): void 
                    {
   
                    },
                    function(): void 
                    {
                        self.dispatchEvent(new event.LoadEvent(event.LoadEvent.COMPLETE));
                    }
                    );
          }
          
        public dispose():void
        {
            game.manager.layer.LayerManager.getInstance().getGuiLayer().removeElement(this._uiLayer);
            this._uiLayer.dispose();
        }
    }
}