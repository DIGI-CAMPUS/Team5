// 라이트 박스 만들기

/* let pics = document.getElementsByClassName("pic");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightboxImage");

for (i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}
 */

//하트(좋아요) 누르면 이미지 바뀌고 & 하트 갯수 증가했다가,
//동일사용자(you)가 또 좋아요 누르면 모두 해제처리

/* document.write("좋아요" + count + "개"); */

function changePic(id) {
  let heart = document.querySelector("#" + id);
  const heartState = heart.getAttribute("data-state");
  let like = document.querySelector("#heart");
  let count = 99;

  switch (heartState) {
    case "click":
      heart.src = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
      heart.setAttribute("data-state", "unClick");
      if (
        heart.src == "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
      ) {
        document.querySelector(".good").innerHTML = "좋아요 " + count + "개";
      }
      break;

    case "unClick":
      heart.src = "https://cdn-icons-png.flaticon.com/512/1076/1076984.png";
      heart.setAttribute("data-state", "click");
      if (
        heart.src == "https://cdn-icons-png.flaticon.com/512/1076/1076984.png"
      ) {
        count += 1;
        document.querySelector(".good").innerHTML = "좋아요 " + count + "개";
      }
      break;
  }
}

/* let like = document.querySelector("#heart");
let count = 99;

heart.onclick = likeNumber;

function likeNumber() {
  if ((heart.src = "https://cdn-icons-png.flaticon.com/512/1076/1076984.png")) {
    count += 1;
    document.querySelector(".good2").innerHTML = "좋아요 " + count + "개";
  } else if (
    (heart.src = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png")
  ) {
    count -= 1;
    document.querySelector(".good2").innerHTML = "좋아요 " + count + "개";
  }
} */

/* heart = document.querySelector("#heart");
let count = 99;

heart.onclick = changeheart;

function changeheart() {
  if ((heart.src = "https://cdn-icons-png.flaticon.com/512/1076/1076984.png")) {
    count += 1;
    document.querySelector(".good").innerHTML = "좋아요 " + count + "개";
  } else {
    count -= 1;
    document.querySelector(".good").innerHTML = "좋아요 " + count + "개";
  }
}
 */

//변수 생성
const postReviewBtn = document.querySelector(".review_upload");
const addReview = document.querySelector(".input_review");
const newReview = document.querySelector(".reply2");
const commenter = [
  "<strong>sungyoungLee</strong>",
  "<strong>spring10_04</strong>",
  "<strong>iiingbo</strong>",
]; //db연결대신 배열로 선언

function uploadReview() {
  if (addReview.value.length > 0) {
    const newComment = document.createElement("li");
    const deleteBtn = document.createElement("removeComment");
    const likeBtn = document.createElement("likeHeart");
    const commentervalue = Math.floor(Math.random() * commenter.length); //배열 길이만큼 무작위로 값을 생성
    const commenterPick = commenter[commentervalue]; //무작위로 생성된 값을 고르도록
    newComment.innerHTML = commenterPick + " " + addReview.value;
    newReview.appendChild(newComment);
    addReview.value = "";
    addReview.focus();
  } else {
    alert("댓글을 입력하세요.");
  }
  postReviewBtn.style.color = "rgb(199, 235, 245)"; //댓글추가후 게시버튼 누르면 버튼색상 다시 초기화
}

function inputReview() {
  if (addReview.value.length > 0) {
    postReviewBtn.style.color = "rgb(11, 159, 228)";
  } else {
    postReviewBtn.style.color = "rgb(199, 235, 245)";
  }
}

//변수 생성

/*     newReview.style.fontSize = "small"; */
/*     likeBtn.innerHTML = '<i class="xi-heart-o"></i>';
    newComment.appendChild(likeBtn);
    likeBtn.style.cursor = "pointer";
    likeBtn.style.float = "right";
    likeBtn.style.marginLeft = "-0.9rem";
    likeBtn.style.marginRight = "0.8rem";
    likeBtn.addEventListener("click", pushHeart);
    deleteBtn.innerHTML = '<i class="xi-trash-o"></i>';
    newComment.appendChild(deleteBtn);
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.float = "right";
    deleteBtn.addEventListener("click", removeComm); */

//댓글 좋아요
/*     function pushHeart() {
      if (likeBtn !== 0) {
        likeBtn.innerHTML = '<i class="xi-heart"></i>';
        likeBtn.style.color = "red";
      } else {
        likeBtn.innerHTML = "";
      }
    }
    //댓글 삭제
    function removeComm() {
      newComment.remove();
    }
  } else {
    alert("댓글을 입력해 주세요");
  }
  postReviewBtn.style.color = "rgb(199, 235, 245)"; //댓글추가후 게시버튼 누르면 버튼색상 다시 초기화
} */

//라이트 박스 만들기

let pics = document.getElementsByClassName("sideProfile");
let lightbox = document.getElementById("lightbox");
let lightboxImgae = document.getElementById("lightboxImage");
let body = document.getElementsByTagName("body")[0];

for (i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}

function showLightbox() {
  let bigLocation = this.getAttribute("data-src");
  lightboxImgae.setAttribute("src", bigLocation);
  lightbox.style.display = "block";
  body.classList.add("scrollLock");
}

lightbox.onclick = function () {
  lightbox.style.display = "none";
  body.classList.remove("scrollLock");
};

function sTo() {
  window.scrollTo({top: 0, behavior: "smooth"});
}
