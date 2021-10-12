graph.node(function (node) {
    // depth 类似节点标识
    if(node.depth == 0){
        console.log(node)
        return {
            size:[100,60],
            style:{
                fill:'red',
                // stroke:''
            },
            label:node.id
        }
    }

    if(node.depth == 1){
        console.log(node)
        return {
            size:[100,60],
            style:{
                fill:'blue',
         
            },
            label:node.id
        }
    }
    return {
        label: node.id, // 设置显示名称
        labelCfg: {
            // position: node.children && node.children.length > 0 ? 'left' : node.x > centerX ? 'right' : 'left', // 设置显示左右
            offset: 5
        }
    };
});