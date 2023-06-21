/**
 * @fileoverview forbid to use console.time
 * @author Coloey
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    messages: {
      someMessageId: "forbid to use console.time",
    },
    docs: {
      description: "forbid to use console.time",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      "CallExpression MemberExpression": (node) => {
        if (node.object.name === "console" && node.property.name === "time") {
          context.report({
            node,
            messageId: "someMessageId",
          });
        }
      },
    };
  },
};
