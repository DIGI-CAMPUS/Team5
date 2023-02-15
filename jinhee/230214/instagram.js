//이미지 슬라이드

let num = 1;
function changeGallery(pic) {
  if (pic) {
    if (num == 4) return; //num이 4일 때 num++이전에 강제종료
    num++;
  } else {
    if (num == 1) return;
    num--;
  }
  let imgTag = document.getElementById("mainimg");
  imgTag.setAttribute("src", "image/nudge" + num + ".jpg");
}

function changeGallery2(pic) {
  if (pic) {
    if (num == 4) return; //num이 4일 때 num++이전에 강제종료
    num++;
  } else {
    if (num == 1) return;
    num--;
  }
  let imgTag = document.getElementById("moderimg");
  imgTag.setAttribute("src", "image/nudge" + num + "M.jpg");
}
//-------------------------모달--------------------

let modal = document.querySelector(".modal");
let mainimg = document.querySelector("#mainimg");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

mainimg.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

//더보기 눌렀렀다 없앴다 ~~~ 접었다 폈다!!!------------------------

document.getElementById("more").style.display = "none";

function doDisplay() {
  var commentmore = document.getElementById("more");
  if (commentmore.style.display == "none") {
    commentmore.style.display = "block";
  } else {
    commentmore.style.display = "none";
  }
}

document.getElementById("more_2").style.display = "none";

function doDisplay2() {
  var commentmore = document.getElementById("more_2");
  if (commentmore.style.display == "none") {
    commentmore.style.display = "block";
  } else {
    commentmore.style.display = "none";
  }
}

document.getElementById("more_3").style.display = "none";

function doDisplay3() {
  var commentmore = document.getElementById("more_3");
  if (commentmore.style.display == "none") {
    commentmore.style.display = "block";
  } else {
    commentmore.style.display = "none";
  }
}
//------------더보기 눌렀을 때 글자 사라지게------------------
let toggleBtn = document.querySelector("#morebtn");
toggleBtn.onclick = btndisplay;

function btndisplay() {
  if (btndisplay !== "none") {
    morebtn.style.display = "none";
  }
}

// -----------------------코멘트 사진 변경
let heartState = "unClick";

let heart = document.querySelector("#heart");
heart.onclick = changePic;
function changePic() {
  switch (heartState) {
    case "click":
      heart.src = "image/heart2.png";
      heartState = "unClick";
      break;
    case "unClick":
      heart.src = "image/redheart.png";
      heartState = "click";
      break;
  }

  // if (heartclick) {
  //   heart.src = "image/heart2.png"; /* 카운트가 1일 때 원래색으로 */
  //   heartclick = false;
  // } else {
  //   heart.src = "image/redheart.png"; /* 카운트가 0일 때 빨간색으로 */
  //   heartclick = true;
  // }
}

let bookmarkclick = 0;

let bookmark = document.querySelector("#bookmark");
bookmark.onclick = changePic2;
function changePic2() {
  if (bookmarkclick == 0) {
    bookmark.src = "image/bookmark2.png";
    bookmarkclick++;
  } else {
    bookmark.src = "image/bookmark.png";
    bookmarkclick--;
  }
}

//댓글 게시 알림창---------------------------------------

function btn() {
  alert("댓글이 게시되었습니다");
}

//더보기 눌렀렀다 없앴다 ~~~ 접었다 폈다!!!

document.getElementById("final").style.display = "none";
function GalleryUpload() {
  var gallery = document.getElementById("final");
  if (gallery.style.display == "none") {
    gallery.style.display = "block";
  } else {
    gallery.style.display = "none";
  }
}
//------------더보기 눌렀을 때 사라지게

let galleryBtn = document.querySelector("#GalleryMore");
galleryBtn.onclick = gallerydisplay;

function gallerydisplay() {
  if (gallerydisplay !== "none") {
    GalleryMore.style.display = "none";
  }
}

function sTo() {
  window.scrollTo({ top: 0, behavior: "smooth" }); //x좌표 y좌표(left 100 top 200)
}

//-----------------이름 클릭시 내 인스타 ------------

function popup() {
  window.open(
    "https://www.instagram.com/spring10_14/",
    "팝업",
    "width=800, height=500,left=400, top=150"
  );
}
