const text = ["Data Analyst", "Python Developer", "AI Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    document.querySelector(".typing").textContent = currentText;

    if (j === text[i].length) isDeleting = true;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, 100);
}

type();
