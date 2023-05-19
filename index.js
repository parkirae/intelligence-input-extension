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
    // ctrl 누르면 함수 실행 중단 및 종료
    if (e.ctrlKey) return;
    if (e.altKey) return;
    if (e.altKey && e.key === "Tab") return;

    console.log(e.target.value.length);
    // 입력된 값의 길이가 4이상인 경우에 실행
    if (e.target.value.length >= 4) {
      // 다음 포커스 값 초기화
      $(this).next("input").val("");
      // 포커스 다음으로 이동
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

  // 사용자가 선택한 게 1번 박스라면
  if (inputIndex == "1") {
    if (inputCharacter.length >= 16) {
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
      $("input:last").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length < 16 && inputCharacter.length > 12) {
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
      $("input:last").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length <= 12 && inputCharacter.length > 8) {
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
    } else if (inputCharacter.length <= 8 && inputCharacter.length > 4) {
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 4) {
      $("input:first").val(inputCharacter.substr(0, 4));
    }
  }

  if (inputIndex == "2") {
    if (inputCharacter.length >= 16) {
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
      $("input:last").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length < 16 && inputCharacter.length > 12) {
      $("input:eq(1)").val(inputCharacter.substr(0, 4));
      $("input:eq(2)").val(inputCharacter.substr(4, 4));
      $("input:last").val(inputCharacter.substr(8, 4));
    } else if (inputCharacter.length <= 12 && inputCharacter.length > 8) {
      $("input:eq(1)").val(inputCharacter.substr(0, 4));
      $("input:eq(2)").val(inputCharacter.substr(4, 4));
      $("input:last").val(inputCharacter.substr(8, 4));
    } else if (inputCharacter.length <= 8 && inputCharacter.length > 4) {
      $("input:eq(1)").val(inputCharacter.substr(0, 4));
      $("input:eq(2)").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 4) {
      $("input:eq(1)").val(inputCharacter.substr(0, 4));
    }
  }

  if (inputIndex == "3") {
    if (inputCharacter.length >= 16) {
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
      $("input:last").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length < 16 && inputCharacter.length > 12) {
      $("input:eq(2)").val(inputCharacter.substr(0, 4));
      $("input:last").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 12 && inputCharacter.length > 8) {
      $("input:eq(2)").val(inputCharacter.substr(0, 4));
      $("input:last").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 8 && inputCharacter.length > 4) {
      $("input:eq(2)").val(inputCharacter.substr(0, 4));
      $("input:last").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 4) {
      $("input:eq(2)").val(inputCharacter.substr(0, 4));
    }
  }

  if (inputIndex == "4") {
    if (inputCharacter.length >= 16) {
      $("input:first").val(inputCharacter.substr(0, 4));
      $("input:eq(1)").val(inputCharacter.substr(4, 4));
      $("input:eq(2)").val(inputCharacter.substr(8, 4));
      $("input:last").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length < 16) {
      $("input:last").val(inputCharacter.substr(0, 4));
    }
  }
}

$("input:last").focus();
