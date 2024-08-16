<script setup lang="ts">
import router from '@/router';
import TheWelcome from '../components/TheWelcome.vue'


import { onMounted, ref } from 'vue'
import  {http}  from '../axios';

interface ListItem {
  
  name: string
  img: string
  goods_id: string
  price: string
  
}

const loading = ref(true)
const lists = ref<ListItem[]>([])
const currentDate = new Date().toDateString()




const buy = (ID: any,price: any)=>{
  // console.log("va",lists.value.map(item => item.Name))
    router.push({
        name:'goods',
        state: {

          Goods_ID: ID,
          Price: price
    
    }

    })

}


const setLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

onMounted(async () => {
  loading.value = false
 
  
  const res =    await http.get("/Ginfo/goodsinfo")
  const extractedData = res.data
  
  
  lists.value = extractedData
  console.log(lists.value)
  

  console.log(lists.value)
})



</script>

<template>

<el-button class="spfl" size="small" type="primary" round>商品</el-button>

<div class="spml">
<!-- 
  <div class="goods_v">  
    <el-row :gutter="35">
    <el-col :xs="7" :sm="8" :md="40" :lg="3" :xl="1"  v-for='(item,index) in lists'>
   
     
  <el-card class="card_g"  :body-style="{ padding: '0px', marginBottom: '2px'  } " style="max-width: 380px;  padding: 1;  border: 1px solid transparent ;  background-color: rgba(255, 255, 255,0.1); box-shadow: 5px 5px 0 0 rgba(0, 0,0, 0.3);  text-align: center ;background-color: transparent">
  
    <img
      :src="item.img"
      style="width: 100%"
    />

    <h3 style="color: #c6e2ff;"> {{ item.name }}</h3>
<h3 style="color: #d9ecff;">{{ item.price }}</h3>

    

    <el-button type="primary"  plain style=" background: transparent;" @click="buy(item.name,item.price)" >购买</el-button>
  </el-card>

     
    </el-col>
  </el-row>

  </div> -->

  <div class="goods_v">
  
    <el-row :gutter="33">
    <el-col :xs="7" :sm="8" :md="40" :lg="5" :xl="1" class="cols"   v-for='(item,index) in lists'>
      
     
      
      <el-card
     
       shadow="always"
        :body-style="{ padding: '1px', marginBottom: '1px'  }"
         style="max-width: 280px;  padding: 0;  border: 1px solid transparent ;  background-color: rgba(255, 255, 255,0.1); box-shadow: 5px 5px 0 0 rgba(0, 0,0, 0.3);  text-align: center ;background-color: transparent  ;  position: relative; right: 21%;  margin-top: 12%;"
      >
  
  <img
   :src="item.img"

    style="max-width: 280px; max-height: 170px;"
  />
<h3 style="color: #c6e2ff;"> {{ item.name }}</h3>
<h3 style="color: #d9ecff;">{{ item.price }}</h3>

<el-button type="primary"  plain style=" background: transparent;" @click="buy(item.goods_id,item.price)" >购买</el-button>
</el-card>

      
    </el-col>
   
  </el-row>

  

 


  



  </div>
 
  

</div>

</template>


<style>

.card_g{


  position: relative;
right: 21%;

margin-left: 1%;
margin-top: 12%;
     max-width: 280px;  padding: 0;  border: 1px solid transparent ;  background-color: rgba(255, 255, 255,0.1); box-shadow: 5px 5px 0 0 rgba(0, 0,0, 0.3);  text-align: center ;background-color: transparent;

}


.goods_img{

  width: 80%;
  height: 150px;
}

.colss{

  background-color: rgb(7, 255, 110);
}

.spfl{

  position: absolute;
  left: 18%;
  top: 18%;

}


.spml{

  width: 97%;
  height: 100%;


  position: absolute;

  top: 22%
  

 


}

.goods_v{
  height: 100%;

  width: 67%;


  position: absolute;

  left: 18%;


}
.cards{

position: relative;
right: 21%;

margin-left: 2%;
margin-top: 12%;
border: 0%  solid;



background-color: black;

}


</style>
