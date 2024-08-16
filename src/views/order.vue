<script setup lang="ts">
import { ElButton } from 'element-plus';
import { onMounted, ref } from 'vue';
import  {http}  from '../axios';

let OrderId = ref() ;
var Pricez : number = history.state.Price


onMounted(async ()=>{
    const res =    await http.get("/Pay/order", {  params: {   U_adder:history.state.U_adder
    } })
  const extractedData = res.data
  
  OrderId.value = extractedData.data
  
  
  console.log(OrderId.value,history.state.U_adder)
  
  })




  
async function buy(){


const res =    await http.post("/Pay/alilpay", { Order: OrderId.value, Price: Pricez})
  const extractedData = res.data

  console.log(extractedData.data)
  window.open(extractedData.data, '_blank')


}






</script>



<template>


<div class="order_info" @touchmove.prevent @mousewheel.prevent >

  <el-card style="background-color: transparent;  border: 1px solid transparent ;  background-color: rgba(255, 255, 255,0.1); box-shadow: 5px 5px 0 0 rgba(0, 0,0, 0.3);  "  class="order">
<h3>订单号：{{ OrderId }}</h3>
  </el-card>

<ElButton @click="buy()" style="position: absolute; top: 24%; left: 49%; background: transparent;">
    支付
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