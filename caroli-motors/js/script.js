(function () {
  "use strict";

  /* ---------- Utilidades ---------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
  var kmFmt = new Intl.NumberFormat("pt-BR");

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /* ---------- WhatsApp ---------- */
  function buildWhatsAppLink(message) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }

  function vehicleLabel(v) {
    return v.brand + " " + v.model + (v.version ? " " + v.version : "") + " " + v.yearFab + "/" + v.yearModel;
  }

  var MESSAGES = {
    general: function () {
      return "Olá! Estou no site da " + CONFIG.BUSINESS_NAME + " e gostaria de falar com um consultor.";
    },
    visit: function () {
      return "Olá! Gostaria de agendar uma visita à " + CONFIG.BUSINESS_NAME + ". Quais dias e horários vocês têm disponíveis?";
    },
    financing: function () {
      return "Olá! Vi o site da " + CONFIG.BUSINESS_NAME + " e gostaria de consultar as condições de financiamento.";
    },
    trade: function () {
      return "Olá! Gostaria de avaliar minha moto para dar na troca. Como funciona a avaliação?";
    },
    vehicleInterest: function (v) {
      return "Olá! Encontrei a moto " + vehicleLabel(v) + " no site da " + CONFIG.BUSINESS_NAME +
        " e gostaria de receber mais informações. Ela ainda está disponível?";
    },
    vehicleInfo: function (v) {
      return "Olá! Vi a moto " + vehicleLabel(v) + " no site da " + CONFIG.BUSINESS_NAME +
        " e gostaria de mais fotos e detalhes dessa moto.";
    }
  };

  function applyStaticLinks() {
    $$("[data-wa]").forEach(function (a) {
      var key = a.getAttribute("data-wa");
      var fn = MESSAGES[key] || MESSAGES.general;
      a.href = buildWhatsAppLink(fn());
    });
    ["aboutInstagram", "reviewsInstagram", "contactInstagram", "footerInstagram"].forEach(function (id) {
      var a = document.getElementById(id);
      if (a) a.href = CONFIG.INSTAGRAM_URL;
    });
  }

  /* ---------- Marca / logotipo ---------- */
  function setupBrand() {
    if (CONFIG.LOGO_PATH) {
      var img = $("#brandLogo");
      img.src = CONFIG.LOGO_PATH;
      img.hidden = false;
      img.addEventListener("error", function () {
        img.hidden = true;
        $("#brandText").hidden = false;
      });
      $("#brandText").hidden = true;
    }
  }

  /* ---------- Informações de contato ---------- */
  function setupContactInfo() {
    var pending = "A confirmar com a loja";
    var addr = $("#infoAddress");
    var phone = $("#infoPhone");
    var hours = $("#infoHours");

    addr.textContent = CONFIG.ADDRESS || pending;
    hours.textContent = CONFIG.HOURS || pending;

    if (CONFIG.PHONE) {
      var digits = CONFIG.PHONE.replace(/\D/g, "");
      var link = el("a", "", CONFIG.PHONE);
      link.href = "tel:+55" + digits;
      phone.textContent = "";
      phone.appendChild(link);
    } else {
      phone.textContent = pending;
    }

    var maps = $("#mapsButton");
    var mapsUrl = CONFIG.MAPS_URL ||
      (CONFIG.ADDRESS ? "https://www.google.com/maps/place/CAROLI+MOTORS/@-21.2238611,-50.8685257,17z/data=!3m1!4b1!4m6!3m5!1s0x9496e5000262e283:0xccec0a458b89fa2d!8m2!3d-21.2238611!4d-50.8659508!16s%2Fg%2F11lmnnyqnh?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D" + encodeURIComponent(CONFIG.ADDRESS) : "");
    if (mapsUrl) {
      maps.href = mapsUrl;
      maps.hidden = false;
    }

    if (CONFIG.ADDRESS) {
      var fa = $("#footerAddress");
      fa.textContent = CONFIG.ADDRESS;
      fa.hidden = false;
    }
    if (CONFIG.PRIVACY_URL) {
      var p = $("#privacyLink");
      p.href = CONFIG.PRIVACY_URL;
      p.hidden = false;
    }
  }

  /* ---------- Menu mobile ---------- */
  function setupNav() {
    var toggle = $("#navToggle");
    var nav = $("#primaryNav");

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      document.body.classList.toggle("no-scroll", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    $$("a", nav).forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) setOpen(false);
    });

    // Sombra no cabeçalho ao rolar
    var header = $(".site-header");
    function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 10); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Catálogo de motos ---------- */
  var state = { search: "", brand: "", price: "", year: "", category: "", transmission: "", sort: "default" };

  function uniqueSorted(list, numeric) {
    var seen = {};
    var out = [];
    list.forEach(function (x) { if (!seen[x]) { seen[x] = true; out.push(x); } });
    return out.sort(function (a, b) { return numeric ? b - a : String(a).localeCompare(String(b), "pt-BR"); });
  }

  function fillSelect(id, values) {
    var select = document.getElementById(id);
    values.forEach(function (v) {
      var opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      select.appendChild(opt);
    });
  }

  function setupFilterOptions() {
    fillSelect("fBrand", uniqueSorted(VEHICLES.map(function (v) { return v.brand; })));
    fillSelect("fYear", uniqueSorted(VEHICLES.map(function (v) { return v.yearModel; }), true));
    fillSelect("fCategory", uniqueSorted(VEHICLES.map(function (v) { return v.category; })));
    fillSelect("fTransmission", uniqueSorted(VEHICLES.map(function (v) { return v.transmission; })));
  }

  function matches(v) {
    if (state.search) {
      var hay = (v.brand + " " + v.model + " " + v.version + " " + v.category).toLowerCase();
      if (hay.indexOf(state.search.toLowerCase().trim()) === -1) return false;
    }
    if (state.brand && v.brand !== state.brand) return false;
    if (state.year && String(v.yearModel) !== state.year) return false;
    if (state.category && v.category !== state.category) return false;
    if (state.transmission && v.transmission !== state.transmission) return false;
    if (state.price) {
      var parts = state.price.split("-");
      var min = parts[0] ? Number(parts[0]) : 0;
      var max = parts[1] ? Number(parts[1]) : Infinity;
      if (v.price < min || v.price >= max) return false;
    }
    return true;
  }

  function sortList(list) {
    var copy = list.slice();
    switch (state.sort) {
      case "price-asc": copy.sort(function (a, b) { return a.price - b.price; }); break;
      case "price-desc": copy.sort(function (a, b) { return b.price - a.price; }); break;
      case "year-desc": copy.sort(function (a, b) { return b.yearModel - a.yearModel; }); break;
      case "year-asc": copy.sort(function (a, b) { return a.yearModel - b.yearModel; }); break;
    }
    return copy;
  }

  function spec(iconClass, text) {
    var li = el("li");
    var i = el("i", iconClass);
    i.setAttribute("aria-hidden", "true");
    li.appendChild(i);
    li.appendChild(document.createTextNode(" " + text));
    return li;
  }

  function createCard(v) {
    var card = el("article", "vehicle-card");

    var media = el("div", "vehicle-card__media");
    var img = document.createElement("img");
    img.src = v.image || "assets/images/vehicle-placeholder.svg";
    img.alt = v.image ? vehicleLabel(v) : "Foto de " + vehicleLabel(v) + " a ser inserida";
    img.width = 640;
    img.height = 400;
    img.loading = "lazy";
    img.addEventListener("error", function () {
      img.onerror = null;
      img.src = "assets/images/vehicle-placeholder.svg";
    });
    media.appendChild(img);
    if (v.demo) media.appendChild(el("span", "badge", "Exemplo"));
    card.appendChild(media);

  function renderVehicles() {
    var grid = $("#vehicleGrid");
    var empty = $("#emptyState");
    var count = $("#resultsCount");
    var list = sortList(VEHICLES.filter(matches));

    grid.textContent = "";
    list.forEach(function (v) { grid.appendChild(createCard(v)); });

    empty.hidden = list.length > 0;
    grid.hidden = list.length === 0;
    count.textContent = list.length === 1 ? "1 moto encontrada" : list.length + " motos encontradas";
  }

  function resetFilters() {
    $("#filters").reset();
    state = { search: "", brand: "", price: "", year: "", category: "", transmission: "", sort: "default" };
    renderVehicles();
  }

  function setupCatalog() {
    if (!Array.isArray(VEHICLES) || VEHICLES.length === 0) {
      $("#resultsCount").textContent = "";
      $("#vehicleGrid").hidden = true;
      $("#filters").hidden = true;
      $("#emptyState").hidden = false;
      return;
    }
    if (VEHICLES.some(function (v) { return v.demo; })) $("#demoNotice").hidden = false;

    setupFilterOptions();

    var map = { fSearch: "search", fBrand: "brand", fPrice: "price", fYear: "year",
                fCategory: "category", fTransmission: "transmission", fSort: "sort" };
    Object.keys(map).forEach(function (id) {
      var node = document.getElementById(id);
      node.addEventListener(id === "fSearch" ? "input" : "change", function () {
        state[map[id]] = node.value;
        renderVehicles();
      });
    });
    $("#filters").addEventListener("submit", function (e) { e.preventDefault(); });
    $("#clearFilters").addEventListener("click", resetFilters);
    $("#emptyClear").addEventListener("click", resetFilters);

    renderVehicles();
  }

  /* ---------- Formulário de interesse ---------- */
  function setError(inputId, errorId, message) {
    var input = document.getElementById(inputId);
    document.getElementById(errorId).textContent = message || "";
    input.setAttribute("aria-invalid", message ? "true" : "false");
    input.classList.toggle("is-invalid", !!message);
    return !message;
  }

  function cleanText(value) {
    // remove caracteres de controle e espaços extras
    return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
  }

  function setupForm() {
    var form = $("#interestForm");
    var status = $("#formStatus");

    function currentInterest() {
      return form.querySelector('input[name="interest"]:checked').value;
    }

    function validate() {
      var ok = true;
      var name = cleanText(form.name.value);
      var phoneDigits = form.phone.value.replace(/\D/g, "");
      var interest = currentInterest();

      ok = setError("name", "nameError", name.length < 2 ? "Informe seu nome." : "") && ok;
      ok = setError("phone", "phoneError",
        (phoneDigits.length < 10 || phoneDigits.length > 11) ? "Informe um telefone com DDD, ex.: (11) 99999-9999." : "") && ok;

      var needsWanted = interest !== "trade";
      ok = setError("wanted", "wantedError",
        needsWanted && cleanText(form.wanted.value).length < 2 ? "Informe a moto desejada." : "") && ok;

      var needsTrade = interest !== "financing";
      ok = setError("tradeVehicle", "tradeError",
        needsTrade && cleanText(form.tradeVehicle.value).length < 2 && interest === "trade"
          ? "Informe a moto que deseja avaliar." : "") && ok;
      return ok;
    }

    function updateFields() {
      var interest = currentInterest();
      $("#wantedField label").textContent = interest === "trade" ? "Moto desejada (opcional)" : "Moto desejada *";
      $("#tradeField label").textContent = interest === "trade" ? "Moto usada para troca *" : "Moto usada para troca (opcional)";
      setError("wanted", "wantedError", "");
      setError("tradeVehicle", "tradeError", "");
    }

    $$('input[name="interest"]', form).forEach(function (r) { r.addEventListener("change", updateFields); });
    updateFields();

    ["name", "phone", "wanted", "tradeVehicle"].forEach(function (id) {
      document.getElementById(id).addEventListener("input", function () {
        if (this.classList.contains("is-invalid")) validate();
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "";
      status.className = "form__status";

      if (!validate()) {
        status.textContent = "Revise os campos destacados.";
        status.classList.add("is-error");
        var firstBad = form.querySelector(".is-invalid");
        if (firstBad) firstBad.focus();
        return;
      }

      var interest = currentInterest();
      var lines = ["Olá! Vim pelo site da " + CONFIG.BUSINESS_NAME + "."];
      var label = { financing: "Financiamento", trade: "Avaliação de moto para troca", both: "Financiamento e avaliação de troca" };
      lines.push("Interesse: " + label[interest]);
      lines.push("Nome: " + cleanText(form.name.value));
      lines.push("Telefone: " + cleanText(form.phone.value));
      if (cleanText(form.wanted.value)) lines.push("Moto desejada: " + cleanText(form.wanted.value));
      if (cleanText(form.downPayment.value)) lines.push("Entrada aproximada: " + cleanText(form.downPayment.value));
      if (cleanText(form.tradeVehicle.value)) lines.push("Moto para troca: " + cleanText(form.tradeVehicle.value));

      var url = buildWhatsAppLink(lines.join("\n"));
      var win = window.open(url, "_blank", "noopener,noreferrer");
      status.classList.add("is-ok");
      status.textContent = win
        ? "WhatsApp aberto em outra aba. Confirme o envio por lá."
        : "Seu navegador bloqueou a nova aba. Permita pop-ups e tente de novo.";
    });
  }

  /* ---------- FAQ (acordeão) ---------- */
  function setupFaq() {
    $$(".faq__q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        var open = btn.getAttribute("aria-expanded") === "true";
        // fecha os demais
        $$(".faq__q").forEach(function (other) {
          if (other !== btn) {
            other.setAttribute("aria-expanded", "false");
            document.getElementById(other.getAttribute("aria-controls")).hidden = true;
          }
        });
        btn.setAttribute("aria-expanded", String(!open));
        panel.hidden = open;
      });
    });
  }

  /* ---------- Avaliações (somente se houver conteúdo real) ---------- */
  function setupReviews() {
    var reviews = Array.isArray(CONFIG.REVIEWS) ? CONFIG.REVIEWS : [];
    if (reviews.length === 0) return;

    var track = $("#reviewsTrack");
    reviews.forEach(function (r) {
      var card = el("figure", "review-card");
      if (typeof r.rating === "number") {
        var stars = el("p", "review-card__stars", "★".repeat(Math.max(0, Math.min(5, Math.round(r.rating)))));
        stars.setAttribute("aria-label", "Nota " + r.rating + " de 5");
        card.appendChild(stars);
      }
      card.appendChild(el("blockquote", "", r.text));
      var cap = el("figcaption", "", r.name + (r.date ? " · " + new Date(r.date + "T00:00:00").toLocaleDateString("pt-BR") : ""));
      card.appendChild(cap);
      track.appendChild(card);
    });

    $("#reviewsWrap").hidden = false;
    $("#reviewsEmpty").hidden = true;

    function step(dir) {
      var first = track.firstElementChild;
      var w = first ? first.getBoundingClientRect().width + 16 : 300;
      track.scrollBy({ left: dir * w, behavior: "smooth" });
    }
    $("#reviewPrev").addEventListener("click", function () { step(-1); });
    $("#reviewNext").addEventListener("click", function () { step(1); });
  }

  /* ---------- Carrossel de clientes (rotação automática) ---------- */
  function setupClients() {
    var photos = (typeof CLIENT_PHOTOS !== "undefined" && Array.isArray(CLIENT_PHOTOS)) ? CLIENT_PHOTOS : [];
    if (photos.length === 0) return;

    var wrap = $("#clients");
    var track = $("#clientsTrack");
    var playBtn = $("#clientsPlay");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var INTERVAL = 3500;      // milissegundos entre uma foto e outra
    var timer = null;
    var userPaused = reduce;  // quem prefere menos movimento começa pausado
    var hovering = false;
    var touching = false;
    var touchTimer = null;

    photos.forEach(function (file, i) {
      var card = el("figure", "client-card");
      var img = document.createElement("img");
      img.src = "assets/images/clientes/" + file;
      img.alt = "Cliente com a moto recém-adquirida na Caroli Motors";
      img.width = 600;
      img.height = 800;
      if (i > 1) img.loading = "lazy";
      img.addEventListener("error", function () { card.remove(); });
      card.appendChild(img);
      track.appendChild(card);
    });
    wrap.hidden = false;

    function behavior() { return reduce ? "auto" : "smooth"; }
    function stepSize() {
      var first = track.firstElementChild;
      if (!first) return 0;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 16;
      return first.getBoundingClientRect().width + gap;
    }
    function atEnd() { return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4; }

    function next() {
      if (atEnd()) track.scrollTo({ left: 0, behavior: behavior() });
      else track.scrollBy({ left: stepSize(), behavior: behavior() });
    }
    function prev() {
      if (track.scrollLeft <= 4) track.scrollTo({ left: track.scrollWidth, behavior: behavior() });
      else track.scrollBy({ left: -stepSize(), behavior: behavior() });
    }

    function sync() {
      if (timer) { clearInterval(timer); timer = null; }
      if (!userPaused && !hovering && !touching && !document.hidden) {
        timer = setInterval(next, INTERVAL);
      }
    }
    function updatePlayButton() {
      playBtn.firstElementChild.className = userPaused ? "fa-solid fa-play" : "fa-solid fa-pause";
      playBtn.setAttribute("aria-label", userPaused ? "Retomar rotação automática" : "Pausar rotação automática");
    }

    $("#clientsNext").addEventListener("click", function () { next(); sync(); });
    $("#clientsPrev").addEventListener("click", function () { prev(); sync(); });
    playBtn.addEventListener("click", function () {
      userPaused = !userPaused;
      updatePlayButton();
      sync();
    });

    // Pausa enquanto o visitante está com o mouse/teclado/dedo no carrossel
    wrap.addEventListener("mouseenter", function () { hovering = true; sync(); });
    wrap.addEventListener("mouseleave", function () { hovering = false; sync(); });
    wrap.addEventListener("focusin", function () { hovering = true; sync(); });
    wrap.addEventListener("focusout", function () { hovering = false; sync(); });
    track.addEventListener("touchstart", function () {
      touching = true;
      clearTimeout(touchTimer);
      sync();
    }, { passive: true });
    track.addEventListener("touchend", function () {
      clearTimeout(touchTimer);
      touchTimer = setTimeout(function () { touching = false; sync(); }, 5000);
    }, { passive: true });
    document.addEventListener("visibilitychange", sync);

    updatePlayButton();
    sync();
  }

  /* ---------- Animações de entrada ---------- */
  function setupReveal() {
    var items = $$(".reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduce) {
      items.forEach(function (i) { i.classList.add("is-visible"); });
      return;
    }
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ---------- Início ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    $("#year").textContent = new Date().getFullYear();
    setupBrand();
    applyStaticLinks();
    setupContactInfo();
    setupNav();
    setupCatalog();
    setupForm();
    setupFaq();
    setupReviews();
    setupClients();
    setupReveal();
  });
})();
