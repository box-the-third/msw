(function () {
  "use strict";

  /* ---------- Sticky header shadow ---------- */
  var header = document.getElementById("site-header");
  function onScroll() {
    if (window.scrollY > 8) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  var navOverlay = document.getElementById("navOverlay");

  function closeNav() {
    mainNav.classList.remove("is-open");
    navOverlay.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  function openNav() {
    mainNav.classList.add("is-open");
    navOverlay.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.contains("is-open");
    isOpen ? closeNav() : openNav();
  });
  navOverlay.addEventListener("click", closeNav);

  /* Close mobile nav + smooth scroll on link click */
  document.querySelectorAll('.main-nav a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      var target = id && id.length > 1 ? document.querySelector(id) : null;
      if (target) {
        e.preventDefault();
        closeNav();
        var y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        closeNav();
      }
    });
  });

  /* Escape key closes mobile nav */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  /* ---------- Dropdown menu (Resources) ---------- */
  document.querySelectorAll(".has-dropdown > button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var parent = btn.parentElement;
      var isOpen = parent.getAttribute("data-open") === "true";
      document.querySelectorAll(".has-dropdown").forEach(function (d) {
        d.setAttribute("data-open", "false");
        d.querySelector("button").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        parent.setAttribute("data-open", "true");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".has-dropdown").forEach(function (d) {
        d.setAttribute("data-open", "false");
        d.querySelector("button").setAttribute("aria-expanded", "false");
      });
    }
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Brochure placeholder ---------- */
  ["brochureLink", "footerBrochureLink"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        alert("The company brochure will be available here once a downloadable file is provided.");
      });
    }
  });

  /* =====================================================
     PACKAGE COMPARISON DATA
     Single source of truth rendered into both the desktop
     table and the mobile accordion cards.
     ===================================================== */
  var TIERS = ["Basic", "Silver", "Gold", "Platinum"];
  var FEATURES = [
    { name: "Online Portal — Basic", tiers: [1, 1, 1, 1] },
    { name: "Online Portal — Premium", tiers: [0, 1, 1, 1] },
    { name: "Wellness Tips", tiers: [1, 1, 1, 1] },
    { name: "Wellness Chat Room", tiers: [1, 1, 1, 1] },
    { name: "Wellness Report", tiers: [0, 1, 1, 1] },
    { name: "Medical Screen", tiers: [0, 1, 1, 1] },
    { name: "Basic Blood Test (glucose, cholesterol)", tiers: [0, 1, 1, 1] },
    { name: "Advanced Blood Test (kidney function, lipid profile, CBC)", tiers: [0, 0, 1, 1] },
    { name: "Comprehensive Blood Test (vitamin D, PSA for men 50+)", tiers: [0, 0, 0, 1] },
    { name: "Bone Densitometry", tiers: [0, 0, 0, 1] },
    { name: "Cardioscan — Basic Metabolic Rate", tiers: [0, 1, 1, 1] },
    { name: "Cardioscan — Comprehensive (cardiac stress test)", tiers: [0, 0, 0, 1] },
    { name: "Group Counseling", tiers: [0, 1, 1, 1] },
    { name: "One-to-One Counseling", tiers: [0, 0, 0, 1] },
    { name: "Individual Fitness Program", tiers: [0, 0, 0, 1] },
    { name: "Activity Tracker", tiers: [0, 0, 1, 1] },
    { name: "Sleep Tracker", tiers: [0, 0, 0, 1] },
    { name: "Ongoing Visits — 6 Visits", tiers: [0, 0, 0, 1] },
    { name: "Monthly Challenges &amp; Walkathon", tiers: [1, 1, 1, 1] },
    { name: "Genetic Testing", tiers: [0, 0, 0, 1] }
  ];

  var YES = '<span class="icon-yes" aria-label="Included">&#10003;</span>';
  var NO = '<span class="icon-no" aria-hidden="true">&#8212;</span><span class="visually-hidden">Not included</span>';

  function renderTable() {
    var tbody = document.getElementById("compareTableBody");
    if (!tbody) return;
    var rows = FEATURES.map(function (f) {
      var cells = f.tiers.map(function (v) { return "<td>" + (v ? YES : NO) + "</td>"; }).join("");
      return "<tr><td>" + f.name + "</td>" + cells + "</tr>";
    });
    tbody.innerHTML = rows.join("");
  }

  function renderCards() {
    var wrap = document.getElementById("packageCards");
    if (!wrap) return;
    var html = TIERS.map(function (tier, i) {
      var items = FEATURES.map(function (f) {
        return "<li><span>" + f.name + "</span>" + (f.tiers[i] ? YES : NO) + "</li>";
      }).join("");
      return (
        '<details class="package-card"' + (i === 1 ? " open" : "") + ">" +
        "<summary>" + tier + "</summary>" +
        "<ul>" + items + "</ul>" +
        "</details>"
      );
    }).join("");
    wrap.innerHTML = html;
  }

  renderTable();
  renderCards();

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  function setError(row, hasError) {
    row.classList.toggle("has-error", hasError);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var name = document.getElementById("cf-name");
      var email = document.getElementById("cf-email");
      var message = document.getElementById("cf-message");
      var emailRegex = /^[\w.\-]+@([\w\-]+\.)+[\w\-]{2,}$/;

      setError(name.closest(".form-row"), false);
      setError(email.closest(".form-row"), false);
      setError(message.closest(".form-row"), false);

      if (!name.value.trim()) { setError(name.closest(".form-row"), true); valid = false; }
      if (!emailRegex.test(email.value.trim())) { setError(email.closest(".form-row"), true); valid = false; }
      if (!message.value.trim()) { setError(message.closest(".form-row"), true); valid = false; }

      status.classList.remove("is-success", "is-error");

      if (!valid) {
        status.textContent = "Please correct the highlighted fields and try again.";
        status.classList.add("is-error");
        return;
      }

      // NOTE: No live backend endpoint is configured for this static build.
      // Replace this block with a real submission (fetch/AJAX to your
      // backend, or a form service) once an endpoint is available.
      status.textContent = "Thanks — your message has been prepared. Connect a backend endpoint to deliver it to our team.";
      status.classList.add("is-success");
      form.reset();
    });
  }
})();