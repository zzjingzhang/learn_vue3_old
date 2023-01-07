// render函数

const h = (tag, props, children) => {
    // vnode就是一个JavaScript对象
    return {
        tag,
        props,
        children
    }
}


// 挂载
const mount = (vnode, container) => {
    // 1.创建出真实的原素，并在vnode上保留el
    const el = vnode.el = document.createElement(vnode.tag);

    // 2.处理props
    if (vnode.props) {
        for (const key in vnode.props) {
            const value = vnode.props[key]
            if (key.startsWith('on')) {
                el.addEventListener(key.slice(2).toLowerCase(), value)  // 对事件监听的判断
            } else {
                el.setAttribute(key, value)
            }
        }
    }

    // 3.处理children
    if (vnode.children) {
        if (typeof vnode.children === 'string') {
            el.textContent = vnode.children
        } else {
            vnode.children.forEach(item => {
                mount(item, el)
            });
        }

    }

    // 4.将el挂载到container上
    container.appendChild(el);
}

// 新旧node对比
const patch = (n1, n2) => {
    // 新旧node节点类型不一样，直接移除旧节点，添加新节点
    if (n1.tag !== n2.tag) {
        const n1ElParent = n1.el.parentElement;
        n1ElParent.removeChild(n1.el)
        mount(n2, n1ElParent)
    } else {
        // 1.取出element对象，并且在n2中保存
        const el = n2.el = n1.el;

        // 2 处理props
        const oldProps = n1.props || {}

        const newProps = n2.props || {}
        // 2.1 获取所有的newProps添加到el上面

        for (const key in newProps) {
            const oldValue = oldProps[key]
            const newValue = newProps[key]


            if (newValue !== oldValue) {
                if (key.startsWith('on')) {
                    el.addEventListener(key.slice(2).toLowerCase(), newValue)  // 对事件监听的判断
                } else {
                    el.setAttribute(key, newValue)
                }

            }
        }

        // 2.2删除旧的props
        for (const key in oldProps) {
            const oldValue = oldProps[key]
            if (key.startsWith('on')) {
                el.removeEventListener(key.slice(2).toLowerCase(), oldValue)  // 对事件监听的判断
            }
            if (!(key in newProps)) {

                el.removeAttribute(key)


            }
        }


        // 3.处理children
        const oldChildren = n1.children || []
        const newChildren = n2.children || []
        if (typeof newChildren === 'string') {  //情况一 newChildren本身是一个string
            // 边界情况 edge case
            if (typeof oldChildren === 'string') {
                if (newChildren !== oldChildren) {
                    el.textContent = newChildren
                }
            } else {
                el.innerHTML = newChildren
            }
        } else {  // 情况二 newChildren本身是一个数组
            if (typeof oldChildren === 'string') {
                el.innerHTML = ''
                newChildren.forEach(item => {
                    mount(item, el)
                })

            } else {
                // 1.前面有相同节点的元素进行patch操作
                const commonLength = Math.min(oldChildren.length, newChildren.length);
                for (let i = 0; i < commonLength; i++) {
                    patch(oldChildren[i], newChildren[i])
                }

                // 2.newChildren.length > oldChildren.length
                if (newChildren.length > oldChildren.length) {
                    newChildren.slice(oldChildren.length).forEach(item => {
                        mount(item, el)
                    })
                }

                // 3.newChildren.length < oldChildren.length

                if (newChildren.length < oldChildren.length) {
                    oldChildren.slice(newChildren.length).forEach(item => {
                        el.removeChild(item.el)
                    })

                }
            }
        }

    }

}