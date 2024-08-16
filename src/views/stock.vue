<script setup lang="ts">
import { http } from '../axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';



let Key = ref()


let route = useRoute()


 
 
onMounted(async ()=>{
     const res =    await http.post("/Pay/stock", {Orade : route.query.out_trade_no})
     const extractedData = res.data
  
     Key.value = extractedData.data
  
      console.log(Key.value)
  
  })

</script>


<template>

<div class="stock_card" @touchmove.prevent @mousewheel.prevent>

    <el-card class="cards" style="background-color: transparent;  border: 10px solid transparent ;   background-color: rgba(255, 255, 255,0.1); box-shadow: 5px 5px 5px 5px rgba(0, 0,0, 0.2);">
        <template #header>
      <div class="card-header">
        <el-text class="mx-1" style="color: black;" size="large">卡密</el-text>
      </div>
        </template>
        <template #footer>{{ Key }}</template>
        <el-text class="mx-1" style="color: black; font-size: large;" size="large">{{ route.query.out_trade_no }}</el-text>

      
  </el-card>



</div>


</template>


<style>

.stock_card{

    height: 100%;
    width: 97%;
    /* background-color: rgb(251, 255, 13); */

    position: absolute;
    top: 21%;

}

.cards{

    width: 40%;
    height: 40%;

    position: absolute;
    left: 30%;
    top: -18%;
    text-align: center;
    background-color: transparent;
    border: 10px solid transparent ;   background-color: rgba(255, 255, 255,0.1); box-shadow: 5px 5px 5px 5px rgba(0, 0,0, 0.9);


}

</style>