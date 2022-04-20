<template>
       <b-container fluid="sm"  class="py-3"> 
        <promotionSlide/>
         
        <b-container fluid> 
    
      
   <productsTypes/>   
           <b-row class="py-2">  
 
         <cardProducts titleProducts="คุณโคมิย่อส่วน 1" contentProducts="ไม่แพงนะแกร ซื้อเหอะ" image="https://cu.lnwfile.com/_/cu/_raw/m4/mk/di.jpg"/>
         <cardProducts titleProducts="คุณโคมิย่อส่วน 2" contentProducts="ไม่แพงนะแกร " image="https://cdn.store-assets.com/s/886260/i/40839227.png"/>
         <cardProducts titleProducts="คุณโคมิย่อส่วน 3" contentProducts=" ซื้อเหอะ" image="https://cdn1.sugotoys.com.au/images/20220327174450/GoodSmileCompanyNendoroidKomiCantCommunicateShokoKomiFigure-1.jpg
"/>
         <cardProducts titleProducts="คุณโคมิย่อส่วน 4" contentProducts="ซื้อเหอะ ซื้อเหอะ" image="https://cdn1.sugotoys.com.au/images/20220327174450/GoodSmileCompanyNendoroidKomiCantCommunicateShokoKomiFigure-1.jpg"/>
         <cardProducts titleProducts="คุณโคมิย่อส่วน 5" contentProducts="ไม่แพงนะแกร ไม่แพงนะแกร" image="https://cu.lnwfile.com/_/cu/_raw/m4/mk/di.jpg"/>
         <cardProducts titleProducts="คุณโคมิย่อส่วน 6" contentProducts="ไม่แพงนะแกร ซื้อเหอะ" image="https://cdn.store-assets.com/s/886260/i/40839227.png"/>
         <cardProducts titleProducts="คุณโคมิย่อส่วน 7" contentProducts="ซื้อเหอะ ซื้อเหอะ" image="https://cu.lnwfile.com/_/cu/_raw/m4/mk/di.jpg"/>
         <cardProducts titleProducts="คุณโคมิย่อส่วน 8" contentProducts="ไม่แพงนะแกร ซื้อเหอะ" image="https://cdn1.sugotoys.com.au/images/20220327174450/GoodSmileCompanyNendoroidKomiCantCommunicateShokoKomiFigure-1.jpg"/>
        

     
         </b-row>
        </b-container>
        
       

       </b-container > 
</template>


<script>

import promotionSlide from '@/components/homePage/promotionSlide'
import productsTypes from '@/components/homePage/productsType'
import cardProducts from '@/components/card/cardProducts'
export default {
  layout:  "barCustomers",
     components:{
        promotionSlide,
        productsTypes,
        cardProducts,

      }
}      
</script>




 
        
