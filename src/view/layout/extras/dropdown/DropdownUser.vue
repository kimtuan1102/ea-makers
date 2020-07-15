<template>
  <div>
    <div class="d-flex align-items-center p-8 rounded-top">
      <!--begin::Symbol-->
      <div class="symbol symbol-md bg-light-primary mr-3 flex-shrink-0">
        <img src="/media/users/300_21.jpg" alt="" />
      </div>
      <!--end::Symbol-->

      <!--begin::Text-->
      <div class="text-dark m-0 flex-grow-1 mr-3 font-size-h5">Sean Stone</div>
      <!--end::Text-->
    </div>
    <div class="separator separator-solid"></div>
    <!--end::Header-->

    <!--begin::Nav-->
    <div class="navi navi-spacer-x-0 pt-5">
      <div class="navi-footer  px-8 py-5">
        <v-spacer></v-spacer>
        <a v-on:click="onLogout" class="btn btn-light-primary font-weight-bold"
          >Sign Out</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { LOGOUT } from "@/core/services/store/auth.module";
export default {
  name: "KTDropdownUser",
  methods: {
    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    }
  }
};
</script>

<style scoped></style>
