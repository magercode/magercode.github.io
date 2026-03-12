const toggleButton = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("sidebarOverlay");

if (!overlay && sidebar) {
    overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    overlay.id = "sidebarOverlay";
    document.body.appendChild(overlay);
}

const setSidebarState = (isOpen) => {
    if (!toggleButton || !sidebar) return;
    sidebar.classList.toggle("open", isOpen);
    document.body.classList.toggle("sidebar-open", isOpen);
    toggleButton.classList.toggle("is-active", isOpen);
    toggleButton.setAttribute("aria-expanded", String(isOpen));
    if (overlay) {
        overlay.classList.toggle("open", isOpen);
    }
};

if (toggleButton && sidebar) {
    toggleButton.addEventListener("click", () => {
        if (window.innerWidth > 1024) {
            setSidebarState(false);
            return;
        }
        const isOpen = sidebar.classList.contains("open");
        setSidebarState(!isOpen);
    });
}

if (overlay) {
    overlay.addEventListener("click", () => setSidebarState(false));
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        setSidebarState(false);
    }
});

document.querySelectorAll(".sidebar .nav-link").forEach((link) => {
    link.addEventListener("click", () => setSidebarState(false));
});

let touchStartX = 0;
let touchStartY = 0;
let trackingSwipe = false;

window.addEventListener("touchstart", (event) => {
    if (!sidebar || event.touches.length !== 1 || window.innerWidth > 1024) return;
    const touch = event.touches[0];
    const isEdgeSwipe = touch.clientX < 40;
    const isSidebarOpen = sidebar.classList.contains("open");
    if (isEdgeSwipe || isSidebarOpen) {
        trackingSwipe = true;
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
    }
});

window.addEventListener("touchmove", (event) => {
    if (!trackingSwipe || !sidebar || event.touches.length !== 1 || window.innerWidth > 1024) return;
    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    const isSidebarOpen = sidebar.classList.contains("open");
    if (!isSidebarOpen && deltaX > 70) {
        setSidebarState(true);
        trackingSwipe = false;
    } else if (isSidebarOpen && deltaX < -70) {
        setSidebarState(false);
        trackingSwipe = false;
    }
});

window.addEventListener("touchend", () => {
    trackingSwipe = false;
});

const currentPath = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.endsWith(currentPath)) {
        link.classList.add("active");
    }
});

const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

if (window.hljs) {
    document.querySelectorAll("pre code").forEach((block) => {
        window.hljs.highlightElement(block);
    });
}

if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\(", right: "\\)", display: false }
        ]
    });
}
