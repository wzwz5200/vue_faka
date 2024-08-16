<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import router from './router';

function cx(){

  router.push({
        name:'q_order',
    

    })


}
</script>

<template>


  
    <el-container>
      <el-header @touchmove.prevent @mousewheel.prevent>

        <div class="head">

          <div class="img">
            
            <a href="./">
            <img src="./assets/logo.svg" alt="">
            
          </a>
          
        </div>
        <el-text class="mx-1" type="primary" size="large">WZ发卡网</el-text>
        <el-button class="cxdd" @click="cx()" type="success">查询订单</el-button>
        <div class="tips"></div>
        <el-button class="tips-b " size="" type="primary">公告</el-button>
        </div>

     



      </el-header>

      <el-main>  <RouterView /></el-main>
    </el-container>



</template>

<style scoped>


.head{

  width: 100%;
  height: 200px;

/* 
  background-color: aqua; */

}

.ft{
  font: 1.3rem "Fira Sans", sans-serif;

  position:absolute;
  left: 380px;
  top: 0%;
  font-style: italic;

}

.img{
  width: 1.8%;
  position: absolute;
  left: 18%;
  top: 2.6%;
}

.mx-1{
  position: absolute;
  left: 20.8%;
  top: 2.9%;
}

.tips-b{
  position: absolute;
  left: 18%;
  top: 10%;
}

.tips{


  position: absolute;
  left: 18%;
  top: 10%;
  height: 100px;
  width: 200px;
/* 
  background-color: blue; */

}
.cxdd{

  position: absolute;
  right: 18%;
  top: 2.6%;

}
</style>
