<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <input type="text" placeholder="Software Engineer" class="w-full text-lg font-normal focus:outline-none"/>
      </div>
      <span></span>
      <div></div>
    </div>
  </form>
</template>

<script>
export default {
  name: "JobSearchForm",
};
</script>

<style></style>
