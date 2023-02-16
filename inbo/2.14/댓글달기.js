let commentInput = document.getElementsByClassName("main_comment_text")[0];
let submitBtn = document.getElementsByClassName("main_comment_submit")[0];
//1. 선언 : 텍스트를 입력하는 class요소를 가져오겠다.
//2. 선언 : 게시 버튼을 누르는 class요소를 가져오겠다.

function submit() {
  const box = document.getElementsByClassName(
    "main-icon-like-text-write_comment"
  )[0]; //댓글이 달릴 공간의 class명을 가져온다

  const comments = document.createElement("div"); //변수 comments 선언 : 댓글구조의 부모요소가 되어줄 디브를 가져옴
  const userName = document.createElement("span"); //변수 userName 선언 : 댓글구조에서 유저명이 되어줄 span 태그를 가져옴
  const mainText = document.createElement("p"); //댓글창 되어줄 p태그
  const mainIcon = document.createElement("img"); //작은하트 이미지 img태그

  comments.classList.add("main-icon-like-text-write_commentbox");
  comments.classList.add("userName");
  comments.classList.add("main-icon-like-text-write-subtext");
  comments.classList.add("lovelove");

  mainIcon.setAttribute("src", "실습과제 이미지/하트.PNG");
  userName.innerHTML = "David";
  mainText.innerText = commentInput.value;

  comments.appendChild(userName);
  comments.appendChild(mainText);
  comments.appendChild(mainIcon);

  box.appendChild(comments);
}

//3-1. 이벤트 실행 조건 만들기 : 버튼태그(send)에 클릭 이벤트가 발생하면,
//submit이라는 함수가 호출되고,
//그 이후 텍스트창의 값은 공백이 되면서 초기화 시킨다는 의미를 만듬

submitBtn.addEventListener("click", (event) => {
  submit();
  commentInput.value = "";
});

//3-2. 이벤트 실행조건 : 텍스트 태그(comment)에 키다운 이벤트 발생되도록.
//이벤트 코드가 엔터이면 submit 함수 호출되고 텍스트창 값 공백되면서 초기화.
commentInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    submit();
    commentInput.value = "";
  }
});
