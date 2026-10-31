/* =========================================================
   Patil Dhaba — page behaviour
   Turning copper plate, round specials, thali diagram, one long
   menu with a section index (sheet on phones), search, veg filter,
   Marathi / English, copy buttons, floating pill.
   Data: js/menu-data.js (SPECIALS, THALIS, MENU). Reviews: REVIEWS below.
   ========================================================= */
(function () {
  "use strict";

  // Real Google reviews only. Leave empty until the owner has some; the section stays hidden.
  // Format: { name: "Customer name", stars: 5, text: "What they wrote", when: "Oct 2026" }
  const REVIEWS = [];

  const root = document.documentElement;
  const body = document.body;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const MR = "०१२३४५६७८९";
  const SIZE = { P: { mr: "प्लेट", en: "Plate" }, H: { mr: "हाफ", en: "Half" }, F: { mr: "फुल", en: "Full" } };
  let lang = "mr", food = "all", query = "";

  const toMr = (s) => String(s).replace(/\d/g, (d) => MR[d]);
  const num = (n) => { const s = Number(n).toLocaleString("en-IN"); return lang === "mr" ? toMr(s) : s; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const L = (mr, en) => (lang === "mr" ? mr : en);
  function priceHTML(p) {
    if (typeof p === "number") return "₹" + num(p);
    return "₹" + p.map((x) => num(x[1])).join(" / ") + "<small>" + p.map((x) => (x[0] ? SIZE[x[0]][lang] : L("रेग्युलर", "Regular"))).join(" / ") + "</small>";
  }

  /* ---------- fonts: show hero text once they are in (max 2.5 s) ---------- */
  const showText = () => root.classList.add("fonts-in");
  const sheetLink = document.querySelector('link[href*="fonts.googleapis.com/css2"]');
  new Promise((res) => {
    if (!sheetLink || sheetLink.media === "all") return res();
    sheetLink.addEventListener("load", res, { once: true });
    sheetLink.addEventListener("error", res, { once: true });
  })
    .then(() => (document.fonts && document.fonts.load ? Promise.all([document.fonts.load('1em "Tiro Devanagari Marathi"', "पाटील ढाबा"), document.fonts.load('1em "Mukta"', "मेनू")]) : null))
    .catch(() => {})
    .then(showText);
  setTimeout(showText, 2500);

  /* ---------- header + pill ---------- */
  const header = $(".top"), pill = $("#pill");
  const setHH = () => root.style.setProperty("--hh", header.offsetHeight + "px");
  setHH();
  window.addEventListener("resize", setHH);
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 30);
    if (pill) pill.classList.toggle("show", y > window.innerHeight * 0.5);
  }

  /* ---------- turning plate ---------- */
  const plates = $$(".plate-in img"), dots = $$("#dots button"), nowEl = $("#now");
  let cur = 0, timer = null;
  function ensure(img) {
    if (img && img.dataset.src) { img.src = img.dataset.src; img.removeAttribute("data-src"); }
  }
  function cap() {
    const im = plates[cur];
    if (nowEl && im) nowEl.innerHTML = L("आत्ता ताटात: ", "On the plate: ") + "<b>" + esc(im.dataset[lang]) + "</b> · ₹" + num(im.dataset.price);
  }
  function show(i) {
    i = (i + plates.length) % plates.length;
    ensure(plates[i]); ensure(plates[(i + 1) % plates.length]);
    plates[cur].classList.remove("on"); dots[cur] && dots[cur].classList.remove("on");
    cur = i;
    plates[cur].classList.add("on"); dots[cur] && dots[cur].classList.add("on");
    dots.forEach((d, k) => d.setAttribute("aria-pressed", k === cur));
    cap();
  }
  function play() { clearInterval(timer); if (!reduce) timer = setInterval(() => show(cur + 1), 5000); }
  dots.forEach((d, i) => d.addEventListener("click", () => { show(i); play(); }));
  document.addEventListener("visibilitychange", () => (document.hidden ? clearInterval(timer) : play()));

  /* ---------- specials ---------- */
  const PLATE = { gavthi: "plate_gavthi", surmai_special: "plate_surmai", pomfret: "plate_paplet", prawns_special: "plate_prawns" };
  function renderSpecials() {
    const top = SPECIALS.slice(0, 4), rest = SPECIALS.slice(4);
    $("#swipe").innerHTML = top.map((d, i) => `
      <article class="sp reveal" style="--i:${i}">
        <div class="rim"><img src="img/${PLATE[d.img] || d.img}.jpg" alt="${esc(d.en)}" loading="lazy" width="240" height="240"></div>
        <span class="tag">${esc(d.tag ? d.tag[lang] : "")}</span>
        <h3>${esc(L(d.mr, d.en))}</h3>
        <span class="sub">${esc(d.sub[lang])}</span>
        <span class="price-tag">${lang === "mr" ? toMr(d.pr) : d.pr}</span>
      </article>`).join("");
    $("#moreSp").innerHTML = rest.map((d) => `<span>${esc(L(d.mr, d.en))}<b>${lang === "mr" ? toMr(d.pr) : d.pr}</b></span>`).join("");
  }

  /* ---------- thali ---------- */
  const PARTS = [
    [60, 22, "चिकन मालवणी रस्सा", "Chicken Malvani rassa"], [32, 15, "तिखट रस्सा", "Spicy rassa"],
    [20, 37, "सोलकढी", "Solkadhi"], [43, 57, "भात", "Rice"], [76, 62, "चपाती / भाकरी", "Chapati / bhakri"],
    [18, 64, "कांदा आणि लिंबू", "Onion and lime"], [30, 85, "सुकं", "Sukka"], [48, 91, "हिरवी चटणी", "Green chutney"],
  ];
  function renderThali() {
    $("#pins").innerHTML = PARTS.map((p, i) => `<span class="pin" style="left:${p[0]}%;top:${p[1]}%;--i:${i}" aria-hidden="true">${num(i + 1)}</span>`).join("");
    $("#legend").innerHTML = PARTS.map((p, i) => `<li><i>${num(i + 1)}</i>${esc(L(p[2], p[3]))}</li>`).join("");
    $("#thaliList").innerHTML = THALIS.map((t) => `<li class="lead-row"><span class="nm">${esc(L(t[0], t[1]))}</span><span class="dots-fill"></span><span class="p">₹${num(t[2])}</span></li>`).join("");
  }

  /* ---------- menu ---------- */
  const cats = () => MENU.filter((s) => food === "all" || s.kind === food || s.kind === "all");
  const hit = (it) => !query || it[0].includes(query) || it[1].toLowerCase().includes(query.toLowerCase());
  const kind = (k) => (k === "veg" ? L("शाकाहारी", "Vegetarian") : k === "nv" ? L("मांसाहारी", "Non-vegetarian") : L("सर्वांसाठी", "For everyone"));
  const row = (it) => `<li class="lead-row"><span class="nm">${esc(L(it[0], it[1]))}<small>${esc(L(it[1], it[0]))}</small></span><span class="dots-fill"></span><span class="p">${priceHTML(it[2])}</span></li>`;
  function renderMenu() {
    const shown = cats().map((c) => ({ c, its: c.items.filter(hit) })).filter((g) => g.its.length);
    const total = MENU.reduce((a, s) => a + s.items.length, 0);
    const found = shown.reduce((a, g) => a + g.its.length, 0);
    $("#menuList").innerHTML = shown.length
      ? shown.map(({ c, its }) => `
        <section class="msec ${c.kind}" id="m-${c.id}" aria-labelledby="h-${c.id}">
          <div class="msec-h"><span class="rim"><img src="img/${c.img}.jpg" alt="" loading="lazy" width="56" height="56"></span>
            <div><h3 id="h-${c.id}">${esc(L(c.mr, c.en))}</h3><span class="kind">${c.kind === "all" ? "" : '<i class="vdot"></i>'}${kind(c.kind)} · ${num(its.length)} ${L("पदार्थ", "dishes")}</span></div></div>
          <ul class="items">${its.map(row).join("")}</ul>
        </section>`).join("")
      : `<div class="empty">${L("“" + esc(query) + "” साठी काही सापडलं नाही. दुसरं नाव शोधा.", "Nothing matches “" + esc(query) + "”. Try another dish name.")}</div>`;
    const idx = shown.map(({ c, its }) => `<li><a href="#m-${c.id}" data-id="${c.id}">${esc(L(c.mr, c.en))}<small>${num(its.length)}</small></a></li>`).join("");
    $("#indexList").innerHTML = idx;
    $("#sheetList").innerHTML = idx;
    $("#menuCount").textContent = query
      ? L(`${toMr(found)} पदार्थ सापडले`, `${found} dishes found`)
      : L(`${toMr(total)} पदार्थ — व्हेज, नॉनव्हेज, सी फूड, थाळी आणि चायनीज.`, `${total} dishes: veg, non-veg, seafood, thalis and Chinese.`);
    spy();
  }

  /* scrollspy for the index */
  let spyIO = null;
  function spy() {
    if (spyIO) spyIO.disconnect();
    if (!("IntersectionObserver" in window)) return;
    spyIO = new IntersectionObserver((ents) => {
      ents.forEach((e) => {
        if (!e.isIntersecting) return;
        const id = e.target.id.slice(2);
        $$("#indexList a").forEach((a) => a.classList.toggle("on", a.dataset.id === id));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    $$(".msec").forEach((s) => spyIO.observe(s));
  }

  /* phone sheet */
  const sheet = $("#sheet");
  const openSheet = () => { sheet.inert = false; sheet.classList.add("open"); const a = $("#sheetList a"); a && a.focus(); };
  const closeSheet = () => { if (!sheet.classList.contains("open")) return; sheet.classList.remove("open"); sheet.inert = true; $("#sheetBtn").focus({ preventScroll: true }); };
  $("#sheetBtn").addEventListener("click", () => { readyMenu(); openSheet(); });
  $("#sheetClose").addEventListener("click", closeSheet);
  sheet.addEventListener("click", (e) => {
    if (e.target === sheet) return closeSheet();
    const a = e.target.closest("a");
    if (a) { sheet.classList.remove("open"); sheet.inert = true; }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSheet(); });

  $$(".vn button").forEach((b) => b.addEventListener("click", () => {
    food = b.dataset.f; menuReady = true;
    $$(".vn button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderMenu();
  }));
  let qt;
  $("#q").addEventListener("input", (e) => { clearTimeout(qt); qt = setTimeout(() => { query = e.target.value.trim(); menuReady = true; renderMenu(); }, 120); });

  /* ---------- reviews (only real ones) ---------- */
  function renderReviews() {
    const sec = $("#reviews");
    if (!REVIEWS.length) { sec.hidden = true; return; }
    sec.hidden = false;
    $("#rvGrid").innerHTML = REVIEWS.map((r) => `<figure class="rv"><span class="stars">${"★".repeat(r.stars)}</span><p>${esc(r.text)}</p><small>${esc(r.name)} · ${esc(r.when)} · Google</small></figure>`).join("");
  }

  /* ---------- reveal on scroll ---------- */
  let io = null;
  function observe() {
    const els = $$(".reveal:not(.in), .diagram:not(.in)");
    if (reduce || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    if (!io) io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- copy phone numbers (instant feedback) ---------- */
  $$(".copy").forEach((btn) => {
    const label = btn.innerHTML; let t = null;
    btn.addEventListener("click", () => {
      const el = btn.closest(".person").querySelector(".num");
      try { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); } catch (e) {}
      btn.textContent = L("निवडला", "Selected");
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(btn.dataset.num).then(() => (btn.textContent = L("कॉपी झाला", "Copied")), () => {});
      clearTimeout(t); t = setTimeout(() => (btn.innerHTML = label), 2000);
    });
  });

  /* ---------- language ---------- */
  // The long menu (166 lines) is drawn only when the visitor gets near it, or after 2.5 s,
  // so the first screen is not held up.
  let menuReady = false;
  function readyMenu() { if (menuReady) return; menuReady = true; renderMenu(); observe(); }
  const menuSec = document.getElementById("menu");
  if ("IntersectionObserver" in window) {
    const mio = new IntersectionObserver((e) => { if (e.some((x) => x.isIntersecting)) { mio.disconnect(); readyMenu(); } }, { rootMargin: "1200px 0px" });
    mio.observe(menuSec);
  }
  setTimeout(readyMenu, 2500);
  window.addEventListener("hashchange", readyMenu);
  if (location.hash && location.hash.indexOf("#m") === 0) readyMenu();

  function renderAll() { renderSpecials(); renderThali(); if (menuReady) renderMenu(); renderReviews(); cap(); observe(); }
  function setLang(l) {
    lang = l; body.dataset.lang = l; root.lang = l === "mr" ? "mr" : "en";
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.l === l));
    try { localStorage.setItem("patil-lang", l); } catch (e) {}
    renderAll();
    $$(".sp.reveal").forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in"); });
  }
  $$(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.l)));

  $$('a[href="#menu"]').forEach((a) => a.addEventListener("click", readyMenu));
  let ticking = false;
  window.addEventListener("scroll", () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { onScroll(); ticking = false; }); }, { passive: true });

  let saved = "mr";
  try { saved = localStorage.getItem("patil-lang") || "mr"; } catch (e) {}
  setLang(saved === "en" ? "en" : "mr");
  show(0); play(); onScroll();
})();
