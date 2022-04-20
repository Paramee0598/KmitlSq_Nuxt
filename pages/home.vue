<template>
  <b-container fluid="sm" class="py-3">
    <promotionSlide />

    <b-container fluid>
      <productsTypes />
      


      <b-row >
        <cardProducts :posts="loadData" />
      </b-row>

    </b-container>
  </b-container>
</template>


<script>
import promotionSlide from "@/components/homePage/promotionSlide";
import productsTypes from "@/components/homePage/productsType";
import cardProducts from "@/components/card/cardProducts";
export default {
  layout: "barCustomers",
  components: {
    promotionSlide,
    productsTypes,
    cardProducts,
  },
  data() {
    return {
      loadData: [
        {
          titleProducts: "คุณโคมิย่อส่วน 1",
          contentProducts: "ไม่แพงนะแกร ซื้อเหอะ",
          image:
            "https://cdn1.sugotoys.com.au/images/20220327174450/GoodSmileCompanyNendoroidKomiCantCommunicateShokoKomiFigure-1.jpg",
        },
        {
          titleProducts: "คุณโคมิย่อส่วน 2",
          contentProducts: "ซื้อเหอะ ซื้อเหอะ",
          image: "https://cu.lnwfile.com/_/cu/_raw/m4/mk/di.jpg",
        },
        {
          titleProducts: "คุณโคมิย่อส่วน 3",
          contentProducts: "ไม่แพงนะแกร ซื้อเหอะ",
          image: "https://cdn.store-assets.com/s/886260/i/40839227.png",
        },
      ],
    };
  },
};
</script>




 
        
