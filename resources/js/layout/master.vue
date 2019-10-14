
<template>
	<div>
    <headerSection/>
		<transition name="component-fade" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
    </transition>
   
    
	</div>


</template>


<script>
import headerSection from '../component/header.vue'
// import footerSection from '../components/footer.vue'

export default {
   components:{
      headerSection
     // footerSection,
        },
  created(){
   
  },

}
</script>







<style>

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.progress-linear {
    
    position: absolute;
    top: -15px;
   
}
</style>