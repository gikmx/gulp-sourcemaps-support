'use strict';

const Chai      = require('chai');

Chai.config.includeStack = false;
Chai.config.showDiff     = false;

global.expect = Chai.expect;