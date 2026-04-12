/**
 * Shared Theme and Language Management
 * This file ensures consistent language and theme preferences across all pages
 */

// Initialize theme and language on page load
function initializeThemeAndLanguage() {
    // Restore language preference
    const savedLang = localStorage.getItem("lang") || "en";
    if (savedLang === "ar") {
        document.body.classList.add("rtl");
    }

    // Restore theme preference
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
}

// Toggle language and save preference
function toggleLanguage() {
    const isAr = document.body.classList.toggle("rtl");
    localStorage.setItem("lang", isAr ? "ar" : "en");
    
    // Update language button text if it exists
    const langBtn = document.getElementById("langBtn") || document.getElementById("langToggle");
    if (langBtn) {
        langBtn.innerText = isAr ? "English" : "العربية";
        if (langBtn.textContent === "AR" || langBtn.textContent === "EN") {
            langBtn.innerText = isAr ? "EN" : "AR";
        }
    }
    
    return isAr;
}

// Toggle theme and save preference
function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    
    // Update theme button icon if it exists
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
        const icon = themeBtn.querySelector("i");
        if (icon) {
            if (isLight) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            } else {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        }
    }
    
    return isLight;
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", initializeThemeAndLanguage);
