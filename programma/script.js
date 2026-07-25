let cart = [];

function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.style.display = "none";
  });
  document.getElementById(tabId).style.display = "block";
}

function addToCart(name, price, image) {
  let item = cart.find(i => i.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({name, price, image, quantity: 1});
  }
  renderCart();
}

function renderCart() {
  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `<img src="${item.image}" width="60"> ${item.name} — ${item.price} грн × ${item.quantity}`;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });
  document.getElementById("total").innerText = "Итого: " + total + " грн";
}

/* Слайдер персонала */
const persons = [
  {
    img: "Vanya.jpg",
    text: "Это Ваня — ОТКАЗАНО"
  },
  {
    img: "Dima.jpg",
    text: "Это Дима — страдает хуйней и делает вид что он программист"
  },
  {
    img: "Sonya.jpg",
    text: "Это Соня — фотограф в душе"
  }
];

let currentIndex = 0;
const personImg = document.getElementById("person-img");
const personText = document.getElementById("person-text");

function showPerson(index) {
  personImg.classList.add("flip-out");
  setTimeout(() => {
    personImg.src = persons[index].img;
    personText.innerHTML = `<p>${persons[index].text}</p>`;
    personImg.classList.remove("flip-out");
    personImg.classList.add("flip-in");
    setTimeout(() => personImg.classList.remove("flip-in"), 600);
  }, 300);
}

function prevPerson() {
  currentIndex = (currentIndex - 1 + persons.length) % persons.length;
  showPerson(currentIndex);
}

function nextPerson() {
  currentIndex = (currentIndex + 1) % persons.length;
  showPerson(currentIndex);
}

// показать первого сотрудника при загрузке
showPerson(currentIndex);