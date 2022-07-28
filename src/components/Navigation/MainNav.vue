<template>
  <header v-bind:class="['w-full' , 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a v-bind:href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              class="h-full ml-9 first:ml-0"
              v-for="menuItem in menuItems"
              v-bind:key="menuItem"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign In"
            data-test="login-button"
            v-on:click="loginUser"
          />
        </div>
      </div>
    <subnav v-if:="isLoggedIn" data-test="subnav"/>
    
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      company: "Sira Felagi",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Sira Felagi",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  computed:{
    headerHeightClass(){
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      }
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
