<style lang="scss" scoped>
  .home{
    margin: 0.16rem 0.8rem 1.2rem 0.8rem;
    padding-top: 1.96rem;
    .btn-group{
      height: 41px;
      .btn{
        height: 41px;
        outline: none;
        border: solid 1px #0076ff;
        background: #fff;
        color: #0076ff;
        font-weight: bold;
        &.active{
        background: #0076ff;
        color: #fff;
        }
      }
    }
    .myul{
      margin: 0px;
      padding: 1rem 0rem 0rem;
      display: flex;
      flex-wrap: wrap;
      border-bottom: 1px solid #eaeaea;
      li{
        margin-right: 0.54rem;
        margin-bottom: 0.96rem;
        &:nth-of-type(4n){
          margin-right: 0px;
        }
      }
    }
    .myinput{
      input{
        height: 40px;
        border: solid 1px #dcdcdc;
        border-right: 0px;
        &::placeholder{
          color: #a1a1a1;
        }
      }
      label{
        position: relative;
        input{
          width: 100%;
          box-sizing: border-box;
          padding: 0 24px 0 8px;
          text-align: center;
        }
      }
      span {
        position: absolute;
        top: 0;
        right: 8px;
        line-height: 40px;
      }
      button{
        height: 40px;
        background-color: #3193f4;
        border-radius: 0 4px 4px 0;
        border: none;
        outline: none;
        font-size: 14px;
        color: #ffffff
      }
    }
    .instructions{
      text-align: center;
      span{
        color: #ff890b;
      }
    }
    .listbox{
      height: 425px;
      border: solid 1px #e7e7e7;
      .tablecange{
        height: 40px;
        border-bottom: solid 1px #e7e7e7;
        line-height: 40px;
        padding-left: 15px;
        span{
          margin-right: 36px;
          position: relative;
          display: inline-block;
          height: 40px;
          line-height: 40px;
          font-weight: 600;
          &.active{
            color: #3193f4;
            &::after{
              position: absolute;
              bottom: 0px;
              left: 0px;
              content: "";
              width: 71px;
              height: 2px;
              background: #3193f4;
            }
          }
        }
      }
      .table{
        padding: 0 8px;
        box-sizing: border-box;
        .title{
          height: 35px;
          line-height: 35px;
          border-bottom: solid 1px #e7e7e7;
          span{
            color: #333333;
            font-weight: 500;
          }
        }
        .tr{
          height: 31px;
          line-height: 31px;
          span{
            color: #999999;
          }
        }
        span {
          text-align: center;
          white-space:nowrap; 
          overflow:hidden; 
          text-overflow:ellipsis;
        }
      }
    }
  }
</style>


<template>
  <div class="home clearfix">
    <mythead icon="icon" :title="{one:'选择红包金额',two:'How To Play'}"></mythead>
    <div class="btn-group btn-group-justified" role="group" aria-label="...">
      <div class="btn-group" role="group">
        <button type="button" class="btn active">1 EOS</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn">5 EOS</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn">10 EOS</button>
      </div>
    </div>
    <ul class="myul">
      <li :key="item" v-for="item in 6" is="mylist"></li>
    </ul>
    <mythead icon="more" :title="{one:'MORE'}"></mythead>
    <div class="myinput">
      <input type="text" placeholder="输入尾数" class="col-xs-7">
      <label class="col-xs-2 nop">
        <input type="text" value="1">
        <span>个</span>
      </label>
      <button class="col-xs-3">发红包</button>
    </div>
    <p class="col-xs-12 instructions">抢到的红包尾数为 <span>0</span>，您将获得 <span>1.0000</span> EOS</p>
    <div class="listbox col-xs-12 nop">
      <div class="tablecange">
        <span class="active">ALL OWNS</span>
        <span>RECORD</span>
        <span>RANK</span>
      </div>
      <div class="table">
        <div class="title">
          <span class="th col-xs-2 nop">Time</span>
          <span class="th col-xs-4 nop">lucky dog</span>
          <span class="th col-xs-2 nop">number</span>
          <span class="th col-xs-4 nop">奖金</span>
        </div>
        <div class="tr" v-for="item in 10" :key="item">
          <span class="td col-xs-2 nop">12:00</span>
          <span class="td col-xs-4 nop">2389u4u3r290110...</span>
          <span class="td col-xs-2 nop">1</span>
          <span class="td col-xs-4 nop">1000.0000 EOS</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import mythead from '@/components/mythead.vue'
import mylist from '@/components/mylist.vue'

export default {
  name: 'home',
  components: {
    mythead,
    mylist
  }
}
</script>
