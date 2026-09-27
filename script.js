/* =================================
   EXPLORE COLLECTION BUTTON
================================= */

const viewPaintings = document.getElementById("viewPaintings");

viewPaintings.addEventListener("click", function () {
    document.getElementById("paintings").scrollIntoView({
        behavior: "smooth"
    });
});


/* =================================
   PAINTING DETAILS MODAL
================================= */

const detailButtons = document.querySelectorAll(".details-btn");

const modal = document.getElementById("paintingModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMedium = document.getElementById("modalMedium");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

const orderButton = document.getElementById("orderButton");


detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const title = button.dataset.title;
        const image = button.dataset.image;
        const medium = button.dataset.medium;
        const price = button.dataset.price;
        const description = button.dataset.description;


        /* Put information inside modal */

        modalTitle.textContent = title;

        modalImage.src = image;

        modalMedium.textContent = medium;

        modalPrice.textContent = price;

        modalDescription.textContent = description;


        /* Email button */

        orderButton.href =
            "mailto:your@email.com?subject=Inquiry about " +
            encodeURIComponent(title);


        /* Show modal */

        modal.style.display = "block";

        document.body.style.overflow = "hidden";
    });

});


/* =================================
   CLOSE MODAL
================================= */

closeModal.addEventListener("click", function () {

    modal.style.display = "none";

    document.body.style.overflow = "auto";

});


/* =================================
   CLOSE MODAL BY CLICKING OUTSIDE
================================= */

window.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.style.display = "none";

        document.body.style.overflow = "auto";

    }

});


/* =================================
   CLOSE MODAL WITH ESC KEY
================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.style.display = "none";

        document.body.style.overflow = "auto";

    }

});


/* =================================
   SEARCH + MEDIUM FILTER
================================= */

const searchInput = document.getElementById("searchInput");

const mediumFilter = document.getElementById("mediumFilter");

const paintingCards =
    document.querySelectorAll(".painting-card");


function filterPaintings() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedMedium =
        mediumFilter.value;


    paintingCards.forEach(function (card) {

        const title =
            card.querySelector("h3")
                .textContent
                .toLowerCase();


        const medium =
            card.dataset.medium;


        const matchesSearch =
            title.includes(searchText);


        const matchesMedium =
            selectedMedium === "all" ||
            medium === selectedMedium;


        if (matchesSearch && matchesMedium) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


searchInput.addEventListener(
    "input",
    filterPaintings
);


mediumFilter.addEventListener(
    "change",
    filterPaintings
);


/* =================================
   CONTACT FORM
================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        formMessage.textContent =
            "Thank you! Your message has been received. I will get back to you soon.";


        contactForm.reset();

    }
);