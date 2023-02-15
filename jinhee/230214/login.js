let slideIndex = 0;
showSlides();

function showSlides() {
  var i;

  let slides = document.getElementsByClassName("slide_item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000);
}

// .length는 문자열의 길이를 반환하는 속성입니다.
