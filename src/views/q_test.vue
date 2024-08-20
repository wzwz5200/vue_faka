
<script setup lang="ts">


import { http } from '../axios';
import {  getCurrentInstance, nextTick,  reactive, ref } from 'vue'
let listsz = ref<[]>([])
const input = ref('')
const radio1 = ref(true)
let key = ref('')
let arr = ref({
  list: [

  ]
});
let Test = ref({
  list: [

  ]
});





async function cx_orade(this: any){
    await nextTick();
   const res =    await http.post("/Pay/getorder", { Orade: input.value})
   const extractedData = res.data



   key.value = extractedData.data


 

}



async function cx(){
    await nextTick();
const res =    await http.post("/Pay/qorder", { U_adder: input.value})
   let extractedData = res.data

  

 arr.value.list = extractedData.data



 

  console.log(arr)



}



</script>


<template>


<el-radio-group v-model="radio1" size="large" style="position: absolute;  left: 42.7%; top: 21.8%; ">
      <el-radio-button label="联系方式" :value=true />
      <el-radio-button label="订单号" :value="false"  />
    </el-radio-group>

<el-card  class="qcar" style="background-color: transparent;  border: 1px solid transparent ;  background-color: rgba(255, 255, 255,0.1); box-shadow: 5px 5px 10px 10px rgba(0, 0,0, 0.4);">
    <template #header>
      <div v-show="radio1" class="card-header">

        <el-input   v-model="input" :style="{textAlign:'center'}" style="width: 240px; text-align: center;  position: relative; left: 34%;  " placeholder="输入联系方式" />
      </div>
      <div v-show ="!radio1" class="card-header">

      <el-input   v-model="input" :style="{textAlign:'center'}" style="width: 240px; text-align: center;  position: relative; left: 34%;  " placeholder="输入订单号" />
</div>
   
    </template>
    
    <div v-show="!radio1" class="keybox" >  
      <el-text style="color: #FFFFFF; font-size: x-large;"     class="mx-1" size="large">{{ key }}</el-text>
    </div>
   
    <div  v-show="radio1" class="keybox"  >
       
        <el-text style="color: #FFFFFF; font-size: x-large;"   v-for="(o, index) in arr"  :key="index"  class="mx-1" size="large">{{ "信息:" + o  }}</el-text>
       
      

    </div>
   
   
    <template  #footer>
        <div v-show="radio1" >
               <el-button  style="position: relative; left: 47.7%;" type="primary" @click="cx()">查询</el-button>
        </div>
      
        <div v-show="!radio1" >
             <el-button style="position: relative; left: 47.7%;" type="primary" @click="cx_orade()">查询</el-button>
        </div>
      
    </template>
  </el-card>



</template>


<style>
.qcar{

   min-width: 40%;

    position: absolute;

    background: transparent;
    background-color: transparent;
    left: 27%;
    top: 28%;


}

.keybox {

    text-align: center;

}

</style>