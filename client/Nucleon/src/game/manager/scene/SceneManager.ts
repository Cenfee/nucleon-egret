/**
 * Created by Administrator on 2015/7/8.
 */
module game.manager.scene
{
    export class SceneManager
    {
        private static _instance:SceneManager;

        public static getInstance():SceneManager
        {
            if (!SceneManager._instance)
            {
                SceneManager._instance = new SceneManager;
            }
            return SceneManager._instance;
        }

        private _currentSceneName:string = "";

        public switchScene(name:string, onEnterCallback:()=>void):void
        {
            if(this._currentSceneName == name)
                return;


            if(this._currentSceneName)
                game.manager.layer.LayerManager.getInstance().removeAllLayerWithContainer(egret.MainContext.instance.stage);

            game.manager.layer.LayerManager.getInstance().addAllLayerWithContainer(egret.MainContext.instance.stage);
            this._currentSceneName = name;

            onEnterCallback();

        }
    }
}