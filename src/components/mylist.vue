<style lang="scss" scoped>
  .list{
    list-style: none;
    width: 2.94rem;
    height: 2.98rem;
    border-radius: 0.2rem;
    border: solid 0.12rem;
    background: url(../common/images/icon3.png) no-repeat center;
    background-size: 100% 100%;
    position: relative;
    &.OK{
      border-color: #03df03;
    }
    &.NO{
      border-color: #ff0000;
    }
    &.over{
      border-color: #e5e5e5;
      background: url(../common/images/icon4.png) no-repeat center;
      background-size: 100% 100%;
      .inner{
        background-color: #7a7a7a;
        color: rgba(#ffffff,0.41);
      }
    }
    .inner{
      position: absolute;
      z-index: 2;
      width: 18px;
      height: 18px;
      background-color: #f50000;
      border-radius: 6px;
      text-align: center;
      font-size: 12px;
      color: #ffffff;
      left: 50%;
      top: -11px;
      transform: translateX(-50%);
      line-height: 18px;
    }
    .over{
      position: absolute;
      top: -0.12rem;
      left: -0.12rem;
      width: 2.94rem;
      height: 2.98rem;
      background: rgba(#000000, 0.41);
      border-radius: 0.2rem;
      color: #ffffff;
      font-size: 0.56rem;
      font-weight: 700;
      line-height: 2.98rem;
      text-align: center;
    }
  }
</style>

<template>
  <li class="list over">
    <div class="inner">1<div class="innerover"></div></div>
    <div class="over">已抢光</div>
  </li>
</template>

<script>
export default {
  data(){
    return{
      over:true
    }
  }
}
</script>
