import $ from "jquery";

function moveSlowToId(idItem) {
  $("html,body").animate(
    {
      scrollTop: $(idItem).offset().top,
    },
    "slow"
  );
}
function moveFastToId(idItem) {
  $("html,body").animate(
    {
      scrollTop: $(idItem).offset().top,
    },
    "fast"
  );
}

export default {
  moveSlowToId,
  moveFastToId
}