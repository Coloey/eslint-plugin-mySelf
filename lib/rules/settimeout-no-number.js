/* eslint-disable eslint-plugin/prefer-message-ids */
/**
 * @fileoverview setTimeout第二个参数禁止是数字
 * @author Coloey
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "setTimeout第二个参数禁止是数字",
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
      CallExpression: (node) => {
        if (node.callee.name !== "setTimeout") return; // 不是定时器即过滤
        const timeNode = node.arguments && node.arguments[1]; // 获取第二个参数
        if (!timeNode) return; // 没有第二个参数
        // 检测报错第二个参数是数字 报错
        if (timeNode.type === "Literal" && typeof timeNode.value === "number") {
          context.report({
            node,
            message: "setTimeout第二个参数禁止是数字",
          });
        }
      },
    };
  },
};
