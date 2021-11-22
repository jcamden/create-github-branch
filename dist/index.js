#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var commander_1 = require("commander");
var figlet_1 = __importDefault(require("figlet"));
(0, clear_1.default)();
console.log(chalk_1.default.bgWhite.black(figlet_1.default.textSync('Create Github Branch', { horizontalLayout: 'full' })));
var program = new commander_1.Command();
program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza');
program.parse(process.argv);
var options = program.opts();
if (options.debug)
    console.log(options);
console.log('pizza details:');
if (options.small)
    console.log('- small pizza size');
if (options.pizzaType)
    console.log("- " + options.pizzaType);
