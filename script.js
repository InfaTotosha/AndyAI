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

// Список суперпорад
const superTips = [
  { title: "Секретна порада 1", text: "Тренуйся у приватних кімнатах, щоб спокійно вивчити нові рухи без перешкод!" },
  { title: "Секретна порада 2", text: "Стежи за гравцями-професіоналами на трансляціях, щоб переймати їхні фішки." },
  { title: "Секретна порада 3", text: "Налаштуй кут огляду та чутливість шолома під себе для зручнішої гри." }
];

// Функція для вибору випадкової суперпоради
function showRandomSuperTip() {
  const randomIndex = Math.floor(Math.random() * superTips.length);
  const tip = superTips[randomIndex];
  openModal(tip.title, tip.text);
}

// Функції відкриття та закриття модального вікна
function openModal(title, text, imageSrc) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-text").innerText = text;
  
  const modalImg = document.getElementById("modal-image");
  if (imageSrc) {
    modalImg.src = imageSrc;
    modalImg.style.display = "block";
  } else {
    modalImg.style.display = "none";
  }

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};