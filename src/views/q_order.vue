<script setup lang="ts">
import { ElMessage, ElNotification } from 'element-plus';
import { http } from '../axios';
import { ref } from 'vue'
const input = ref('')

let key = ref()
let listsz = ref<[]>([])
let lists = ref<[]>([])


async function cx(){

    
const res =    await http.post("/Pay/qorder", { U_adder: input.value})
   let extractedData = res.data

 listsz = extractedData.data
  console.log(listsz)
  ElNotification({
    title: '卡密信息：',
    dangerouslyUseHTMLString: true,
    message: extractedData.data,
  })


}



</script>


<template>
    

 
    <div class="order_info" @touchmove.prevent @mousewheel.prevent style="text-align: center;" >


<el-card style="background-color: transparent ; text-align: center;  border: 1px solid transparent ;  background-color: rgba(255, 255, 255,0.1); box-shadow: 5px 5px 0 0 rgba(0, 0,0, 0.3);  height: 250px; "  class="order">
    <el-input  v-model="input" style=" text-align: center; width: 240px; position: absolute ; left: 20%; background-color: transparent; background: transparent;  " placeholder="联系方式" />
 
 
  
    <el-row  v-for="(value,index) in listsz" :key="index"  :gutter="20">

    
  </el-row>
</el-card>

<ElButton @click="cx()" style="position: absolute; top: 18%; left: 49%; background: transparent;">
    <el-text class="mx-1" type="danger">查询</el-text>
</ElButton>    
</div>

</template>


<style>

.order_info{

height: 100%;
width: 97%;
/* background-color: chartreuse; */
position: absolute;

top: 20%;



}

.order{
width: 20%;
position: absolute;
left: 40.8%;

}

</style>