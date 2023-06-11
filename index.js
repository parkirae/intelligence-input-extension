$(function () {

  // input에 4자리 이상 입력했다면 다음 input으로 이동
  $("input[id=input1], input[id=input2], input[id=input3], input[id=input4]").on("input", function () {
    let inputLength = $(this).val().length;
    let maxLength = 4;

    if (inputLength === maxLength) {
      $(this).next("input").focus();
    }
  });

  // 수정 금지
  // 붙여넣기 유효성 검사에 사용되는 input index값
  // input에 focus가 되면
  $("input[id=input1], input[id=input2], input[id=input3], input[id=input4]").focus(function () {
    // this로 값을 가져와서
    let focusedInput = $(this);
    // +1을 해서 inputIndex에 저장
    inputIndex = $("input").index(focusedInput) + 1;
  });

  $("input[id=input1], input[id=input2], input[id=input3], input[id=input4]").keydown(function (e) {
    // ctrl 누르면 함수 실행 중단 및 종료
    if (e.ctrlKey) return;
    if (e.altKey) return;
    if (e.altKey && e.key === "Tab") return;

    console.log(e.target.value.length);
    // 입력된 값의 길이가 4이상인 경우에 실행
    if (e.target.value.length > 4) {
      // 다음 포커스 값 초기화
      $(this).next("input").val("");
      // 포커스 다음으로 이동
      $(this).next("input").focus();
    }
  });

  // 붙여넣기 막기
  $("input[id=input1], input[id=input2], input[id=input3], input[id=input4]").on("paste", function (e) {
    e.preventDefault();
  });
});

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
    // 입력값이 16보다 크다면
    if (inputCharacter.length >= 16) {
      alert("1번 선택지");
      $("input[id=input1]").val(inputCharacter.substr(0, 4));
      $("input[id=input2]").val(inputCharacter.substr(4, 4));
      $("input[id=input3]").val(inputCharacter.substr(8, 4));
      $("input[id=input4]").val(inputCharacter.substr(12, 4));
      // 입력값이 16보다 작고, 12보다 크다면. 즉 13 ~ 15라면
    } else if (inputCharacter.length < 16 && inputCharacter.length > 12) {
      alert("2번 선택지");
      $("input[id=input1]").val(inputCharacter.substr(0, 4));
      $("input[id=input2]").val(inputCharacter.substr(4, 4));
      $("input[id=input3]").val(inputCharacter.substr(8, 4));
      $("input[id=input4]").val(inputCharacter.substr(12, 4));
      // 입력값이 12보다 작거나 같고, 8보다 크다면. 즉 9 ~ 12라면
    } else if (inputCharacter.length <= 12 && inputCharacter.length > 8) {
      alert("3번 선택지");
      $("input[id=input1]").val(inputCharacter.substr(0, 4));
      $("input[id=input2]").val(inputCharacter.substr(4, 4));
      $("input[id=input3]").val(inputCharacter.substr(8, 4));
      // 입력값이 8보다 작거나 같고, 4보다 크다면. 즉 5 ~ 8라면
    } else if (inputCharacter.length <= 8 && inputCharacter.length > 4) {
      alert("4번 선택지");
      $("input[id=input1]").val(inputCharacter.substr(0, 4));
      $("input[id=input2]").val(inputCharacter.substr(4, 4));
      // 입력값이 4보다 작거나 같다면, 즉 4 이하라면
    } else if (inputCharacter.length <= 4) {
      alert("5번 선택지");
      $("input[id=input1]").val(inputCharacter.substr(0, 4));
    }
  }

  if (inputIndex == "2") {
    // 입력값이 16보다 같거나 크다면. 즉 16 이상이라면
    if (inputCharacter.length >= 16) {
      alert("6번 선택지");
      $("input[id=input1]").val(inputCharacter.substr(0, 4));
      $("input[id=input2]").val(inputCharacter.substr(4, 4));
      $("input[id=input3]").val(inputCharacter.substr(8, 4));
      $("input[id=input4]").val(inputCharacter.substr(12, 4));
      // 입력값이 16보다 작고, 12보다는 크다면 즉. 13 ~ 15라면
    } else if (inputCharacter.length < 16 && inputCharacter.length > 12) {
      alert("7번 선택지");
      $("input[id=input2]").val(inputCharacter.substr(0, 4));
      $("input[id=input3]").val(inputCharacter.substr(4, 4));
      $("input[id=input4]").val(inputCharacter.substr(8, 4));
      // 입력값이 12보다 같거나 작고, 8보다 크다면 즉 9 ~ 12라면
    } else if (inputCharacter.length <= 12 && inputCharacter.length > 8) {
      alert("8번 선택지");
      $("input[id=input2]").val(inputCharacter.substr(0, 4));
      $("input[id=input3]").val(inputCharacter.substr(4, 4));
      $("input[id=input4]").val(inputCharacter.substr(8, 4));
      // 입력값이 8보다 같거나 작고, 4보다 크다면. 즉 5 ~ 8라면
    } else if (inputCharacter.length <= 8 && inputCharacter.length > 4) {
      alert("9번 선택지");
      $("input[id=input2]").val(inputCharacter.substr(0, 4));
      $("input[id=input3]").val(inputCharacter.substr(4, 4));
      // 입력값이 4보다 같거나 작다면, 즉 4 이하라면
    } else if (inputCharacter.length <= 4) {
      alert("10번 선택지");
      $("input[id=input2]").val(inputCharacter.substr(0, 4));
    }
  }

  if (inputIndex == "3") {
    if (inputCharacter.length >= 16) {
      alert("11번 선택지");
      $("input[id=input1]").val(inputCharacter.substr(0, 4));
      $("input[id=input2]").val(inputCharacter.substr(4, 4));
      $("input[id=input3]").val(inputCharacter.substr(8, 4));
      $("input[id=input4]").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length < 16 && inputCharacter.length > 12) {
      alert("12번 선택지");
      $("input[id=input3]").val(inputCharacter.substr(0, 4));
      $("input[id=input4]").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 12 && inputCharacter.length > 8) {
      alert("13번 선택지");
      $("input[id=input3]").val(inputCharacter.substr(0, 4));
      $("input[id=input4]").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 8 && inputCharacter.length > 4) {
      alert("14번 선택지");
      $("input[id=input3]").val(inputCharacter.substr(0, 4));
      $("input[id=input4]").val(inputCharacter.substr(4, 4));
    } else if (inputCharacter.length <= 4) {
      alert("15번 선택지");
      $("input[id=input3]").val(inputCharacter.substr(0, 4));
    }
  }

  if (inputIndex == "4") {
    if (inputCharacter.length >= 16) {
      alert("16번 선택지");
      $("input[id=input1]").val(inputCharacter.substr(0, 4));
      $("input[id=input2]").val(inputCharacter.substr(4, 4));
      $("input[id=input3]").val(inputCharacter.substr(8, 4));
      $("input[id=input4]").val(inputCharacter.substr(12, 4));
    } else if (inputCharacter.length < 16) {
      alert("17번 선택지");
      $("input[id=input4]").val(inputCharacter.substr(0, 4));
    }
  }

  $("input[id=input4]").focus();
}

