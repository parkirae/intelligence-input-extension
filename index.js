$(function () {
  // input에 4자리 이상 입력했다면 다음 input으로 이동
  $("input").on("input", function () {
    let inputLength = $(this).val().length;
    let maxLength = 4;

    if (inputLength === maxLength) {
      $(this).next("input").focus();
    }
  });

  // input에 focus가 되면
  $("input").focus(function () {
    // this로 값을 가져와서
    let focusedInput = $(this);
    // +1을 해서 inputIndex에 저장
    inputIndex = $("input").index(focusedInput) + 1;
  });

  $("input").keydown(function (e) {
    if (e.ctrlKey) return;

    if (e.target.value.length >= 4) {
      $(this).next("input").val("");
      $(this).next("input").focus();
    }
  });

  // 붙여넣기 막기
  $("input").on("paste", function (e) {
    e.preventDefault();
  });
});

function enterValidater(event) {
  if (event.keyCode === 13) {
    alert("엔터 키를 눌렀습니다!");
  }
}

// 숫자와 영문자만 입력할 수 있게 prevent하는 함수
function inputValidater(input) {
  // 정규표현식
  let regex = /^[a-zA-Z0-9]*$/;
  // 사용자 입력값
  let inputValue = input.value;

  // 사용자 입력값이 정규표현식을 통과하지 못한다면
  if (!regex.test(inputValue)) {
    // 허용되지 않는 문자 제거
    input.value = inputValue.replace(/[^a-zA-Z0-9]/g, "");
  }
}

// 붙여넣기 유효성 검사
function pasteValidater(event) {
  // 사용자가 붙여넣기한 값 가져오기
  let clipboardData = event.clipboardData || window.clipboardData;
  let pasteValue = clipboardData.getData("text");

  // 사용자가 -, ., \s, \t 입력했다면 그 값 지우기
  let inputCharacter = pasteValue
    .replace(/[-.\s\t]/g, "")
    .replace(/[^A-Za-z0-9]/g, "");

  // 16자리 이후 문자열 제거
  if (inputCharacter.length > 16) {
    inputCharacter = inputCharacter.substring(0, 16);
  }

  // inputCharacter === 사용자 입력값 string
  // inputIndex == 사용자가 선택한 inputbox 값(1~4) number

  // 여기서 더 고칠게 어딨어.
  // 이건 고치지말자.
  // 사용자가 선택한 게 1번 박스라면
  if (inputIndex == "1") {
    // 사용자 입력값이 16개라면
    if (inputCharacter.length >= 16) {
      alert("1번 박스 16 이상");
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
      $("input:last").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length < 16 && inputCharacter.length > 12) {
      alert("1번박스 12 ~ 15");
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
      $("input:last").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length <= 12 && inputCharacter.length > 8) {
      alert("1번박스 8 ~ 11");
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
    } else if (inputCharacter.length <= 8 && inputCharacter.length > 4) {
      alert("1번박스 5 ~ 7");
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 4) {
      alert("1번박스 4이하");
      $("input:first").val(inputCharacter.substr(0, 4));
    }
  }

  if (inputIndex == "2") {
    // 사용자 입력값이 16개라면
    if (inputCharacter.length >= 16) {
      alert("2번 박스 16 이상");
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
      $("input:last").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length < 16 && inputCharacter.length > 12) {
      alert("2번 박스 12 ~ 15");
      $("input:eq(1)").val(inputCharacter.substr(0, 4));
      $("input:eq(2)").val(inputCharacter.substr(4, 4));
      $("input:last").val(inputCharacter.substr(8, 4));
    } else if (inputCharacter.length <= 12 && inputCharacter.length > 8) {
      alert("2번 박스 9 ~ 12");
      $("input:eq(1)").val(inputCharacter.substr(0, 4));
      $("input:eq(2)").val(inputCharacter.substr(4, 4));
      $("input:last").val(inputCharacter.substr(8, 4));
    } else if (inputCharacter.length <= 8 && inputCharacter.length > 4) {
      alert("2번 박스 5 ~ 7");
      $("input:eq(1)").val(inputCharacter.substr(0, 4));
      $("input:eq(2)").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 4) {
      alert("2번 박스 4 이하");
      $("input:eq(1)").val(inputCharacter.substr(0, 4));
    }
  }

  if (inputIndex == "3") {
    // 사용자 입력값이 16개라면
    if (inputCharacter.length >= 16) {
      alert("3번 박스 16 이상");
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
      $("input:last").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length < 16 && inputCharacter.length > 12) {
      alert("3번 박스 12 ~ 15");
      $("input:eq(2)").val(inputCharacter.substr(0, 4));
      $("input:last").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 12 && inputCharacter.length > 8) {
      alert("3번 박스 9 ~ 12");
      $("input:eq(2)").val(inputCharacter.substr(0, 4));
      $("input:last").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 8 && inputCharacter.length > 4) {
      alert("3번 박스 5 ~ 7");
      $("input:eq(2)").val(inputCharacter.substr(0, 4));
      $("input:last").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 4) {
      alert("3번 박스 4 이하");
      $("input:eq(2)").val(inputCharacter.substr(0, 4));
    }
  }

  if (inputIndex == "4") {
    $("input:last").val(inputCharacter.substr(0, 4));
  }
}

$("input:last").focus();
