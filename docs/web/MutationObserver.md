在维护一个jquery的旧项目中，处理异步操作时使用的是回调，并没有发现Promise或async/await来处理promise，如果通过大规模重构来支持Promise或async/await，不太现实而且成本也很高，所以我一开始使用的是setTimeout，但是后面我发现使用定时器来处理异步太不稳定了，会受到网络的影响。后面发现MutationObserver可以很好的解决问题。

# MutationObserver概述

- 可以监听DOM树中的变化，如元素的添加、删除、属性或文本内容的变化等
- 当DOM变化后，会触发MutationObserver的回调函数

# 使用MutationObserver的步骤：

1. 创建一个回调函数，用于监视DOM时，当变化时触发的回调函数：

	创建一个MutationObserver对象，并为其提供一个回调函数，这个函数将在每次DOM变化时被调用。

```javascript
// 创建一个回调函数，它将在DOM变化时被调用
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};
```

2. 创建一个MutationObserver实例

```javascript
var observer = new MutationObserve(callback)
```

3. 配置观察选项

```javascript
// 配置观察选项:
var config = {
    attributes: true, // 观察属性变动
    childList: true, // 观察子节点的变动，比如添加、删除或者更多
    subtree: true // 观察后代节点
};
```

4. 选择目标节点

```javascript
var targetNode = document.getElementById('some-id');
```

5. 调用observe方法，开始观察目标节点

```javascript
observer.observe(targetNode, config);
```

6. 停用方法

```javascript
// 之后，你可以在任何时候停止观察
observer.disconnect();
```

`MutationObserver`的回调函数并不是在DOM变化发生的那一刻立即执行的。相反，它会在主线程的其他任务都完成后，也就是在下一个事件循环（event loop）开始前，才会执行。这就意味着`MutationObserver`的回调函数是异步执行的。

这种设计有两个主要的优点：

1. **性能**：如果DOM频繁地发生变化，例如在一个循环中连续添加了多个节点，那么回调函数并不会立即执行，而是会在所有的变化都完成后，一次性地执行。这样可以避免因为频繁地执行回调函数而导致的性能问题。
2. **一致性**：由于回调函数是在所有的同步任务都完成后才执行的，所以当你在回调函数中访问DOM时，你看到的总是最新的、一致的状态。你不
