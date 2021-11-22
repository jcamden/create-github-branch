#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import { Command } from 'commander';
import figlet from 'figlet';

const program = new Command();

program
    .option('-d, --debug', 'output extra debugging')
    .option('-a, --art', 'show art');

program.parse(process.argv);

const options = program.opts();

if (options.debug) {
    console.log(options);
}

if (options.art) {
    clear();
    console.log(
        chalk.green(
            figlet.textSync('Create Github', {
                font: 'Standard',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true,
            })
        )
    );
    console.log(
        chalk.green(
            figlet.textSync(' Branch', {
                font: 'THIS',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 100,
                whitespaceBreak: true,
            })
        )
    );
}
