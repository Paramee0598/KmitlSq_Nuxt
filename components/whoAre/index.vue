<template>
    
</template>

<script>
export default {
    props: {
     isTraders: {
      type: String,
      required: false,
    },  

  },
    computed:{
        postLink(){
            return this.isTraders ? '/users/Traders/tradersPage' : '/layouts/error'
        }
    }
}
</script>