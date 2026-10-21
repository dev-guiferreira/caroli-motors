
/* =====================================================
   CAROLI MOTORS — ESTOQUE E CARROSSEL
   44 veículos • Reprodução automática • Navegação manual
   Imagens: assets/images/veiculos/moto-01.webp até moto-44.webp
   ===================================================== */

const VEHICLES = [
  {
    id: "moto-01", brand: "Honda", model: "CG 160 Titan",
    version: "160", yearFab: 2025, yearModel: 2025, km: 800,
    transmission: "Manual", fuel: "Flex", category: "Street",
    price: 22500, color: "Laranja",
    description: "Titan 160 seminova, apenas 800 km, sem detalhes e documentação em dia.",
    image: "assets/images/veiculos/moto-01.webp"
  },
  {
    id: "moto-02", brand: "Honda", model: "CG 160",
    version: "160", yearFab: 2019, yearModel: 2019, km: 31000,
    transmission: "Manual", fuel: "Flex", category: "Street",
    price: 15800, color: "Vermelha",
    description: "Moto usada. Consulte condições e disponibilidade.",
    image: "assets/images/veiculos/moto-02.webp"
  },
  {
    id: "moto-03", brand: "Honda", model: "Biz",
    version: "125", yearFab: 2022, yearModel: 2022, km: 20000,
    transmission: "Manual", fuel: "Gasolina", category: "Urbana",
    price: 16300, color: "Vermelha",
    description: "Honda Biz, prática para o dia a dia.",
    image: "assets/images/veiculos/moto-03.webp"
  },
  {
    id: "moto-04", brand: "Honda", model: "CG 160",
    version: "160", yearFab: 2020, yearModel: 2020, km: 40000,
    transmission: "Manual", fuel: "Flex", category: "Street",
    price: 16900, color: "Branca",
    description: "Moto usada. Consulte condições e disponibilidade.",
    image: "assets/images/veiculos/moto-04.webp"
  },
  {
    id: "moto-05", brand: "Honda", model: "CB",
    version: "", yearFab: 2020, yearModel: 2020, km: 58300,
    transmission: "Manual", fuel: "Gasolina", category: "Street",
    price: 19800, color: "Cinza",
    description: "Modelo anunciado como Honda CB.",
    image: "assets/images/veiculos/moto-05.webp"
  },
  {
    id: "moto-06", brand: "Honda", model: "NXR 160 Bros",
    version: "160", yearFab: 2024, yearModel: 2024, km: 16000,
    transmission: "Manual", fuel: "Flex", category: "Trail",
    price: 21900, color: "Vermelha",
    description: "Honda Bros 160, versátil para diferentes trajetos.",
    image: "assets/images/veiculos/moto-06.webp"
  },
  {
    id: "moto-07", brand: "Honda", model: "NXR 160 Bros",
    version: "160", yearFab: 2017, yearModel: 2017, km: 58400,
    transmission: "Manual", fuel: "Flex", category: "Trail",
    price: 15800, color: "Branca",
    description: "Moto usada. Consulte condições e disponibilidade.",
    image: "assets/images/veiculos/moto-07.webp"
  },
  {
    id: "moto-08", brand: "Honda", model: "XR",
    version: "", yearFab: 2025, yearModel: 2025, km: 1500,
    transmission: "Manual", fuel: "Gasolina", category: "Trail",
    price: 32900, color: "Vermelha",
    description: "Anúncio identificado como Honda XR. Confirme a versão com a loja.",
    image: "assets/images/veiculos/moto-08.webp"
  },
  {
    id: "moto-09", brand: "Elétrica", model: "FX2",
    version: "1000W", yearFab: 2026, yearModel: 2026, km: null,
    transmission: "Elétrica", fuel: "Elétrica", category: "Elétrica",
    price: 10800, color: "Vermelha",
    description: "Bicicleta elétrica FX2 de 1000W.",
    image: "assets/images/veiculos/moto-09.webp"
  },
  {
    id: "moto-10", brand: "Sudu", model: "A4",
    version: "", yearFab: 2026, yearModel: 2026, km: null,
    transmission: "Elétrica", fuel: "Elétrica", category: "Elétrica",
    price: 10300, color: "Branca e verde",
    description: "Veículo elétrico Sudu A4.",
    image: "assets/images/veiculos/moto-10.webp"
  },
  {
    id: "moto-11", brand: "Duos", model: "Bike elétrica",
    version: "600W", yearFab: 2025, yearModel: 2025, km: null,
    transmission: "Elétrica", fuel: "Elétrica", category: "Elétrica",
    price: 4900, color: "Verde",
    description: "Bicicleta elétrica Duos de 600W.",
    image: "assets/images/veiculos/moto-11.webp"
  },
  {
    id: "moto-12", brand: "Elétrica", model: "Bike FX2",
    version: "1000W", yearFab: 2026, yearModel: 2026, km: 1111,
    transmission: "Elétrica", fuel: "Elétrica", category: "Elétrica",
    price: 10800, color: "Verde",
    description: "Bicicleta elétrica FX2 de 1000W.",
    image: "assets/images/veiculos/moto-12.webp"
  },
  {
    id: "moto-13", brand: "Savage", model: "Bicicleta elétrica",
    version: "1000W", yearFab: null, yearModel: null, km: null,
    transmission: "Elétrica", fuel: "Elétrica", category: "Elétrica",
    price: 11500, color: "Cinza",
    description: "Bateria de lítio, Bluetooth, piloto automático, freio a disco e autonomia anunciada de até 70 km.",
    image: "assets/images/veiculos/moto-13.webp"
  },
  {
    id: "moto-14", brand: "Honda", model: "CG 160",
    version: "160", yearFab: 2025, yearModel: 2025, km: 8000,
    transmission: "Manual", fuel: "Flex", category: "Street",
    price: 20800, color: "Vermelha",
    description: "Honda CG 160, com dois proprietários informados no anúncio.",
    image: "assets/images/veiculos/moto-14.webp"
  },
  {
    id: "moto-15", brand: "Honda", model: "CB",
    version: "", yearFab: 2026, yearModel: 2026, km: 1322,
    transmission: "Manual", fuel: "Gasolina", category: "Street",
    price: 28800, color: "Azul",
    description: "Anúncio identificado como Honda CB. Confirme a versão com a loja.",
    image: "assets/images/veiculos/moto-15.webp"
  },
  {
    id: "moto-16", brand: "A.P.C Motor Company",
    model: "Elétrica", version: "", yearFab: 2026,
    yearModel: 2026, km: 300, transmission: "Elétrica",
    fuel: "Elétrica", category: "Elétrica", price: 4700,
    color: "Azul",
    description: "Moto elétrica com 300 km informados no anúncio.",
    image: "assets/images/veiculos/moto-16.webp"
  },
  {
    id: "moto-17", brand: "Triumph", model: "Speed 400",
    version: "400", yearFab: 2025, yearModel: 2025, km: 10000,
    transmission: "Manual", fuel: "Gasolina", category: "Street",
    price: 26990, color: "Vermelha",
    description: "Speed 400 seminova, único dono, revisada e na garantia, conforme anúncio.",
    image: "assets/images/veiculos/moto-17.webp"
  },
  {
    id: "moto-18", brand: "Honda", model: "Biz 125 EX",
    version: "125", yearFab: 2027, yearModel: 2027, km: 300,
    transmission: "Manual", fuel: "Flex", category: "Urbana",
    price: 21800, color: "Cinza",
    description: "Anunciada como zero quilômetro, emplacada e com garantia de três anos.",
    image: "assets/images/veiculos/moto-18.webp"
  },
  {
    id: "moto-19", brand: "Honda", model: "PCX 160",
    version: "160", yearFab: 2026, yearModel: 2026, km: 2500,
    transmission: "Automático", fuel: "Gasolina", category: "Scooter",
    price: 21900, color: "Branca",
    description: "PCX 160, transmissão automática e farol LED, conforme anúncio.",
    image: "assets/images/veiculos/moto-19.webp"
  },
  {
    id: "moto-20", brand: "Honda", model: "CB650R",
    version: "650", yearFab: 2022, yearModel: 2022, km: 1600,
    transmission: "Manual", fuel: "Gasolina", category: "Esportiva",
    price: 57500, color: "Vermelha",
    description: "Anúncio identifica a moto como CB650R, único dono e com chave reserva.",
    image: "assets/images/veiculos/moto-20.webp"
  },
  {
    id: "moto-21", brand: "Honda", model: "CG 160 Titan",
    version: "160", yearFab: 2021, yearModel: 2021, km: 40000,
    transmission: "Manual", fuel: "Flex", category: "Street",
    price: 17300, color: "Azul",
    description: "Moto revisada, pneus bons e documentação em dia, segundo o anúncio.",
    image: "assets/images/veiculos/moto-21.webp"
  },
  {
    id: "moto-22", brand: "Yamaha", model: "Lander 250",
    version: "250", yearFab: 2024, yearModel: 2024, km: 23000,
    transmission: "Manual", fuel: "Gasolina", category: "Trail",
    price: 27800, color: "Vermelha",
    description: "Acessórios anunciados: baú, protetores, bolha, bolsa impermeável e multimídia.",
    image: "assets/images/veiculos/moto-22.webp"
  },
  {
    id: "moto-23", brand: "Honda", model: "Falcon 400",
    version: "400", yearFab: 2007, yearModel: 2007, km: 79000,
    transmission: "Manual", fuel: "Gasolina", category: "Trail",
    price: 17800, color: "Preta",
    description: "Falcon 400 anunciada como revisada e com documentação em dia.",
    image: "assets/images/veiculos/moto-23.webp"
  },
  {
    id: "moto-24", brand: "Honda", model: "Biz 125",
    version: "125", yearFab: 2019, yearModel: 2019, km: 24000,
    transmission: "Manual", fuel: "Flex", category: "Urbana",
    price: 15800, color: "Branca",
    description: "Moto revisada, pneus bons e documentação em dia, conforme anúncio.",
    image: "assets/images/veiculos/moto-24.webp"
  },
  {
    id: "moto-25", brand: "Honda", model: "XRE 190 ABS",
    version: "190", yearFab: 2021, yearModel: 2021, km: 17000,
    transmission: "Manual", fuel: "Flex", category: "Trail",
    price: 20900, color: "Preta",
    description: "XRE 190 ABS, anunciada como revisada e com pneus bons.",
    image: "assets/images/veiculos/moto-25.webp"
  },
  {
    id: "moto-26", brand: "Sudu", model: "A10",
    version: "1000W", yearFab: null, yearModel: null, km: null,
    transmission: "Elétrica", fuel: "Elétrica", category: "Elétrica",
    price: 6500, color: "Azul e vermelho",
    description: "Bicicleta elétrica com bateria de lítio 48V 24Ah, autonomia anunciada de 48 km e garantia de seis meses.",
    image: "assets/images/veiculos/moto-26.webp"
  },
  {
    id: "moto-27", brand: "Honda", model: "Twister",
    version: "", yearFab: 2019, yearModel: 2019, km: 23000,
    transmission: "Manual", fuel: "Gasolina", category: "Street",
    price: 18900, color: "Vermelha",
    description: "Twister anunciada como revisada e com baixa quilometragem.",
    image: "assets/images/veiculos/moto-27.webp"
  },
  {
    id: "moto-28", brand: "Honda", model: "Biz 110i",
    version: "110", yearFab: 2021, yearModel: 2021, km: 13000,
    transmission: "Manual", fuel: "Gasolina", category: "Urbana",
    price: 13700, color: "Branca",
    description: "Biz 110i com financiamento sujeito a análise, segundo o anúncio.",
    image: "assets/images/veiculos/moto-28.webp"
  },
  {
    id: "moto-29", brand: "Honda", model: "Biz 125 EX",
    version: "125", yearFab: 2027, yearModel: 2027, km: 300,
    transmission: "Manual", fuel: "Flex", category: "Urbana",
    price: 20990, color: "Azul",
    description: "Anunciada como nova, emplacada e pronta para entrega.",
    image: "assets/images/veiculos/moto-29.webp"
  },
  {
    id: "moto-30", brand: "Honda", model: "Pop 110i",
    version: "110", yearFab: 2025, yearModel: 2025, km: 35000,
    transmission: "Manual", fuel: "Gasolina", category: "Urbana",
    price: 12990, color: "Vermelha",
    description: "Pop 110i com partida elétrica, revisada conforme anúncio.",
    image: "assets/images/veiculos/moto-30.webp"
  },
  {
    id: "moto-31", brand: "Honda", model: "Falcon 400",
    version: "400", yearFab: 2008, yearModel: 2008, km: 60000,
    transmission: "Manual", fuel: "Gasolina", category: "Trail",
    price: 18990, color: "Preta",
    description: "Falcon 400 anunciada como revisada, com escape Dore.",
    image: "assets/images/veiculos/moto-31.webp"
  },
  {
    id: "moto-32", brand: "Honda", model: "CG 160 Titan",
    version: "160", yearFab: 2020, yearModel: 2020, km: 40000,
    transmission: "Manual", fuel: "Flex", category: "Street",
    price: 16990, color: "Branca",
    description: "Titan edição especial, revisada e bem conservada, conforme anúncio.",
    image: "assets/images/veiculos/moto-32.webp"
  },
  {
    id: "moto-33", brand: "Suzuki", model: "GSR 750 ABS",
    version: "750", yearFab: 2015, yearModel: 2015, km: 36000,
    transmission: "Manual", fuel: "Gasolina", category: "Esportiva",
    price: 42900, color: "Azul",
    description: "Anunciada com pneus Michelin novos, escape esportivo, slider e amortecedor de direção.",
    image: "assets/images/veiculos/moto-33.webp"
  },
  {
    id: "moto-34", brand: "Honda", model: "Twister 300",
    version: "300", yearFab: 2025, yearModel: 2025, km: 3400,
    transmission: "Manual", fuel: "Flex", category: "Street",
    price: 27800, color: "Azul",
    description: "Twister 300 com ABS, manual e chave reserva, segundo o anúncio.",
    image: "assets/images/veiculos/moto-34.webp"
  },
  {
    id: "moto-35", brand: "Honda", model: "Biz 125 EX",
    version: "125", yearFab: 2026, yearModel: 2026, km: 12000,
    transmission: "Manual", fuel: "Flex", category: "Urbana",
    price: 18800, color: "Branca",
    description: "Biz 125 EX revisada, com manual e chave reserva, conforme anúncio.",
    image: "assets/images/veiculos/moto-35.webp"
  },
  {
    id: "moto-36", brand: "Honda", model: "Sahara Adventure",
    version: "300", yearFab: 2026, yearModel: 2026, km: 1500,
    transmission: "Manual", fuel: "Gasolina", category: "Trail",
    price: 36800, color: "Cinza",
    description: "Sahara Adventure anunciada com um proprietário e garantia Honda.",
    image: "assets/images/veiculos/moto-36.webp"
  },
  {
    id: "moto-37", brand: "Honda", model: "Falcon 400",
    version: "400", yearFab: 2002, yearModel: 2002, km: 70000,
    transmission: "Manual", fuel: "Gasolina", category: "Trail",
    price: 15500, color: "Cinza",
    description: "Falcon 400 anunciada com pintura nova, revisão e pneus bons.",
    image: "assets/images/veiculos/moto-37.webp"
  },
  {
    id: "moto-38", brand: "Honda", model: "Biz 125",
    version: "125", yearFab: 2023, yearModel: 2023, km: 21000,
    transmission: "Manual", fuel: "Flex", category: "Urbana",
    price: 17300, color: "Branca",
    description: "Biz 125 revisada, com pneus bons e documentação em dia, conforme anúncio.",
    image: "assets/images/veiculos/moto-38.webp"
  },
  {
    id: "moto-39", brand: "Honda", model: "NXR 160 Bros",
    version: "160", yearFab: 2023, yearModel: 2023, km: 14000,
    transmission: "Manual", fuel: "Flex", category: "Trail",
    price: 21500, color: "Vermelha",
    description: "Bros 160 anunciada como revisada e com baixa quilometragem.",
    image: "assets/images/veiculos/moto-39.webp"
  },
  {
    id: "moto-40", brand: "Yamaha", model: "XJ6",
    version: "600", yearFab: 2012, yearModel: 2012, km: 41000,
    transmission: "Manual", fuel: "Gasolina", category: "Esportiva",
    price: 37500, color: "Vermelha",
    description: "XJ6 anunciada como revisada, com pneus bons e documentação em dia.",
    image: "assets/images/veiculos/moto-40.webp"
  },
  {
    id: "moto-41", brand: "Honda", model: "Twister 250 ABS",
    version: "250", yearFab: 2022, yearModel: 2022, km: 40000,
    transmission: "Manual", fuel: "Flex", category: "Street",
    price: 21900, color: "Vermelha",
    description: "Twister 250 ABS, anunciada com dois proprietários.",
    image: "assets/images/veiculos/moto-41.webp"
  },
  {
    id: "moto-42", brand: "Honda", model: "Biz 125 EX",
    version: "125", yearFab: 2025, yearModel: 2025, km: 3000,
    transmission: "Manual", fuel: "Flex", category: "Urbana",
    price: 18500, color: "Vermelha",
    description: "Biz 125 EX seminova, único dono e com chave reserva, conforme anúncio.",
    image: "assets/images/veiculos/moto-42.webp"
  },
  {
    id: "moto-43", brand: "Honda", model: "XRE 300 Adventure",
    version: "300", yearFab: 2022, yearModel: 2022, km: 30000,
    transmission: "Manual", fuel: "Gasolina", category: "Trail",
    price: 30800, color: "Cinza",
    description: "XRE 300 Adventure anunciada como revisada e com pneus bons.",
    image: "assets/images/veiculos/moto-43.webp"
  },
  {
    id: "moto-44", brand: "Yamaha", model: "XJ6 F",
    version: "600", yearFab: 2013, yearModel: 2013, km: 69000,
    transmission: "Manual", fuel: "Gasolina", category: "Esportiva",
    price: 36500, color: "Branca",
    description: "XJ6 F anunciada com óleo trocado, pneus bons e escapes esportivo e original.",
    image: "assets/images/veiculos/moto-44.webp"
  }
];


/* =====================================================
   CARROSSEL
   Requer os IDs:
   vehicleCarouselTrack, carouselPrev, carouselNext,
   carouselDots e carouselCounter.
   ===================================================== */

(() => {
  const track = document.getElementById("vehicleCarouselTrack");
  const prev = document.getElementById("carouselPrev");
  const next = document.getElementById("carouselNext");
  const dots = document.getElementById("carouselDots");
  const counter = document.getElementById("carouselCounter");
  const wrapper = document.getElementById("vehicleCarousel");

  if (!track || !prev || !next || !dots || !wrapper) {
    console.error("Carrossel: confira os IDs no HTML.");
    return;
  }

  const WHATSAPP = "5518991566383";
  const PLACEHOLDER = "assets/images/vehicle-placeholder.svg";
  const INTERVAL = 5000;

  let index = 0;
  let timer = null;
  let touchStart = 0;
  let isTouching = false;

  const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]);
  }

  function money(value) {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0
    });
  }

  function visibleCount() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 850) return 2;
    return 3;
  }

  function maxIndex() {
    return Math.max(0, VEHICLES.length - visibleCount());
  }

  function getTitle(moto) {
    return [moto.brand, moto.model, moto.version]
      .filter(Boolean)
      .join(" ");
  }

  function getDetails(moto) {
    const year = moto.yearModel || moto.yearFab;
    const km = Number.isFinite(moto.km)
      ? `${moto.km.toLocaleString("pt-BR")} km`
      : "";

    return [
      year,
      km,
      moto.transmission,
      moto.fuel
    ].filter(Boolean).join(" · ");
  }

  function cardHTML(moto, i) {
    const title = getTitle(moto);
    const year = moto.yearModel || moto.yearFab || "";

    const message = encodeURIComponent(
      `Olá, Caroli Motors! Tenho interesse na ${title}` +
      `${year ? `, ano ${year}` : ""}, por ${money(moto.price)}. ` +
      "Gostaria de mais informações e fotos."
    );

    return `
      <article class="vehicle-card">
        <img
          class="vehicle-image"
          src="${escapeHTML(moto.image || PLACEHOLDER)}"
          alt="${escapeHTML(title)}"
          loading="${i < 3 ? "eager" : "lazy"}"
          decoding="async"
          onerror="this.onerror=null;this.src='${PLACEHOLDER}'"
        >

        <div class="vehicle-info">
          <span class="vehicle-brand">
            ${escapeHTML(moto.brand)}
          </span>

          <h3 class="vehicle-title">
            ${escapeHTML(title)}
          </h3>

          <p class="vehicle-description">
            ${escapeHTML(getDetails(moto) || "Consulte os detalhes")}
          </p>

          <p class="vehicle-description">
            ${escapeHTML(moto.category || "Veículo")}
            · Valparaíso, SP
          </p>

          <p class="vehicle-description">
            ${escapeHTML(moto.description || "")}
          </p>

          <div class="vehicle-price">${money(moto.price)}</div>

          <a
            class="vehicle-contact"
            href="https://wa.me/${WHATSAPP}?text=${message}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com a loja
          </a>
        </div>
      </article>
    `;
  }

  function render() {
    track.innerHTML = VEHICLES.map(cardHTML).join("");

    dots.innerHTML = VEHICLES.map((_, i) => `
      <button
        class="carousel-dot"
        type="button"
        data-index="${i}"
        aria-label="Ver veículo ${i + 1}"
      ></button>
    `).join("");

    update();
  }

  function update() {
    const cards = track.querySelectorAll(".vehicle-card");
    if (!cards.length) return;

    index = Math.min(index, maxIndex());
    index = Math.max(0, index);

    const width = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;

    track.style.transform =
      `translate3d(-${index * (width + gap)}px, 0, 0)`;

    dots.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
      dot.setAttribute("aria-current", i === index ? "true" : "false");
    });

    if (counter) {
      counter.textContent = `${index + 1} / ${VEHICLES.length}`;
    }

    prev.disabled = index === 0;
    next.disabled = index >= maxIndex();

    prev.setAttribute("aria-label", "Ver veículo anterior");
    next.setAttribute("aria-label", "Ver próximo veículo");
  }

  function advance() {
    index = index >= maxIndex() ? 0 : index + 1;
    update();
  }

  function goBack() {
    index = index <= 0 ? maxIndex() : index - 1;
    update();
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function play() {
    stop();

    if (
      motionPreference.matches ||
      document.hidden ||
      VEHICLES.length <= visibleCount()
    ) return;

    timer = setInterval(() => {
      if (
        !wrapper.matches(":hover") &&
        !wrapper.contains(document.activeElement) &&
        !isTouching
      ) {
        advance();
      }
    }, INTERVAL);
  }

  prev.addEventListener("click", () => {
    goBack();
    play();
  });

  next.addEventListener("click", () => {
    advance();
    play();
  });

  dots.addEventListener("click", event => {
    const dot = event.target.closest(".carousel-dot");
    if (!dot) return;

    index = Math.min(Number(dot.dataset.index), maxIndex());
    update();
    play();
  });

  wrapper.addEventListener("mouseenter", stop);
  wrapper.addEventListener("mouseleave", play);
  wrapper.addEventListener("focusin", stop);

  wrapper.addEventListener("focusout", event => {
    if (!wrapper.contains(event.relatedTarget)) play();
  });

  wrapper.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
      advance();
      play();
    }

    if (event.key === "ArrowLeft") {
      goBack();
      play();
    }
  });

  wrapper.addEventListener("touchstart", event => {
    touchStart = event.changedTouches[0].clientX;
    isTouching = true;
    stop();
  }, { passive: true });

  wrapper.addEventListener("touchend", event => {
    const difference =
      event.changedTouches[0].clientX - touchStart;

    if (Math.abs(difference) > 45) {
      difference < 0 ? advance() : goBack();
    }

    isTouching = false;
    play();
  }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    document.hidden ? stop() : play();
  });

  window.addEventListener("resize", update);

  if (motionPreference.addEventListener) {
    motionPreference.addEventListener("change", play);
  }

  render();
  play();
})();
