<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter text-8xl mb-14" data-test="action-phrase">
      <span :class="actionsClasses">{{action}}</span>
      <br/>
      for everyone</h1>
    <h2 class="text-3xl font-light">Find your next job at sira ferlagi!</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList'

  export default {
    name: "Headline",
    data () {
      return {
        action: "Build",
        interval: null,
      }
    },
    created() {
      this.changeTitle()
    },
    beforeUnmount () {
      clearInterval(this.interval)
    },
    computed: {
      actionsClasses(){
        return {
          [this.action.toLowerCase()]: true,
        }
      }
    },
    methods: {
      changeTitle() {
        this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
        }, 3000)
      }
    }
  }
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color:#f9ab00
}
.code {
  color: #d93025;
}
</style>