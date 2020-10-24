import $ from "jquery";

function moveSlowToId(idItem) {
  $("html,body").animate(
    {
      scrollTop: $(idItem).offset().top,
    },
    "slow"
  );
}

export default {
  moveSlowToId
}