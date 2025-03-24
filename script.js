document.addEventListener("DOMContentLoaded", function () {
    const languageBtn = document.getElementById("language-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const selectedLanguage = document.getElementById("english");

    languageBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", function () {
            selectedLanguage.innerHTML = `<p>${this.dataset.lang}</p>`;
            dropdownMenu.style.display = "none"; 
        });
    });

    document.addEventListener("click", function (event) {
        if (!languageBtn.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
