module game.view.load.event {
	/**
	 *
	 * @author 
	 *
	 */
	export class LoadEvent extends egret.Event
	{
        public static COMPLETE: string = "complete";
		public constructor(type: string, bubbles?: boolean, cancelable?: boolean) 
		{
            super(type,bubbles,cancelable);
		}
	}
}
