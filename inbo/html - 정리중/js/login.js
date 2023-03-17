//로그인 실행
let loginBtn = document.querySelector(".loginBtn"); //로그인버튼 요소를 가져올거다
let checkedBox = document.querySelector("#checkedBox1"); //(아이디저장)id 요소를 가져온다
console.log(checkedBox.checked);

loginBtn.addEventListener("click", function () {
  let inputId = document.querySelector(".id").value;
  let inputPw = document.querySelector(".pw").value;
  if (inputId.includes("@") && inputPw.length > 5) {
    document.querySelector(".loginBtn").style.background = "blue";
    let link = "실습과제2.html"; //조대리님
    location.href = link; //조현손 대리님이 성공
  } else {
    alert("아이디와 암호를 다시 확인 후 입력해 주세요");
    //로그인 실패 시, 저장하기 체크했었다면 비밀번호만 입력 초기화해주기
    if (checkedBox.checked === true) {
      document.querySelector(".pw").value = "";
    } else {
      //체크안했었다면 아이디/암호 모두 입력 초기화
      document.querySelector(".id").value = "";
      document.querySelector(".pw").value = "";
    }
    /* document.querySelector(".loginBtn").style.background = "default"; */
    return;
  } //경고창 뜨고 페이지 넘어가지 않게
});
