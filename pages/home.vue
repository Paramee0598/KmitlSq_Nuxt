<template>
 <div class="container links">
   <div>
        <b-container fluid> 
         <promotionSlide/>
        </b-container>
       
     <h1>hey this is home </h1>
     <nuxt-link to="/users" class="btn btn-success">User</nuxt-link>
   </div>

 </div>
</template>


<script>
import promotionSlide from '@/components/homePage/promotionSlide'
export default {
  layout:  "barCustomers",
     components:{
        promotionSlide

      }
}      
</script>




 
        
