/**
 * @fileoverview no console time
 * @author Coloey
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
var requireIndex = require("requireindex");
// import all rules in lib/rules
const output = {
  rules: requireIndex(__dirname + "/rules"), // 导出所有规则
  configs: {
    // 导出自定义规则
    recommended: {
      plugins: ["easy"], // 指定插件
      rules: {
        "easy/no-console-time": "error",
        "easy/no-settimeout-number": "error",
      },
    },
  },
};
module.exports = output;
