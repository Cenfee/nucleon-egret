/**
 * Created by Administrator on 2015/7/8.
 */
module game.manager.view
{
    export class ViewConstants
    {
        public static LOAD_VIEW:string = "loadView";
        public static LOGIN_VIEW:string = "loginView";
        public static GAME_VIEW:string = "gameView";
        public static PAUSE_VIEW:string = "pauseView";
        
        public static getViewInfos():any
        {
            var viewInfos = {};
            viewInfos[ViewConstants.LOAD_VIEW] =
            {
                classObject:game.view.load.component.LoadView
            };
            viewInfos[ViewConstants.LOGIN_VIEW] =
            {
                classObject:game.view.login.component.LoginView
            };
            viewInfos[ViewConstants.GAME_VIEW] =
            {
                classObject: game.view.gameplay.component.GameView
            };
            viewInfos[ViewConstants.PAUSE_VIEW] =
            {
                classObject: game.view.pause.PauseView
            };

            return viewInfos;
        }
    }
}