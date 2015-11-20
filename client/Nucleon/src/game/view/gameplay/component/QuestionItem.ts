module game.view.gameplay.component 
{
	/**
	 *
	 * @author 
	 *
	 */
	export class QuestionItem extends egret.Sprite
	{
        private _textureMask:egret.Bitmap;
        private _textureSprite:egret.Bitmap;
        private _shapeObject:egret.Bitmap;
        
        private _data: any;
        
		public constructor() 
		{
            super();
            
		}
		
		public dispose():void
		{
                   
		}
		
		public update(shape:number, bgColor:number, textureColor:number, texture:number):void
		{
            if(!this._textureMask)
            {
                this._textureMask = new egret.Bitmap(game.manager.asset.AssetManager.getInstance().getAsset("ui_game_shape1_1_png"));
                this._textureSprite = new egret.Bitmap(game.manager.asset.AssetManager.getInstance().getAsset("ui_game_shape1_0_png"));
                this._shapeObject = new egret.Bitmap(game.manager.asset.AssetManager.getInstance().getAsset("ui_game_shape1_0_png"));
                this.addChild(this._shapeObject);
                
            }
		}
	}
}
