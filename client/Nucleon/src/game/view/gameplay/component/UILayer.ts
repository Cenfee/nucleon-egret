module game.view.gameplay.component 
{
	/**
	 *
	 * @author 
	 *
	 */
	export class UILayer extends egret.gui.SkinnableComponent
	{
        public onPause: () => void;
        public onPauseThis:any;
    	public pauseBtn:egret.gui.Button;
    	
		public constructor() 
		{
            super();
            
            this.skinName = "skin.GameSkin";
            
            egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE,this.resizeHandler,this);          
		}
		
		public dispose():void
		{
            this.onPause = null;
            egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE,this.resizeHandler,this);       
            this.pauseBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseHandler, this);
		}
       
		private resizeHandler(event:egret.Event):void
		{
            this.invalidateDisplayList();
		}
		
        public updateDisplayList( unscaledWidth:number,unscaledHeight:number ):void
        {
            super.updateDisplayList(egret.MainContext.instance.stage.stageWidth,egret.MainContext.instance.stage.stageHeight);
            
        }
        
        public childrenCreated() 
        {
            super.childrenCreated()
            this.pauseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseHandler, this);
        }
        
        private pauseHandler(event:egret.TouchEvent):void
        {
            if(this.onPause)
                this.onPause.call(this.onPauseThis);
        }
	}
}
