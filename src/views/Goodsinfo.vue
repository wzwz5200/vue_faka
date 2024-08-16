<script lang="ts" setup>
import { http } from '../axios';
import router from '@/router';
import { ElButton, ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue'

let goods_name = ref() ;
let goods_info = ref() ;

let goods_price = history.state.Price

const input = ref('')





onMounted(async ()=>{

console.log(history.state.Name,history.state.Price)
const res =    await http.post("/Ginfo/lnt",{ Goods_ID: history.state.Goods_ID })
 const extractedData = res.data

 goods_name.value = extractedData.data.name
 goods_info.value = extractedData.data.bio

 


})



function onbuy(){

    if (input.value==""){
        
        ElMessage.error('联系方式不能为空')
        return


    }

    router.push({
        name:'order',
        state: {
            Price: goods_price,
            U_adder: input.value
           
    
    }

    })


}



</script>



<template>
    <div class="info-card" @touchmove.prevent @mousewheel.prevent>

 <el-card class="info_c" style="background: transparent; border: 1px solid transparent ;  background-color: rgba(255, 255, 250,0.0); box-shadow: 5px 5px 5px 5px rgba(0, 0,0, 0.3);" >
    <template #header>
      <div class="card-header">
        <span>{{goods_name }}</span>
      </div>
      

    </template>
    <span>{{goods_info }}</span>

 
</el-card>

<el-card class="price" style="background-color: transparent; border: 1px solid transparent ;  background-color: rgba(255, 255, 250,0.0); box-shadow: 5px 5px 5px 5px rgba(0, 0,0, 0.3);" >
    <template #header>
      <div class="card-header">
        <span>购买</span>
      </div>
    </template>


  <el-input  v-model="input" style=" position: absolute; top: 35%;   width: 240px" placeholder="请输入联系方式" />

  <el-button type="primary" style="position: absolute; top: 57%;" @click="onbuy" >购买</el-button>


    

  </el-card>


    </div>
</template>


<style>
.info-card{

    height: 100%;
    width: 97%;
    /* background-color: chartreuse; */
    position: absolute;

    top: 20%;


}

.price{
    width: 25%;
    height: 37%;
    position: absolute;
    left: 65.1%;
    background-color: transparent
}


.info_c{

    position: absolute;
    left: 17%;

    height: 37%;
    width: 48%;
    background-color: transparent

}




</style>