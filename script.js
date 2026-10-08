let currentProductIndex = 0;

function showProduct(index) {
  const products = document.querySelectorAll('.product');
  const dots = document.querySelectorAll('.dot');

  if (!products.length) return;

  if (index < 0) index = products.length - 1;
  if (index >= products.length) index = 0;

  products.forEach((p, i) => {
    p.classList.toggle('active', i === index);
  });

  dots.forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });

  currentProductIndex = index;
}

function nextProduct() {
  showProduct(currentProductIndex + 1);
}

function previousProduct() {
  showProduct(currentProductIndex - 1);
}

function setLanguage(lang) {
  const isIt = lang === 'it';

  const itBtn = document.getElementById('itButton');
  const enBtn = document.getElementById('enButton');

  if (itBtn) itBtn.classList.toggle('active', isIt);
  if (enBtn) enBtn.classList.toggle('active', !isIt);

  document.querySelectorAll('[data-it]').forEach((el) => {
    const text = isIt ? el.getAttribute('data-it') : el.getAttribute('data-en');
    if (text) {
      el.innerHTML = text;
    }
  });
}

// Автоматична зміна товарів кожні 5 секунд
setInterval(() => {
  nextProduct();
}, 5000);
