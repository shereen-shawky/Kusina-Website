document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Solid white background
            navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.boxShadow = "none";
        }
        });
    }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const rows = document.querySelectorAll(".scroll-item");

        function handleScroll() {
            rows.forEach((row, index) => {
                const rect = row.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setTimeout(() => {
                        row.classList.add("show");
                    }, index * 100); 
                }
            });
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
    });

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Solid white background
            navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.boxShadow = "none";
        }
        });
    }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const rows = document.querySelectorAll(".scroll-item");

        function handleScroll() {
            rows.forEach((row, index) => {
                const rect = row.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setTimeout(() => {
                        row.classList.add("show");
                    }, index * 100); 
                }
            });
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
    });
