---
title: grid布局
lang: en-US
layout: doc
---
# sass颜色函数
<button class="btn text-[#12affa] !w-20">按钮</button>
<button class="btn">按钮</button>
<button class="btn">按钮</button>
<button class="btn">按钮</button>
<el-button type="primary">1</el-button>
<el-steps style="max-width: 600px" :active="active" finish-status="success">
  <el-step title="Step 1" />
  <el-step title="Step 2" />
  <el-step title="Step 3" />
</el-steps>
<el-button style="margin-top: 12px" @click="next">Next step</el-button>
<div class="demo-image__preview mt-7" >
  <el-image
    style="width: 100px; height: 100px"
    :src="url"
    :zoom-rate="1.2"
    :max-scale="7"
    :min-scale="0.2"
    :preview-src-list="srcList"
    :initial-index="4"
    fit="cover"
  />
</div>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
const url =
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
</script>

<style lang="scss">
.btn{
    width:50px;
    border:1px solid black;
    margin-left:8px;
}
.btn:hover{
  background:blue;
  color:#fff;
}

.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>