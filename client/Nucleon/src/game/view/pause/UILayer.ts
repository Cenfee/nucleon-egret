module game.view.pause
{
	/**
	 *
	 * @author 
	 *
	 */
	export class UILayer extends egret.gui.SkinnableComponent
	{
    	public onChildrenCreated:()=>void;
        public replayBtn: egret.gui.Button;
        public playBtn: egret.gui.Button;
        public homeBtn:egret.gui.Button;
        
		public constructor() 
		{
            super();
            
            this.skinName = "skin.PauseSkin";
            
            egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE,this.resizeHandler,this);     
		}
		
        public dispose():void
        {
            this.onChildrenCreated = null;
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
            
        public childrenCreated() 
        {
            super.childrenCreated()
            
            if(this.onChildrenCreated)
                this.onChildrenCreated();
                
               
         }
         
                    
	}
}
