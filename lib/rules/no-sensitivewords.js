module.exports={
    meta: {
        type: 'problem',
        messages: {
            someMessageId: "forbid to use sensitive word",
        },
        schema:[]
    },
    create:function(context){
        const sensitivewords=['sensitive','word','example'];
        return {
            'Literal':function(node){
                if(node.parent.type === 'Property' && node.parent.key.name==='description') {
                    const text=node.value.raw.toLowerCase();
                    for(const word of sensitivewords) {
                        if(text.includes(word)) {
                            context.report({
                                node: node,
                                messageId: "someMessageId"+ word,
                            })
                        }
                    }
                }
            }
        }
    }
}