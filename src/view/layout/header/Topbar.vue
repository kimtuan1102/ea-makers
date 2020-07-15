<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <!--begin: Language bar -->
    <div class="topbar-item">
      <b-dropdown
        size="sm"
        variant="link"
        toggle-class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 text-decoration-none"
        no-caret
        right
        no-flip
      >
        <template v-slot:button-content>
          <img
            class="h-20px w-20px rounded-sm"
            :src="languageFlag || getLanguageFlag"
            alt=""
          />
        </template>
        <b-dropdown-text tag="div" style="width: 175px;">
          <KTDropdownLanguage
            v-on:language-changed="onLanguageChanged"
          ></KTDropdownLanguage>
        </b-dropdown-text>
      </b-dropdown>
    </div>
    <!--end: Language bar -->

    <!--begin: User Bar -->
    <div class="topbar-item">
      <b-dropdown
        size="lg"
        variant="link"
        toggle-class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 text-decoration-none"
        no-caret
        right
        no-flip
        style="width: calc(1.5em + 6.65rem + 2px)"
        menu-class="dropdown-menu-lg"
      >
        <template v-slot:button-content>
          <div
            class="btn btn-icon btn-clean d-flex align-items-center btn-lg px-2"
            id="kt_quick_user_toggle"

          >
            <span
              class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
            >
              Hi,
            </span>
            <span
              class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
            >
              Sean
            </span>
            <span class="symbol symbol-35 symbol-light-success">
              <img v-if="false" alt="Pic" :src="picture" />
              <span
                v-if="true"
                class="symbol-label font-size-h5 font-weight-bold"
              >
                S
              </span>
            </span>
          </div>
        </template>
        <b-dropdown-text>
          <KTDropdownUser></KTDropdownUser>
        </b-dropdown-text>
      </b-dropdown>
    </div>
    <!--end: User Bar -->
  </div>
  <!-- end:: Header Topbar -->
</template>

<style lang="scss">
.topbar {
  .dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
import KTDropdownLanguage from "@/view/layout/extras/dropdown/DropdownLanguage.vue";
import i18nService from "@/core/services/i18n.service.js";
import KTDropdownUser from "@/view/layout/extras/dropdown/DropdownUser";

export default {
  name: "KTTopbar",
  data() {
    return {
      languageFlag: "",
      languages: i18nService.languages
    };
  },
  components: {
    KTDropdownUser,
    KTDropdownLanguage,
  },
  methods: {
    onLanguageChanged() {
      this.languageFlag = this.languages.find(val => {
        return val.lang === i18nService.getActiveLanguage();
      }).flag;
    }
  },
  computed: {
    getLanguageFlag() {
      return this.onLanguageChanged();
    },
    picture() {
      return process.env.BASE_URL + "media/users/300_21.jpg";
    }
  }
};
</script>
