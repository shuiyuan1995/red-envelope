<style lang="scss">
  @import "common/sass/variable";
  .navbar{
    position: fixed !important;
    width: 100%;
    top: 0;
    background: linear-gradient(to right,#03587e,#08ce5b);
    height: 1.76rem;
    margin-bottom: 0rem !important;
    z-index: 3;
    .navbar-brand{
      color: $color;
      font-size: $font-size-h;
    }
    .navbar-toggle{
      background: url(./common/images/icon.png) no-repeat center;
      width: 0.72rem;
      height: 0.6rem;
      background-size: 100% 100%;
      padding: 0;
      border: none;
      margin-top: 0.64rem;
      border-radius: 0rem;
    }
    .changelan{
      float: right;
      margin-right: 0.6rem;
      .btn{
        background: none;
        color: $color;
        font-size: 0.48rem;
        line-height: 1.76rem;
        padding: 0rem;
        img{
          width: 0.72rem;
          height: 0.48rem;
          margin-right: 0.16rem;
        }
      }
    }
    .collapse{
      background: #fff;
    }
  }
</style>

<template>
  <div id="app">
    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          </button>
          <div class="dropdown changelan">
            <div class="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <img src="./common/images/icon1.png">{{thislang}}
            </div>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li @click="changeL(0)"><a href="#">ZN</a></li>
              <li @click="changeL(1)"><a href="#">EN</a></li>
              <li @click="changeL(2)"><a href="#">L</a></li>
              <li @click="changeL(3)"><a href="#">Z</a></li>
            </ul>
          </div>
          <a class="navbar-brand" href="#">LOGO EOS</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex';
// import data from '@/common/data/data.json'
export default {
  data() {
    return{
      Language:['EN','ZN','L','Z']
    }
  },
  created(){
    this.setlanguage(this.Language)
    this.thislanguage(0)
  },
  computed:{
    ...mapGetters([
      "thislang"
    ])
  },
  methods:{
    changeL(i){
      this.thislanguage(i)
    },
    ...mapMutations({
      setlanguage:'SET_LANGUAGE',
      thislanguage:'THIS_LANGUAG'
    }),
  }
}
</script>

