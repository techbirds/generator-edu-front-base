'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {}

  writing() {
    // 本地通过link的方式依赖base是能够正常工作，但是通过npm install url依赖后
    // 终端总是提示`When copying multiple files, provide a directory as destination`

    // this.fs.copy(
    //   this.templatePath('.editorconfig'),
    //   this.destinationPath('.editorconfig')
    // );
    // this.fs.copy(
    //   this.templatePath('.eslintrc.json'),
    //   this.destinationPath('.eslintrc.json')
    // );
    // this.fs.copy(
    //   this.templatePath('.gitignore'),
    //   this.destinationPath('.gitignore')
    // );

    this.fs.copy(
      this.templatePath('*'),
      this.destinationRoot(), {
        globOptions: {
          dot: true
        }
      }
    );

    this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
  }

  install() {
    this.installDependencies();
  }
};
