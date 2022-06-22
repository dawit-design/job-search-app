import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";
import { data } from "autoprefixer";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Sira Felagi");
  });
  it("displays menu item for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll("[data-test='main-nav-list-item']");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Sira Felagi",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("when the user logged out", () =>{
    it("prompts user to sign in", () =>{
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn:false,
          }
        }
      })
      const loginButton = wrapper.find("[data-test='login-button']")
      const ProfileImage = wrapper.find("[data-test='profile-image']")
      expect(loginButton.exists()).toBe(true)
      expect(ProfileImage.exists()).toBe(false)
    })
  })
  describe("when the user logs in", () => {
    it("displays user profile picture", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn:true,
          }
        }
      })
      const loginButton = wrapper.find("[data-test='login-button']")
      const ProfileImage = wrapper.find("[data-test='profile-image']")
      expect(loginButton.exists()).toBe(false)
      expect(ProfileImage.exists()).toBe(true)
    })
  })
});
