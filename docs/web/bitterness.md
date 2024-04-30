---
title: grid布局
layout: doc
outline: false
---
# 跟随鼠标的骨头

## 实现函数
```js
import {ref,onMounted,onBeforeUnmount} from 'vue'
  //获取骨头的Ref
  const bitternessRef = ref<HTMLElement>()
  let timer: any = 0

  onMounted(() => {
    //初始化骨头位置
    let deg = 0; let ex = 0; let ey = 0; let vx = 0; let vy = 0; let count = 0
    //获取骨头位置
    function setbitternessPosition(e: { x: number; y: number }) {
      ex = e.x - bitternessRef.value.offsetLeft - bitternessRef.value.clientWidth / 2
      ey = e.y - bitternessRef.value.offsetTop - bitternessRef.value.clientHeight / 2
      deg = 360 * Math.atan(ey / ex) / (2 * Math.PI) + 90
      if (ex < 0)
        deg += 180

      count = 0
    }
    //绑定事件--鼠标移动时触发更新获取骨头位置
    window.onmousemove = setbitternessPosition

    //更新骨头位置
    function draw() {
      bitternessRef.value.style.transform = `rotate(${deg}deg)`
      if (count < 100) {
        vx += ex / 100
        vy += ey / 100
      }
      bitternessRef.value.style.left = `${vx}px`
      bitternessRef.value.style.top = `${vy}px`
      count++
    }
    //开启定时器每隔一毫秒更新位置
    timer = setInterval(draw, 1)
  })

  onBeforeUnmount(() => {
    window.onmousemove = null
    clearInterval(timer)
  })
```

```html
  <img src="/img/bitterness.png" id="bitternessRef" ref="bitternessRef" />
```

```css
<style scoped>
#bitternessRef {
  position: fixed;
  font-size: 24px;
  width:24px;
}
</style>
```

<script lang='ts' setup>
  import {ref,onMounted,onBeforeUnmount} from 'vue'
  const bitternessRef = ref<HTMLElement>()
  let timer: any = 0

  onMounted(() => {
    let deg = 0; let ex = 0; let ey = 0; let vx = 0; let vy = 0; let count = 0

    function setPlanePosition(e: { x: number; y: number }) {
      ex = e.x - bitternessRef.value.offsetLeft - bitternessRef.value.clientWidth / 2
      ey = e.y - bitternessRef.value.offsetTop - bitternessRef.value.clientHeight / 2
      deg = 360 * Math.atan(ey / ex) / (2 * Math.PI) + 90
      if (ex < 0)
        deg += 180

      count = 0
    }
    window.onmousemove = setPlanePosition

    function draw() {
      bitternessRef.value.style.transform = `rotate(${deg}deg)`
      if (count < 100) {
        vx += ex / 100
        vy += ey / 100
      }
      bitternessRef.value.style.left = `${vx}px`
      bitternessRef.value.style.top = `${vy}px`
      count++
    }
    timer = setInterval(draw, 1)
  })

  onBeforeUnmount(() => {
    window.onmousemove = null
    clearInterval(timer)
  })
</script>
<div >
  <img src="/img/bitterness.png" id="bitternessRef" ref="bitternessRef" />
</div>



<style scoped>
#bitternessRef {
  position: fixed;
  font-size: 24px;
  width:24px;
}
</style>