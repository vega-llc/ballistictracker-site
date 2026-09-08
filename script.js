/* Progressive enhancement only: content and contact links remain available without JS. */
(function () {
  'use strict';
  var nav = document.querySelector('.nav');
  var menu = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (nav && menu && links) {
    nav.classList.add('nav-ready');
    function closeMenu(restoreFocus) {
      nav.classList.remove('menu-open');
      menu.setAttribute('aria-expanded', 'false');
      if (restoreFocus) menu.focus();
    }
    menu.addEventListener('click', function () {
      var open = nav.classList.toggle('menu-open');
      menu.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('menu-open')) closeMenu(true);
    });
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target)) closeMenu(false);
    });
    window.matchMedia('(min-width: 1161px)').addEventListener('change', function (event) {
      if (event.matches) closeMenu(false);
    });
  }

  var tour = document.querySelector('.range-tour');
  if (tour) {
    var tabs = Array.from(tour.querySelectorAll('.tour-tab'));
    var panels = Array.from(tour.querySelectorAll('.tour-panel'));
    var tablist = tour.querySelector('.tour-tabs');
    tablist.setAttribute('role', 'tablist');
    function activate(index, focus) {
      tabs.forEach(function (tab, i) {
        tab.setAttribute('aria-selected', String(i === index));
        tab.tabIndex = i === index ? 0 : -1;
        panels[i].hidden = i !== index;
      });
      if (focus) tabs[index].focus();
    }
    tabs.forEach(function (tab, i) {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panels[i].id);
      panels[i].setAttribute('role', 'tabpanel');
      panels[i].setAttribute('aria-labelledby', tab.id);
      panels[i].tabIndex = 0;
      tab.addEventListener('click', function () { activate(i, false); });
      tab.addEventListener('keydown', function (event) {
        var index = i;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') index = (i + 1) % tabs.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') index = (i + tabs.length - 1) % tabs.length;
        else if (event.key === 'Home') index = 0;
        else if (event.key === 'End') index = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(index, true);
      });
    });
    tour.classList.add('tour-ready');
    activate(0, false);
  }

  // Keep original example cards readable at their authored width on small screens.
  function fitCards() {
    document.querySelectorAll('.gallery .paper-stage').forEach(function (stage) {
      var card = stage.querySelector('.paper');
      if (!card) return;
      card.style.transform = '';
      stage.style.height = '';
      stage.classList.remove('fitted');
      var scale = Math.min(1, stage.clientWidth / card.offsetWidth);
      if (scale < 0.62) return;
      card.style.transform = 'scale(' + scale + ')';
      stage.style.height = Math.ceil(card.offsetHeight * scale) + 'px';
      stage.classList.add('fitted');
    });
  }
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitCards, 120);
  });
  fitCards();
  window.addEventListener('load', fitCards);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitCards);

  // One existing Sender form. A usable email fallback is independent of page load.
  var waitlist = document.querySelector('.waitlist');
  if (waitlist && document.body.classList.contains('pre-launch')) {
    waitlist.classList.add('js-enabled');
    var form = waitlist.querySelector('.sender-form-field');
    function formRendered() {
      return !!form.querySelector('form, iframe, input[type="email"]');
    }
    function checkForm() {
      if (formRendered()) {
        waitlist.classList.add('form-ready');
        waitlist.classList.remove('no-render');
      }
    }
    new MutationObserver(checkForm).observe(form, {childList: true, subtree: true});
    window.setTimeout(function () {
      if (!formRendered()) waitlist.classList.add('no-render');
    }, 5000);
    window.Sender = 'sender';
    window.sender = window.sender || function () {
      (window.sender.q = window.sender.q || []).push(arguments);
    };
    window.sender.l = Date.now();
    var loader = document.createElement('script');
    loader.async = true;
    loader.src = 'https://cdn.sender.net/accounts_resources/universal.js';
    loader.onerror = function () { waitlist.classList.add('no-render'); };
    document.head.appendChild(loader);
    window.sender('16c1ba04aa9763');
  }
})();
