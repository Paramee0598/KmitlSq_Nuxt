<template>
   <b-container class="">
  <b-row class="py-3" align="center">

  <b-col type="" class="">
  <nuxt-link to="/users" class="btn btn-primary rounded-circle"> 
  <img class="products-Types" alt="cosmetics" src="@/images/productsTypes/cosmetics.png"
  ></nuxt-link>
  </b-col>
   
   <b-col type="" class="">
  <nuxt-link to="/users" class="btn btn-primary rounded-circle"> 
  <img class="products-Types" alt="harvest" src="@/images/productsTypes/harvest.png"
  ></nuxt-link>
  </b-col>

  <b-col type="" class="">
  <nuxt-link to="/users" class="btn btn-primary rounded-circle"> 
  <img class="products-Types" alt="cosmetics" src="@/images/productsTypes/cosmetics.png"
  ></nuxt-link>
  </b-col>

  <b-col type="" class="">
  <nuxt-link to="/users" class="btn btn-primary rounded-circle"> 
  <img class="products-Types" alt="harvest" src="@/images/productsTypes/harvest.png"
  ></nuxt-link>
  </b-col>

  <b-col type="" class="">
  <nuxt-link to="/users" class="btn btn-primary rounded-circle"> 
  <img class="products-Types" alt="cosmetics" src="@/images/productsTypes/cosmetics.png"
  ></nuxt-link>
  </b-col>

  <b-col type="" class="">
  <nuxt-link to="/users" class="btn btn-primary rounded-circle"> 
  <img class="products-Types" alt="harvest" src="@/images/productsTypes/harvest.png"
  ></nuxt-link>
  </b-col>

  <b-col type="" class="">
  <nuxt-link to="/users" class="btn  btn btn-primary  rounded-circle" > 
  <img class="products-Types" alt="cosmetics" src="@/images/productsTypes/cosmetics.png"
  ></nuxt-link>
  </b-col>
  </b-row>
</b-container>
</template>

<style scoped>
    .products-Types{
  height: 45px;
  width: 45px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out backwards 1s;
}
 /*.btn-warning {
    background-color: #F49A6A !important;
}*/
.btn-primary {
    color: #fff;
    background-color: #F49A6A;
    border-color: #000000; /*set the color you want here*/
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {
    color: #fff;
    background-color:  rgb(243, 95, 16);
    border-color: #000000; /*set the color you want here*/
}

</style>