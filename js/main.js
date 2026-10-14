(function () {
  "use strict";
  var works = window.WORKS || [];
  var site = window.SITE || { name: "", email: "" };

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }

  /* "Title, 2024" or just "Title" when there is no year */
  function heading(w) { return w.year ? w.title + ", " + w.year : w.title; }
  /* "Oil on canvas. 90 × 120 cm. Available." with any empty parts left out */
  function details(w) {
    return [w.medium, w.size, w.status].filter(Boolean).join(". ") + (w.medium || w.size || w.status ? "." : "");
  }

  /* ---------- artwork rows ---------- */
  function renderRows(container, list, onOpen) {
    container.innerHTML = "";
    list.forEach(function (w) {
      var img = el("img", {
        src: "images/" + w.file, width: w.width, height: w.height,
        alt: (heading(w) + ". " + details(w)).trim(), loading: "lazy"
      });
      var btn = el("button", { type: "button", "aria-label": "View " + w.title + " larger" }, [img]);
      btn.addEventListener("click", function () { onOpen(w); });
      var cap = el("figcaption", {}, [
        el("span", { "class": "work-title", text: w.title }),
        el("span", { text: w.year ? ", " + w.year : "" })
      ]);
      var fig = el("figure", { "class": "work" }, [btn, cap]);
      fig.style.setProperty("--ar", (w.width / w.height).toFixed(4));
      container.appendChild(fig);
    });
  }

  /* ---------- lightbox ---------- */
  var box = document.getElementById("lightbox");
  var current = 0;
  var visible = works;

  function show(index) {
    if (!box) return;
    current = (index + visible.length) % visible.length;
    var w = visible[current];
    var img = box.querySelector(".lb-img");
    img.src = "images/" + w.file;
    img.width = w.width; img.height = w.height;
    img.alt = heading(w);
    box.querySelector(".lb-title").textContent = heading(w);
    box.querySelector(".lb-meta").textContent = details(w);
    box.querySelector(".lb-count").textContent = (current + 1) + " of " + visible.length;
    var enquire = box.querySelector(".lb-enquire");
    enquire.href = "mailto:" + site.email + "?subject=" + encodeURIComponent("Enquiry: " + w.title);
  }

  function open(w) {
    if (!box) return;
    show(visible.indexOf(w));
    if (typeof box.showModal === "function") box.showModal();
    else box.setAttribute("open", "");
  }

  if (box) {
    box.querySelector(".lb-close").addEventListener("click", function () { box.close(); });
    var prev = box.querySelector(".lb-prev");
    var next = box.querySelector(".lb-next");
    prev.addEventListener("click", function () { show(current - 1); });
    next.addEventListener("click", function () { show(current + 1); });
    if (works.length < 2) { prev.hidden = true; next.hidden = true; }
    box.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
    box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
  }

  /* ---------- home: moving hero ---------- */
  var hero = document.querySelector(".hero");
  if (hero) {
    var slides = [].slice.call(hero.querySelectorAll(".hero-slide"));
    var caption = document.getElementById("hero-caption");
    var count = document.getElementById("hero-count");
    var plus = hero.querySelector(".hero-plus");
    var idx = 0;

    var workFor = function (i) {
      var file = slides[i].getAttribute("data-file");
      return works.filter(function (w) { return w.file === file; })[0];
    };
    var label = function (i) {
      var w = workFor(i);
      if (w) caption.textContent = heading(w);
      count.textContent = (i + 1) + " / " + slides.length;
    };
    var go = function (n) {
      var old = slides[idx];
      old.classList.remove("is-active");
      old.classList.add("is-leaving");
      window.setTimeout(function () { old.classList.remove("is-leaving"); }, 2000);
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add("is-active");
      label(idx);
    };

    label(0);
    var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!still && slides.length > 1) window.setInterval(function () { go(idx + 1); }, 6500);

    plus.addEventListener("click", function () {
      var w = workFor(idx);
      if (!w) return;
      visible = works;
      open(w);
    });
  }

  /* ---------- home: recent work ---------- */
  var recent = document.getElementById("recent-work");
  if (recent) {
    var recentList = works.slice(0, 6);
    renderRows(recent, recentList, function (w) { visible = recentList; open(w); });
  }

  /* ---------- works page ---------- */
  var all = document.getElementById("all-work");
  if (all) {
    renderRows(all, works, function (w) { visible = works; open(w); });
  }

  /* ---------- contact: email address from the one setting ---------- */
  [].slice.call(document.querySelectorAll("[data-email]")).forEach(function (a) {
    a.href = "mailto:" + site.email;
    a.textContent = site.email;
  });

  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
