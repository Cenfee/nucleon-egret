module game.controller {

    export class StartupCommand extends puremvc.MacroCommand {
        /**
         * @override
         *
         * Add the Subcommands to startup the PureMVC apparatus.
         *
         * Generally, it is best to prep the Model (mostly registering  proxies)followed by
         * preparation of the View (mostly registering Mediators).
         */
        initializeMacroCommand()
        {
            this.addSubCommand(game.controller.StartupControllerCommand);
            this.addSubCommand(game.controller.StartupModelCommand);
            this.addSubCommand(game.controller.StartupViewCommand);
        }
    }
}
