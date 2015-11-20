/**
 * Created by Administrator on 2015/7/8.
 */
module game.manager.debug
{
    export class DebugManager
    {
        private static _instance:DebugManager;

        public static getInstance():DebugManager
        {
            if (!DebugManager._instance)
            {
                DebugManager._instance = new DebugManager;
            }
            return DebugManager._instance;
        }

        private _key:string = "DebugManager";

        public trace(value:String):void
        {
            egret.Logger.info(this._key + ":trace:", value );
        }
        public warn(value:String):void
        {
            egret.Logger.info(this._key + ":warn:", value );
        }
        public error(value:String):void
        {
            egret.Logger.info(this._key + ":error:", value );
        }
    }
}