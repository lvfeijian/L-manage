<template>
  <div class="todo-box">
    <div class="todo-title">
      <span>待办事项</span>
    </div>
    <div class="todo-content">
      <div class="row-wrap">
        <div class="bg1 wrap-item" @click="$router.push({path: '/garden'})">
          <!-- <img class="content_img" src="../img/daishen.png"> -->
          <div>
            <div>待审果园</div>
            <div class="num">{{data[0].gardenAmount}}</div>
          </div>
        </div>
        <div class="bg2 wrap-item" @click="$router.push({path: '/review/qrcode'})">
          <!-- <img class="content_img" src="../img/erweima.png"> -->
          <div>
            <div>待审二维码</div>
            <div class="num">{{data[1].slAmount}}</div>
          </div>
        </div>
      </div>
      <div class="row-wrap">
        <div class="bg3 wrap-item">
          <!-- <img class="content_img" src="../img/yichang.png"> -->
          <div>
            <div>待审异常</div>
            <div class="num">{{data[2].msgAmount}}</div>
          </div>
        </div>
        <div class="bg4 wrap-item" @click="$router.push({path: '/feedback'})">
          <!-- <img class="content_img" src="../img/xinxi.png" alt=""> -->
          <div>
            <div>待处理反馈</div>
            <div class="num">{{data[3].sugAmount}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
export default {
  name: "TodoList",
  props:{
      data:{
          type:Array,
          default(){
              return []
          }
      }
  },
  mounted() {
  },
  methods: {

  }
};
</script>
<style lang='scss' scoped>
.todo-box {
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 4px 4px rgba(55, 50, 119, 0.03);
  border-radius: 4px;
  border: 4px solid #eee;
  .todo-title {
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
  .bg1 {
    background-image: linear-gradient(-90deg, #7a4ffb 0%, #bbaaea 100%),
      linear-gradient(#ffffff, #ffffff);
  }
  .bg2 {
    background-image: linear-gradient(-45deg, #42d7fa 0%, #03edcd 100%),
      linear-gradient(#ffffff, #ffffff);
  }
  .bg3 {
    background-image: linear-gradient(-45deg, #f75c50 0%, #fe8381 100%),
      linear-gradient(#ffffff, #ffffff);
  }
  .bg4 {
    background-image: linear-gradient(-45deg, #4779e9 0%, #6da9ff 100%),
      linear-gradient(#ffffff, #ffffff);
  }
  .todo-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
  }
  .row-wrap {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-around;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 8px;
    color: #fff;
  }
  .wrap-item {
    flex: none;
    width: 44%;
    padding: 34px 0;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: all 0.35s ease-out;
    cursor: pointer;
    > .content_img {
      margin-right: 15px;
    }
    .num {
      font-size: 18px;
      font-weight: bolder;
      text-align: center;
    }
    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: translate3d(0, -2px, 0);
    }
  }
}
</style>