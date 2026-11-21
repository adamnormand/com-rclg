// Mobile menu, About slider, active menu link while scrolling. No dependencies.
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  var slides = document.querySelectorAll('.slides img');
  var dots = document.querySelectorAll('.dots button');
  var i = 0, timer;
  function go(n) {
    if (!slides.length) return;
    slides[i].classList.remove('on'); if (dots[i]) dots[i].classList.remove('on');
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('on'); if (dots[i]) dots[i].classList.add('on');
  }
  function auto() { clearInterval(timer); timer = setInterval(function () { go(i + 1); }, 5000); }
  var prev = document.querySelector('.slider .prev'), next = document.querySelector('.slider .next');
  if (prev) prev.addEventListener('click', function () { go(i - 1); auto(); });
  if (next) next.addEventListener('click', function () { go(i + 1); auto(); });
  dots.forEach(function (d, n) { d.addEventListener('click', function () { go(n); auto(); }); });
  if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) auto();

  var links = [].slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var targets = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  function spy() {
    var y = window.scrollY + 120, cur = -1;
    targets.forEach(function (t, n) { if (t && t.offsetTop <= y) cur = n; });
    links.forEach(function (a, n) { a.classList.toggle('active', n === cur); });
  }
  window.addEventListener('scroll', spy, { passive: true }); spy();
})();
