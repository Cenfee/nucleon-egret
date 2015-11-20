module game.controller
{
    export class StartupViewCommand extends puremvc.SimpleCommand
    {
        public execute(note:puremvc.INotification ):void
        {
            super.execute(note);

            this.facade.registerMediator(new game.view.load.LoadMediator());
            this.facade.registerMediator(new game.view.login.LoginMediator());
            this.facade.registerMediator(new game.view.gameplay.GameMediator());
        }
    }
}