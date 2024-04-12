function changePicOld() {
  const image1 = document.getElementById("image");
  image1.src = "assets/kitten.jpg";
  // console.log("Картинка меняется на Котенок");
}

function changePicNew() {
  const image2 = document.getElementById("image");
  image2.src = "assets/cat.jpg";
  // console.log("Картинка меняется на Кошку");
}

changePicNew();
changePicOld();
