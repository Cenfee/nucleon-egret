module game.controller
{
    export class StartupModelCommand extends puremvc.SimpleCommand
    {
        public execute(note:puremvc.INotification ):void
        {
            super.execute(note);

            this.facade.registerProxy(new game.model.game.GameProxy());
        }
    }
}