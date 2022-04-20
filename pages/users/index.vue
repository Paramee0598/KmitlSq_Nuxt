

<template>
  <b-container fluid>
    <h2>HEY ฉันคือลูกของ User</h2>
    <headerSeller />
    <VuetifyLogo />
    <NuxtLogo />
    <nuxt-link :to="userLink" >ชื่อไรนะ </nuxt-link >
  </b-container>
</template>

<script>
import headerTraders from "@/components/infoUsers/headerTraders";
export default {
  layout: "default",
  components: {
    headerTraders,
  },
  props: {
    idUser: {
      type: String,
      required: false,
    },
  },
  computed: {
    userLink() {
      return this.isUser
        ? "/users/Traders/tradersPage"
        : "/users/" + this.idUser;
    },
  },
};
</script>