const yes = document.querySelector("button.yes");
const no = document.querySelector("button.no");
const svgContainerYes = document.querySelector("#svg-yes");
const svgContainerNo = document.querySelector("#svg-no");

const animItemYes = bodymovin.loadAnimation({
  wrapper: svgContainerYes,
  animType: "svg",
  loop: true,
  autoplay: false,
  path: "https://assets2.lottiefiles.com/packages/lf20_u4yrau.json",
});

yes.addEventListener("click", () => {
  svgContainerYes.classList.remove("hide");
  animItemYes.goToAndPlay(0, true);
  no.classList.add("disable");
});

animItemYes.addEventListener("complete", () => {
  svgContainerYes.classList.add("hide");
});

const animItemNo = bodymovin.loadAnimation({
  wrapper: svgContainerNo,
  animType: "svg",
  loop: true,
  autoplay: false,
  //   path: "https://assets1.lottiefiles.com/datafiles/tawau8o8xa7TTxx/data.json",
  path: "https://assets5.lottiefiles.com/packages/lf20_bkfdudbp.json",
});

no.addEventListener("click", () => {
  svgContainerNo.classList.remove("hide");
  animItemNo.goToAndPlay(0, true);
  yes.classList.add("disable");
});

animItemNo.addEventListener("complete", () => {
  svgContainerNo.classList.add("hide");
});

// Ajax
$(document).ready(function () {
  // Yes Response
  $(".yes").on("click", function () {
    let response = $(".response").val();
    response = "Yes";
    console.log(`${response}`);
    $.ajax({
      url: "db.php",
      type: "POST",
      data: { response: response },
      cache: false,
    });
  });

  // No Response
  $(".no").on("click", function () {
    let response = $(".response").val();
    response = "No";
    console.log(`${response}`);
    $.ajax({
      url: "db.php",
      type: "POST",
      data: { response: response },
      cache: false,
    });
  });
});
