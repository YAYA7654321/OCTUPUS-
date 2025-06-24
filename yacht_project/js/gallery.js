const prevButton = lightbox.querySelector(".lightbox-nav.prev");
const nextButton = lightbox.querySelector(".lightbox-nav.next");

closeButton.addEventListener("click", closeLightbox);
if (prevButton) prevButton.addEventListener("click", () => navigateImage("prev"));
if (nextButton) nextButton.addEventListener("click", () => navigateImage("next")); 