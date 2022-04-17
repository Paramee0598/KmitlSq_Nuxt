

<template>
    <b-container>
        <h2>HEY ฉันคือลูกของ User</h2>
        <headerSeller/>
        <VuetifyLogo/>
        <NuxtLogo/>
    </b-container>
    
</template>

<script>
import headerSeller from '@/components/infoUsers/headerSeller'
export default {
    layout: "default",
    components:{
        headerSeller
        

    } 
  
    
}
</script>