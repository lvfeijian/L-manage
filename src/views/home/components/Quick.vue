<template>
  <div class="quick-box">
    <div class="quick-title">
      <span>快捷方式</span>
    </div>
    <div class="quick-content">
      <el-row>
        <el-col :span="6">
          <div class="quick-del" @click="$router.push({path: '/guide'})">
            <!-- <img class="content_img" src="../img/guide.png" alt> -->
            <p>指南维护</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="quick-del" @click="$router.push({path: '/wiki'})">
            <!-- <img class="content_img" src="../img/wiki.png" alt> -->
            <p>百科维护</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="quick-del" @click="$router.push({path: '/plant'})">
            <!-- <img class="content_img" src="../img/plant.png" alt> -->
            <p>种植维护</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="quick-del" @click="$router.push({path: '/message'})">
            <!-- <img class="content_img" src="../img/message.png" alt> -->
            <p>消息通知</p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="quick-del" @click="$router.push({path: '/monitor'})">
            <!-- <img class="content_img" src="../img/camera.png" alt> -->
            <p>监控设备</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="quick-del" @click="$router.push({path: '/station'})">
            <!-- <img class="content_img" src="../img/station.png" alt> -->
            <p>监测设备</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="quick-del" @click="$router.push({path: '/irrigation'})">
            <!-- <img class="content_img" src="../img/guangai.png" alt> -->
            <p>灌溉设备</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="quick-del" @click="$router.push({path: '/product/instock'})">
            <!-- <img class="content_img" src="../img/churuku.png" alt> -->
            <p>出入库</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type='text/javascript'>
export default {
  name: 'Quick',
  data () {
    return {}
  }
}
</script>
<style lang='scss' scoped>
.quick-box {
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 4px 4px rgba(55,50,119,.03);
  border-radius: 4px;
  border: 4px solid #eee;
  .quick-title {
    flex-direction: row;
    justify-items: center;
    font-size: 15px;
    color: #7f7f7f;
    flex: none;
    padding: 10px 0;
    background: #eee;
    span {
      margin-left: 10px;
      font-weight: bolder;
    }
  }
}
.quick-content {
  font-size: 14px;
  .quick-del {
    height: 120px;
    text-align: center;
    padding-top: 20px;
    border: 1px solid #f0f0f0;
    cursor: pointer;
    color: #0d0d0d;
    &:hover {
      box-shadow: 0 0 16px rgba(0,0,0,.2);
      transition: all .3s ease-out
    }
  }
}
</style>
