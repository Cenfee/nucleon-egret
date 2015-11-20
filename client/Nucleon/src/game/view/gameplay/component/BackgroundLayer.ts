module game.view.gameplay.component 
{
	/**
	 *
	 * @author 
	 *
	 */
	export class BackgroundLayer extends egret.Sprite
	{
        private _main: egret.Bitmap;
        private _itemBg: egret.Bitmap;
        
		public constructor() 
		{
            
            super();
            
            this._main = new egret.Bitmap(game.manager.asset.AssetManager.getInstance().getAsset("ui_game_game_json.bg"));
            this.addChild(this._main);    
            
            this._itemBg = new egret.Bitmap(game.manager.asset.AssetManager.getInstance().getAsset("ui_game_game_json.items_bg"));
            this.addChild(this._itemBg);     
            
            this.updateDisplay();
            
            egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE,this.resizeHandler,this);          
        }
        
        private resizeHandler(event:egret.Event):void
        {
            this.updateDisplay();
        }
               	
        public updateDisplay():void
        {
            var mainResponse: any = {};
            mainResponse[game.manager.response.ResponseManager.HORIZONTAL_CENTER] = -245.5;
            mainResponse[game.manager.response.ResponseManager.VERTICAL_CENTER] = 79;
            var mainPosition: egret.Point = game.manager.response.ResponseManager.getInstance().relativeToStage(this._main.getBounds(),mainResponse); 
            this._main.x = mainPosition.x;
            this._main.y = mainPosition.y;
            
            var itemBgResponse: any = {};
            itemBgResponse[game.manager.response.ResponseManager.HORIZONTAL_CENTER] = 250;
            itemBgResponse[game.manager.response.ResponseManager.VERTICAL_CENTER] = 70;
            var itemBgPosition: egret.Point = game.manager.response.ResponseManager.getInstance().relativeToStage(this._itemBg.getBounds(),itemBgResponse); 
            this._itemBg.x = itemBgPosition.x;
            this._itemBg.y = itemBgPosition.y;
        }
		
		public dispose():void
		{
            egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE,this.resizeHandler,this);       
		}
      
	}
}
