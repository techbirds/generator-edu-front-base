'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {}

  writing() {
    // 本地通过link的方式依赖base是能够正常工作，但是通过npm install url依赖后
    // 终端总是提示`When copying multiple files, provide a directory as destination`
    // 这个坑原来是依赖姿势导致的，依赖对象需要放置到`dependencies`中去，而不是`devDependencies`

    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('.eslintrc.json'),
      this.destinationPath('.eslintrc.json')
    );

    // npm install git+[url] 安装默认会将`.gitignore`命名成`.npmignore`
    this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
  }

  install() {
    this.installDependencies();
  }
};
