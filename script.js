
// MENU NAVIGASI MOBILE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    menuToggle.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";
});

// TUTUP MENU SETELAH LINK DIKLIK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});

// ANIMASI SAAT SCROLL
function revealElements() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// TAHUN OTOMATIS
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// THEME COLOR SWITCHER

const themeButton = document.getElementById("themeButton");
const themeOptions = document.getElementById("themeOptions");

const themes = {
    blue: {
        primary: "#00d9ff",
        secondary: "#7565ff"
    },

    purple: {
        primary: "#c084fc",
        secondary: "#9333ea"
    },

    green: {
        primary: "#00e676",
        secondary: "#00a86b"
    },

    orange: {
        primary: "#ff9100",
        secondary: "#ff4d00"
    },

    pink: {
        primary: "#ff4fa3",
        secondary: "#c026d3"
    }
};

// BUKA MENU TEMA
themeButton.addEventListener("click", () => {
    themeOptions.classList.toggle("show");
});

// GANTI WARNA TEMA
document.querySelectorAll(".color-option").forEach(button => {
    button.addEventListener("click", () => {

        const selectedTheme = button.dataset.theme;
        const colors = themes[selectedTheme];

        if (!colors) return;

        document.documentElement.style.setProperty(
            "--primary", colors.primary
        );

        document.documentElement.style.setProperty(
            "--secondary", colors.secondary
        );

        // SIMPAN TEMA
        localStorage.setItem("selectedTheme", selectedTheme);

        themeOptions.classList.remove("show");
    });
});

// AMBIL TEMA YANG TERSIMPAN
const savedTheme = localStorage.getItem("selectedTheme");

if (savedTheme && themes[savedTheme]) {
    document.documentElement.style.setProperty(
        "--primary", themes[savedTheme].primary
    );

    document.documentElement.style.setProperty(
        "--secondary", themes[savedTheme].secondary
    );
}

// TUTUP MENU JIKA KLIK DI LUAR
document.addEventListener("click", (event) => {
    if (
        !themeButton.contains(event.target) &&
        !themeOptions.contains(event.target)
    ) {
        themeOptions.classList.remove("show");
    }
});

// DARK MODE DAN LIGHT MODE

const modeToggle = document.getElementById("modeToggle");

// MEMBACA MODE YANG TERSIMPAN
const savedMode = localStorage.getItem("portfolioMode");

// MENGATUR MODE AWAL
if (savedMode === "light") {
    document.body.classList.add("light-mode");
    modeToggle.textContent = "☀️";
} else {
    document.body.classList.remove("light-mode");
    modeToggle.textContent = "🌙";
}

// FUNGSI GANTI MODE
modeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        modeToggle.textContent = "☀️";

        localStorage.setItem("portfolioMode", "light");

    } else {

        modeToggle.textContent = "🌙";

        localStorage.setItem("portfolioMode", "dark");
    }

});
