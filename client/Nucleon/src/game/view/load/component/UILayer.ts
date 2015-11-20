module game.view.load.component 
{
	/**
	 *
	 * @author 
	 *
	 */
	export class UILayer extends egret.gui.SkinnableComponent
	{
		public constructor() 
		{
            super();
            
            this.skinName = "skin.LoadSkin";
            
            egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE,this.resizeHandler,this);     
		}
		
        public dispose():void
        {
            egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE,this.resizeHandler,this);          
        }
               
        private resizeHandler(event:egret.Event):void
        {
            this.invalidateDisplayList();
        }
        		
        public updateDisplayList( unscaledWidth:number,unscaledHeight:number ):void
        {
            super.updateDisplayList(egret.MainContext.instance.stage.stageWidth,egret.MainContext.instance.stage.stageHeight);
                        
            }
	}
}
