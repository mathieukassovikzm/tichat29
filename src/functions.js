import $ from "jquery";

function moveSlowToId(idItem) {
  $("html,body").animate(
    {
      scrollTop: $(idItem).offset().top - $("#menu-fixed").height(),
    },
    "slow"
  );
}
function moveFastToId(idItem) {
  $("html,body").animate(
    {
      scrollTop: $(idItem).offset().top - $("#menu-fixed").height(),
    },
    "fast"
  );
}

export default {
  moveSlowToId,
  moveFastToId
}