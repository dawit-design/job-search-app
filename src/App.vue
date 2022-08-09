<template>
 <div>
   <MainNav />
  <router-view/>
 </div>
</template>

<script>
import MainNav from './components/Navigation/MainNav.vue'
 export default {
    name: "App",
    MainNav,
    components: { MainNav }
}
</script>

