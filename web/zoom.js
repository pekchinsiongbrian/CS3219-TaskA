const zoomInButton = document.getElementsByClassName("fa-search-plus")[0];
const zoomOutButton = document.getElementsByClassName("fa-search-minus")[0];
const normalMap = document.getElementsByClassName("normal-map")[0];
const zoomedInMap = document.getElementsByClassName("zoomed-in-map")[0];

zoomInButton.addEventListener("click", () => {
  zoomInButton.classList.remove("zoom-active");
  normalMap.classList.remove("map-active");
  zoomOutButton.classList.add("zoom-active");
  zoomedInMap.classList.add("map-active");
});

zoomOutButton.addEventListener("click", () => {
  zoomOutButton.classList.remove("zoom-active");
  zoomedInMap.classList.remove("map-active");
  zoomInButton.classList.add("zoom-active");
  normalMap.classList.add("map-active");
});
