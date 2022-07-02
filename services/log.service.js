import chalk from "chalk";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR_") + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(" Seccess ") + message);
};

const printHelp = () => {
  console.log(
    `${chalk.bgCyan(" HELP ")}
no params - vivod wether
-s[CITY]
-h <- help
-t [API_KEY] <- save token`
  );
};

// {bgRed, bgGreen, bgCyan}

export { printError, printSuccess, printHelp };
