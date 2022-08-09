<template>
  <img
:src="ImageSrc" alt="" 
  class="w-10 h-10 object-contain rounded-3xl">
</template>

<script>
  export default {
    name: "ProfileImage",
    data() {
      return {
        ImageSrc: "https://www.nicepng.com/png/detail/177-1777982_ocarina-of-time-majoras-mask-legend-of-zelda.png",
      }
    }
  }
</script>