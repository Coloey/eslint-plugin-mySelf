/**
 * @fileoverview setTimeout第二个参数禁止是数字
 * @author Coloey
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/settimeout-no-number"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 7, // 默认支持语法为es5
  },
});
ruleTester.run("settimeout-no-number", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "let number=1000;setTimeout(()=>{console.log(1)},number)",
    },
  ],

  invalid: [
    {
      code: "setTimeout(()=>{console.log(11)},1000)",
      errors: [
        { message: "setTimeout第二个参数禁止是数字", type: "CallExpression" },
      ],
    },
  ],
});
