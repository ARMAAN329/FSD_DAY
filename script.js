const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const jobCards = document.querySelectorAll(".job-card");


// SEARCH
searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    jobCards.forEach(function (card) {

        const jobText = card.innerText.toLowerCase();

        if (jobText.includes(searchValue)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});


// CATEGORY FILTER
categoryFilter.addEventListener("change", function () {

    const selectedCategory = categoryFilter.value;

    jobCards.forEach(function (card) {

        const cardCategory = card.dataset.category;

        if (
            selectedCategory === "all" ||
            selectedCategory === cardCategory
        ) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});