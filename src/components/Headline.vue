<template>
  <section>
    <h1>Build For Everyone</h1>
    <h2>Find your next job at sira ferlagi!</h2>
  </section>
</template>

<script>
  export default {
    name: "Headline",
    data () {
      return {
        sample: "Hello",
      }
    },
    created() {
      console.log("Hey, I've been created. My data exists!", this.sample)
    }
  }
</script>