const input = document.getElementById("text-input");
const generateBtn = document.getElementById("generate-btn");
const restartBtn = document.getElementById("restart-btn");
const qrBox = document.getElementById("qr-box");
const qrImage = document.getElementById("qr-image");

generateBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) {
    alert("Please enter something!");
    return;
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(value)}&size=200x200`;
  qrImage.src = qrUrl;
  qrBox.classList.remove("hide");
  restartBtn.classList.remove("hide");
  generateBtn.classList.add("hide");
});

restartBtn.addEventListener("click", () => {
  input.value = "";
  qrImage.src = "";
  qrBox.classList.add("hide");
  restartBtn.classList.add("hide");
  generateBtn.classList.remove("hide");
});
