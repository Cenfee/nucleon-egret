module game.view.login.event {
	/**
	 *
	 * @author 
	 *
	 */
	export class LoginEvent extends egret.Event
	{
        public static START: string = "start";
		public constructor(type: string, bubbles?: boolean, cancelable?: boolean) 
		{
            super(type,bubbles,cancelable);
		}
	}
}
