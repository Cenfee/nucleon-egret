/**
 * Created by Administrator on 2015/7/8.
 */
module game.manager.response
{
    export class ResponseManager
    {
        private static _instance:ResponseManager;
        public static getInstance():ResponseManager
        {
            if (!ResponseManager._instance)
            {
                ResponseManager._instance = new ResponseManager;
            }
            return ResponseManager._instance;
        }


        public static TOP: string = "top";
        public static RIGHT: string = "right";
        public static BOTTOM: string = "bottom";
        public static LEFT: string = "left";
        public static HORIZONTAL_CENTER: string = "horizontalCenter";
        public static VERTICAL_CENTER: string = "verticalCenter";
        
        public constructor()
        {
          
        }
        
        public relativeToStage(rect:egret.Rectangle, params:any, position:egret.Point=null):egret.Point
        {
            if(!position)
                position = new egret.Point();
                
            var stage: egret.Stage = egret.MainContext.instance.stage;
            
            if(params["top"])
            {
                position.y = params["top"];
            }
            if(params["right"])
            {
                position.x = stage.stageWidth - rect.width - params["right"];
            }
            if(params["bottom"])
            {
                position.y = stage.stageHeight - rect.height - params["bottom"];
            }
            if(params["left"])
            {
                position.x = params["left"];
            }
            if(params["horizontalCenter"])
            {
                position.x = stage.stageWidth * 0.5 - rect.width * 0.5 + params["horizontalCenter"];
            }
            if(params["verticalCenter"])
            {
                position.y = stage.stageHeight * 0.5 - rect.height * 0.5 + params["verticalCenter"];
            }
            return position;
        }


    }
}