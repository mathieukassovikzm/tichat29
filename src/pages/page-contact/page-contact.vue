<template src="./page-contact.html"></template>

<script>
import TitleH1 from "./../../components/title/title.vue";
import SvgPhone from "@/components/svg/svg-phone";
import SvgEmail from "@/components/svg/svg-email";
import SvgAddress from "@/components/svg/svg-address";
import SvgFacebook from "@/components/svg/svg-facebook";
import SvgInstagram from "@/components/svg/svg-instagram";
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TitleH1,
    SvgPhone,
    SvgEmail,
    SvgAddress,
    SvgFacebook,
    SvgInstagram,
  },
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
      },
      classFormError: "form-error",
      classInputValid: "valid",
      errors: false,
      formTouched: false,
    };
  },
  /* List of requierement for each input */
  validations: {
    form: {
      firstname: { required },
      lastname: { required },
      phone: { required },
      email: { required },
      message: { required },
    },
  },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageContact: "getBodyClassPageContactInStore",
    }),
    formLastValid() {
      return !this.$v.form.lastname.$invalid ? this.classInputValid : "";
    },
    formFirstnameValid() {
      return !this.$v.form.firstname.$invalid ? this.classInputValid : "";
    },
    formPhoneValid() {
      return !this.$v.form.phone.$invalid ? this.classInputValid : "";
    },
    formEmailValid() {
      return !this.$v.form.email.$invalid ? this.classInputValid : "";
    },
    formMessageValid() {
      return !this.$v.form.message.$invalid ? this.classInputValid : "";
    },
    // v-show nameError if the form has been touch and if there is and error
    formLastNameError() {
      return this.formTouched && this.$v.form.lastname.$error
        ? this.classFormError
        : "";
    },
    // v-show nameError if the form has been touch and if there is and error
    formFirstnameError() {
      return this.formTouched && this.$v.form.firstname.$error
        ? this.classFormError
        : "";
    },
    // v-show nameError if the form has been touch and if there is and error
    formPhoneError() {
      return this.formTouched && this.$v.form.phone.$error
        ? this.classFormError
        : "";
    },
    // v-show nameError if the form has been touch and if there is and error
    formEmailError() {
      return this.formTouched && this.$v.form.email.$error
        ? this.classFormError
        : "";
    },
    // v-show nameError if the form has been touch and if there is and error
    formMessageError() {
      return this.formTouched && this.$v.form.message.$error
        ? this.classFormError
        : "";
    },
  },
  methods: {
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    /* Handle the user's submit
     * @emit the event 'addRequestToChat' for his parent
     */
    onSubmit() {
      this.formTouched = this.$v.form.$anyDirty;
      this.errors = this.$v.form.$anyError;
      if (this.errors == false && this.formTouched == true) {
        let request = {
          name: this.form.name,
          query: this.form.query,
          date: new Date(),
        };
        this.$emit("addRequestToChat", request);
        this.cleanForm();
      } else return;
    },

    /* Clean the form */
    cleanForm() {
      this.name = "";
      this.query = "";
    },

    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageContact);
    },
  },
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss" src="./page-contact.scss"></style>