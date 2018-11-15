<style lang="scss" scoped>
  .header{
    height: 1.92rem;
    line-height: 1.92rem;
    color: #333333;
    div:last-of-type{
      background-size: 0.68rem;
      text-align: right;
      padding-right: 0.79rem;
      height: 41px;
    }
    div{
      line-height: 41px;
      height: 41px;
    }
    .icon{
      background: url(../common/images/icon2.png) no-repeat center right;
    }
    .more{
      background: url(../common/images/icon5.png) no-repeat center right;
      background-size: 8px 15px !important;
    }
  }
</style>

<template>
  <div class="header">
    <div class="col-xs-4 nop">{{title.one}}</div>
    <div class="col-xs-4 "></div>
    <div :class="icon" class="col-xs-4 nop">{{title.two}}</div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:Object
    },
    icon:{
      type:String
    }
  }
}
</script>
