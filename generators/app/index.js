"use strict";

const yeomanGenerator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
// const MainGenerator = require('../_ng/full/generator').MainGenerator;

module.exports = yeomanGenerator.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeomanGenerator.Base.apply(this, arguments);

    // Next, add your custom code
    // this.option('coffee'); // This method adds support for a `--coffee` flag
  },

  writeConfig: function () {
    this.fs.copyTpl(
      this.templatePath('config'),
      this.destinationPath(),
      {
        name: 'Locale Editor',
        shortName: 'leditor'
      }
    );
    console.log('config written');
  },

  writeSrc: function () {
    this.fs.copyTpl(
      this.templatePath('src'),
      this.destinationPath('src'),
      {
        name: 'Locale Editor',
        shortName: 'leditor'
      }
    );
    console.log('src written');
  },
  // method2: function () {
  //   console.log('method 2 just ran');
  // }
});
