module game.view.gameplay.event {
	/**
	 *
	 * @author 
	 *
	 */
	export class GameEvent extends egret.Event
	{
        public static REPLAY: string = "replay";
        public static SHOW_LOGIN: string = "showLogin";
        
		public constructor(type: string, bubbles?: boolean, cancelable?: boolean) 
		{
            super(type,bubbles,cancelable);
		}
	}
}
