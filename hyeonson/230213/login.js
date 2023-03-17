let buttonSubmit = document.querySelector(".loginbttn");
let inputId = document.querySelector(".user_id");
let inputPw = document.querySelector(".user_pw");

inputId.addEventListener("keyup", loginConfirm);
inputPw.addEventListener("keyup", loginConfirm);

function loginConfirm() {
  if (!(inputId.value && inputPw.value)) {
    buttonSubmit.disabled = true; // false비활성화
    buttonSubmit.style.backgroundColor = "gray";
  } else {
    buttonSubmit.disabled = false; // true면 활성화
    buttonSubmit.style.cursor = "pointer";
    buttonSubmit.style.backgroundColor = "#0095f6";
  }
}

// 이벤트 함수로 색깔 바꾸기

/* function loginConfirm() {
  switch (!(inputId.value && inputPw.value)) {
    case true:
      buttonSubmit.disabled = true;
      buttonSubmit.style.backgroundColor = "#0095f6";

      break;
    case false:
      buttonSubmit.disabled = false;
      buttonSubmit.style.cursor = "pointer";
      buttonSubmit.style.backgroundColor = "black";
      break;
  }
} */

let loginBtn = document.querySelector(".loginbttn"); //로그인버튼 요소를 가져올거다

loginBtn.addEventListener("click", function () {
  let inputId2 = document.querySelector(".user_id").value;
  let inputPw2 = document.querySelector(".user_pw").value;
  if (inputId2.includes("@") && inputPw2.length > 4) {
    /*     document.querySelector(".loginbttn").style.color = "white"; */
    let link = "index.html";
    location.href = link;
  } else {
    alert("아이디와 비밀번호를 다시 확인 후 입력해 주세요.");
    return;
  } //경고창 뜨고 페이지 넘어가지 않게
});
