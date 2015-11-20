/**
 * Created by Administrator on 2015/7/8.
 */
module game.manager.layer
{
    export class LayerManager
    {
        private static _instance:LayerManager;
        public static getInstance():LayerManager
        {
            if (!LayerManager._instance)
            {
                LayerManager._instance = new LayerManager;
            }
            return LayerManager._instance;
        }

        private _container:egret.Sprite;

        private _gameLayer:egret.Sprite;       
        private _guiLayer:egret.gui.UIStage;       
        private _popupLayer:egret.Sprite;
        private _effectLayer:egret.Sprite;
        private _alertLayer:egret.Sprite;
        private _guideLayer:egret.Sprite;

        public constructor()
        {
            this._container = new egret.Sprite();

            this._gameLayer = new egret.Sprite();       
            this._guiLayer = new egret.gui.UIStage();           
            this._popupLayer = new egret.Sprite();
            this._effectLayer = new egret.Sprite();
            this._alertLayer = new egret.Sprite();
            this._guideLayer = new egret.Sprite();

            this._container.addChild(this._gameLayer);
            this._container.addChild(this._guiLayer);
            this._container.addChild(this._popupLayer);
            this._container.addChild(this._effectLayer);
            this._container.addChild(this._alertLayer);
            this._container.addChild(this._guideLayer);
            
            this._guiLayer.autoResize = false;
        }

        public addAllLayerWithContainer(container:egret.DisplayObjectContainer):void
        {
            container.addChild(this._container);
        }
        
        public removeAllLayerWithContainer(container:egret.DisplayObjectContainer):void
        {
            container.removeChild(this._container);
        }

        public getGameLayer():egret.Sprite
        {
            return this._gameLayer;
        }
        public getGuiLayer():egret.gui.UIStage
        {
            return this._guiLayer;
        }
        public getPopupLayer():egret.Sprite
        {
            return this._popupLayer;
        }
        public getEffectLayer():egret.Sprite
        {
            return this._effectLayer;
        }
        public getAlertLayer():egret.Sprite
        {
            return this._alertLayer;
        }
        public getGuideLayer():egret.Sprite
        {
            return this._guideLayer;
        }

    }
}