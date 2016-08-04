"use strict";

const yeomanGeneratorBase = require('yeoman-generator').Base;
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class Ng2Simple extends yeomanGeneratorBase {
  // The name `constructor` is important here
  constructor(args, options, config) {
      super(args, options, config);
  }

  prompting()  {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: 'My Super App',
        store: true
      }
    ]).then(function(answer) {
      this.name = answer.name;

      return this.prompt([
        {
          type: 'input',
          name: 'shortName',
          message: 'Your project abbreviation',
          default: this._shortenName(answer.name)
        }
      ]).then(function(answer) {
        this.shortName = answer.shortName;
      }.bind(this));
    }.bind(this))
  }

  configuring() {
    this._writeConfig();
  }

  writing() {
    this._writeSrc();
  }

  _writeConfig() {
    this.fs.copyTpl(
      this.templatePath('config'),
      this.destinationPath(),
      {
        name: this.name,
        shortName: this.shortName
      }
    );
    console.log('config written');
  }

  _writeSrc() {
    this.fs.copyTpl(
      this.templatePath('src'),
      this.destinationPath('src'),
      {
        name: this.name,
        shortName: this.shortName
      }
    );
    console.log('src written');
  }

  _shortenName(name) {
    var shortName = name
      .trim()
      .toLowerCase()
      .replace(/[^\s|\w]/g, '')
      .replace(/\s/g, '-');

    return shortName;
  }
}
