# CSS3中的Grid布局新特性

CSS Grid布局是CSS3中引入的一项强大的布局系统，它允许开发人员以更灵活的方式设计和组织网页布局。相比传统的基于盒模型的布局方法，Grid布局提供了更多的控制和自由度，使得创建复杂的网格结构变得更加简单和直观。

## 1. 网格容器与网格项

在Grid布局中，网格被分为网格容器和网格项两个部分。网格容器是网格布局的父元素，通过设置其为`display: grid;`可以启用网格布局。而网格项则是网格容器内的子元素，它们被放置在网格中的不同单元格中。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 定义三列等宽的网格 */
  grid-gap: 10px; /* 设置网格间隙 */
}

.item {
  grid-column: span 2; /* 横跨两列 */
  grid-row: span 1; /* 纵向占据一个单元格 */
}
```