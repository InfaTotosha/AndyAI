// Відкрити вспливаюче вікно з текстом
function openModal(title, text) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-text").innerText = text;
  document.getElementById("modal").style.display = "flex";
}

// Закрити вспливаюче вікно
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Закрити вікно при натисканні поза ним
window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};