<template>
  <div>
    <button
      class="wtrvl-checkout_button btn font-2 fs-3  bg-dark fw-bold"
      id="wetravel_button_widget"
      data-env="https://www.wetravel.com"
      data-version="v0.3"
      data-uid="564570"
      data-uuid="61962464"
      href="https://www.wetravel.com/checkout_embed?uuid=61962464"
      style="

        color: #ffffff;



        text-transform: capitalize;


        cursor: pointer;
      "
    >
      Book Now
    </button>
    <link
      href="https://fonts.googleapis.com/css?family=Poppins"
      rel="stylesheet"
    />
  </div>
</template>
<script>
export default {
  mounted() {
    (function(d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://cdn.wetravel.com/widgets/embed_checkout.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "WetTravelScript");
  }
};
</script>

<style lang="scss" scoped></style>
