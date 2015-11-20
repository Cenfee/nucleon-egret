/**
 * Created by Administrator on 2015/7/8.
 */
module game.manager.view
{
    export class ViewManager
    {
        private static _instance:ViewManager;

        public static getInstance():ViewManager
        {
            if (!ViewManager._instance)
            {
                ViewManager._instance = new ViewManager;
            }
            return ViewManager._instance;
        }

        private _viewInfo:any = {};
        private _viewCache:any = {};
        
        public constructor()
        {
            var viewInfos:any = ViewConstants.getViewInfos();
            for (var key in viewInfos)
            {
                this.registerViewInfo(key, viewInfos[key]["classObject"])
            }
        }

        public registerViewInfo(name:string, classObject:any):void
        {
            this._viewInfo[name] = {"classObject":classObject};
        }

        private _cacheView(name):egret.Sprite
        {
            if(this._viewCache[name]) return this._viewCache[name];

            var classObject = this._viewInfo[name].classObject;
            this._viewCache[name] = new classObject();
            return this._viewCache[name];
        }

        public showView(name:string, data:any):void
        {
            var self = this;

            if(!this._viewInfo[name])
            {
                game.manager.debug.DebugManager.getInstance().warn(name + ": 没有在管理器进行注册");
                return;
            }

            game.manager.asset.AssetManager.getInstance().loadViewAsset(
                name,
                function progress():void
                {

                },
                function complete():void
                {
                    var view:egret.Sprite = self._cacheView(name);
                    if(data && data["complete"])
                    {
                        data["complete"].call(data["completeThis"], view);
                    }
                    game.manager.layer.LayerManager.getInstance().getGameLayer().addChild(view);
                },
                true
            );
        }

        public hideView(name:string, dispose:boolean=true):void
        {
            var view:egret.Sprite = this._viewCache[name];
            if(!view)
            {
                game.manager.debug.DebugManager.getInstance().warn(name + ": 不在ViewManager缓存中");
                return;
            }

            if(view.parent)
                game.manager.layer.LayerManager.getInstance().getGameLayer().removeChild(view);
                
            if(dispose)
            {
                view["dispose"]();
                game.manager.asset.AssetManager.getInstance().unloadViewAssets(name);
                
                delete this._viewCache[name];
            }

            

        }

    }
}