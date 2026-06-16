// 🔊 發音功能
function speak(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  speechSynthesis.speak(utterance);
}

// 🧠 小測驗
function checkAnswer(answer) {
  let result = document.getElementById("result");

  if (answer === "b") {
    result.textContent = "✅ 正確！gracias = 謝謝";
    result.style.color = "green";
  } else {
    result.textContent = "❌ 再試一次";
    result.style.color = "red";
  }
}
