const rule = require("../../../lib/rules/no-sensitivewords"),
RuleTester = require("eslint").RuleTester;
const ruleTester=new RuleTester()
ruleTester.run('no-sensitivewords',rule,{
    valid:[
        'hello',
        'console',
        'nice'
    ],
    invalid: [
        {
            code: '<div>sensitive</div>',
            errors: [{message: 'forbid to use sensitive word'}]
        }
    ]
})