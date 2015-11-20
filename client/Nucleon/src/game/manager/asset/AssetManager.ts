/**
 * Created by Administrator on 2015/7/7.
 */
module game.manager.asset
{
    export class AssetManager
    {
        private static _instance:AssetManager;
        public static getInstance():AssetManager
        {
            if(!AssetManager._instance)
            {
                AssetManager._instance = new AssetManager();
            }
            return AssetManager._instance;
        }

        private _viewAssets:any = {};

        public constructor()
        {
            egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
            
            RES.addEventListener( RES.ResourceEvent.GROUP_COMPLETE, this.resGroupCompleteHandler, this);
            RES.addEventListener( RES.ResourceEvent.GROUP_PROGRESS, this.resGroupProgressHandler, this);
            RES.addEventListener( RES.ResourceEvent.GROUP_LOAD_ERROR, this.resGroupLoadErrorHandler, this);
        }
        private resGroupCompleteHandler(event:RES.ResourceEvent):void
        {
            var groupName:string = event.groupName;
            var viewAsset:any = this._viewAssets[groupName];

            viewAsset["complete"]();

            delete viewAsset["complete"];
            delete viewAsset["progress"];
        }
        private resGroupProgressHandler(event:RES.ResourceEvent):void
        {
            var groupName:string = event.groupName;
            var progress: number = event.itemsLoaded / event.itemsTotal;
            var viewAsset:any = this._viewAssets[groupName];
               
            if(viewAsset["progress"])
                viewAsset["progress"](progress);
        }
        private resGroupLoadErrorHandler(event:RES.ResourceEvent):void
        {
            game.manager.debug.DebugManager.getInstance().trace(event.type);
        }

        public loadViewAsset(viewName:string, progress:(progress:number) => void, complete:() => void, isDisplay:boolean=true):void
        {
            if(!this._viewAssets[viewName])
                this._viewAssets[viewName] = {"viewName":viewName, "progress":progress, "complete":complete, "isDisplay":isDisplay};
            else
            {
                if(this._viewAssets[viewName])
                {
                    game.manager.debug.DebugManager.getInstance().warn(viewName+"已经加载了");
                    complete();
                    return;
                }
            }

            if(isDisplay)
                this.loadWithDisplay(viewName, progress, complete);
            else
                this.load(viewName, progress, complete);
        }
        public unloadViewAssets(viewName:string):void
        {
            if (!this._viewAssets[viewName])
            {
                game.manager.debug.DebugManager.getInstance().warn("AssetManager:unloadViewAssets " + "没有" + viewName);
                return;
            }
            
            RES.destroyRes(viewName);
            
            delete this._viewAssets[viewName];
        }

        public loadWithDisplay(res:string, progress:(progress:number) => void, complete:() => void):void
        {
            this.load(res, progress, complete);
        }
        public load(res:string, progress:(progress:number) => void, complete:() => void):void
        {
            RES.loadGroup( res );
        }

        public getAsset(url:string):any
        {
            return RES.getRes(url);
        }
    }
}