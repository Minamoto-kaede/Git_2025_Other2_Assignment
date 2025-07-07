function checkAnswer() {
    const options = document.getElementsByName("answer");
    let selectedValue = "";

    for (const option of options) {
        if (option.checked) {
            selectedValue = option.value;
            break;
        }
    }

    if (!selectedValue) {
        document.getElementById("result").textContent = "解答を選択してください。";
        return;
    }

    const correctAnswer = "プロトタイピング";

    if (selectedValue === correctAnswer) {
        document.getElementById("result").textContent = "正解です！";
    } else {
        document.getElementById("result").textContent = "不正解です。";
    }
}
