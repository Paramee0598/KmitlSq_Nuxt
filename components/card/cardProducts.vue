<template>
  <b-col type="" class="" sm="3" align="center">
    <div>
      <b-card
        :title=titleProducts
        :img-src=image
        img-alt="Card Image"
        img-top
        img-size="500"
        tag="article"
        style="max-width: 20rem"
        class="mb-2 text-center position-relative"
      >
        <b-card-text> {{contentProducts}} </b-card-text>

        <b-button href="#" variant="outline-primary">ซื้อ</b-button>
      </b-card>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
     id: {
      type: String,
      required: false,
    }, 
    titleProducts: {
      type: String,
      required: true,
    }, 
    contentProducts:{
      type: String,
      required: true,
    },
    image:{ 
       type: String,
      required: true,
    }, 



  },
};
</script>





