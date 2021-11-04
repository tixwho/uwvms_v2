<template>
  <div id='cent'>
    <calender></calender>
  </div>
</template>

<script>
import Calender from '../components/Calender.vue'
export default {
    name: 'Homepage',
    components: {
        Calender

    },
    setup() {
        
    },
}
</script>

<style scoped>
#cent {
  /**Flex display */
  height:400px;
  border-style:none;    
  display:flex;
  justify-content:center;     
}
</style>
