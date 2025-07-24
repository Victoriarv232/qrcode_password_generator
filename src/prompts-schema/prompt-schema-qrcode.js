import chalk from "chalk"

const promptSchemaQRCODE = [
    {
        name: "link",
        description: chalk.yellow("Insert a link to generate a QRCODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Choose the type of your QRCODE: \n1. Image \n2.Terminal"),
        pattern: /[1-2]$/,
        message: chalk.red("Choose 1 or 2"),
        required: true,
    },
];

export default promptSchemaQRCODE;
