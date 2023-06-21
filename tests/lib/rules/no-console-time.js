/**
 * @fileoverview forbid to use console.time
 * @author Coloey
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-console-time"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-console-time", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "console.log('hello')",
    "_.time({a:1});",
    "_.time('abc');",
    "_.time(['a', 'b', 'c']);",
    "lodash.time('abc');",
    "lodash.time({a:1});",
    "abc.time",
    "lodash.time(['a', 'b', 'c']);",
  ],

  invalid: [
    {
      code: "console.time('test')",
      errors: [{ message: "forbid to use console.time" }],
    },
  ],
});
