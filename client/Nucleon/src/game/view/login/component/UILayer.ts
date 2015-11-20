module game.view.login.component 
{
	/**
	 *
	 * @author 
	 *
	 */
	export class UILayer extends egret.gui.SkinnableComponent
	{
        public startBtn: egret.gui.Button;
        public onStart: any;
        public onStartThis: any;
        
		public constructor() 
		{
            super();
            
            this.skinName = "skin.LoginSkin";
            
            egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE,this.resizeHandler,this);          
		}
		
		public dispose():void
		{
            egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE,this.resizeHandler,this);   
            
            if(this.startBtn)
                this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startHandler, this);
                
            this.onStart = null;
            this.onStartThis = null;
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
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHandler, this);
        }
        
        private startHandler(event:egret.TouchEvent):void
        {
            if(this.onStart)
                this.onStart.call(this.onStartThis);
        }
	}
}
