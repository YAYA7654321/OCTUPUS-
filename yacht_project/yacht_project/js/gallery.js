document.addEventListener("DOMContentLoaded", function() {
    const images = [
        { src: "images/IMG-20250604-WA0204.jpg", category: "exterior", alt: "Octopus Yacht Exterior View" },
        { src: "images/IMG-20250604-WA0202.jpg", category: "exterior", alt: "Yacht with Guests" },
        { src: "images/IMG-20250604-WA0182.jpg", category: "cabins", alt: "Luxury Cabin Interior" },
        { src: "images/IMG-20250604-WA0179.jpg", category: "facilities", alt: "Captain Bridge" },
        { src: "images/IMG-20250604-WA0178.jpg", category: "cabins", alt: "Master Bedroom" },
        { src: "images/IMG-20250604-WA0180.jpg", category: "exterior", alt: "Yacht Side View" },
        { src: "images/IMG-20250604-WA0181.jpg", category: "cabins", alt: "Guest Cabin" },
        { src: "images/IMG-20250604-WA0176.jpg", category: "exterior", alt: "Yacht at Sunset" },
        { src: "images/IMG-20250604-WA0177.jpg", category: "exterior", alt: "Yacht Profile" },
        { src: "images/IMG-20250604-WA0154.jpg", category: "cabins", alt: "Luxury Suite" }
    ];

    const imageGrid = document.querySelector(".image-grid");
    const filterButtons = document.querySelectorAll(".filter-button");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const closeButton = lightbox.querySelector(".close-button");
    const prevButton = lightbox.querySelector(".lightbox-nav.prev");
    const nextButton = lightbox.querySelector(".lightbox-nav.next");
    const imageAlt = lightbox.querySelector(".image-alt");
    const imageCount = lightbox.querySelector(".image-count");

    let currentFilteredImages = images;
    let currentImageIndex = 0;

    function renderImages(filterCategory) {
        imageGrid.innerHTML = "";
        currentFilteredImages = images.filter(image => filterCategory === "all" || image.category === filterCategory);

        currentFilteredImages.forEach((image, index) => {
            const imageItem = document.createElement("div");
            imageItem.classList.add("image-item");
            imageItem.innerHTML = `
                <img src="${image.src}" alt="${image.alt}">
                <div class="overlay">
                    <p class="image-title">${image.alt}</p>
                </div>
            `;
            imageItem.addEventListener("click", () => openLightbox(image, index));
            imageGrid.appendChild(imageItem);
        });
    }

    function openLightbox(image, index) {
        currentImageIndex = index;
        lightboxImage.src = image.src;
        imageAlt.textContent = image.alt;
        imageCount.textContent = `${index + 1} of ${currentFilteredImages.length}`;
        lightbox.classList.add("active");
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
    }

    function navigateImage(direction) {
        if (direction === "next") {
            currentImageIndex = (currentImageIndex + 1) % currentFilteredImages.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + currentFilteredImages.length) % currentFilteredImages.length;
        }
        const newImage = currentFilteredImages[currentImageIndex];
        lightboxImage.src = newImage.src;
        imageAlt.textContent = newImage.alt;
        imageCount.textContent = `${currentImageIndex + 1} of ${currentFilteredImages.length}`;
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            renderImages(this.dataset.category);
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    prevButton.addEventListener("click", () => navigateImage("prev"));
    nextButton.addEventListener("click", () => navigateImage("next"));

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Initial render
    renderImages("all");
});


