var shell = require("shelljs");
shell.config.verbose = true;
shell.cp('-rf', './build/*.*', '../ledger-app/web/dist/')
shell.cp('-rf', './build/static', '../ledger-app/web/dist/')