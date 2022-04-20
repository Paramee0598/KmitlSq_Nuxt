<template>
  <b-col type="" class="" sm="3" align="center">
    <div>
 
      <b-card
        v-for="post in posts" 
        :key="post.posts"
        :title="post.titleProducts"
        :img-src="post.image"
   
      >
        <b-card-text> {{ post.contentProducts }} </b-card-text>
 

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
      required: false,
    },
    contentProducts: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    isTraders: {
      type: String,
      required: false,
    },
    posts: {
      type: Array,
      required: false,
    },
  },
};
</script>





