import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow("Choose an utility: \n1. QRCODE \n2. PASSWORD"),
        pattern: /^[1-2]$/,
        message: chalk.red("Choose 1 or 2"),
        required: true,
    }
];

export default promptSchemaMain;