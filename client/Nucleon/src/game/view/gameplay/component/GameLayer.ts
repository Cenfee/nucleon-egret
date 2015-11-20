module game.view.gameplay.component 
{
	/**
	 *
	 * @author 
	 *
	 */
	export class GameLayer extends egret.Sprite
	{
		public constructor() 
		{
            super();
            
            var item: QuestionItem = new QuestionItem();
            this.addChild(item);
            
            item.x = 200;
            item.y = 200;
            item.update(1, 0xcc0000, 0x00cc00, 2);
		}
		
		
		
		public dispose():void
		{
                   
		}
		
		public pause():void
		{
		    
		}
		
        public resume():void
        {
            		    
            }
	}
}
