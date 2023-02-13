let num = 1;
function changeGallery(pic) {
  if (pic) {
    if (num == 4) return; //num이 4일 때 num++이전에 강제종료
    num++;
  } else {
    if (num == 1) return;
    num--;
  }
  let imgTag = document.getElementById("main-img");
  imgTag.setAttribute("src", "image/nudge" + num + ".jpg");
}

//더보기 눌렀렀다 없앴다 ~~~ 접었다 폈다!!!

document.getElementById("more").style.display = "none";
function doDisplay() {
  var con = document.getElementById("more");
  if (con.style.display == "none") {
    con.style.display = "block";
  } else {
    con.style.display = "none";
  }
}
//------------더보기 눌렀을 때 글자 사라지게
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
