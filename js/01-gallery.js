import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listElement = document.querySelector(".gallery");
const itemElement = createGalleryItems(galleryItems);
listElement.insertAdjacentHTML("beforeend", itemElement);
listElement.addEventListener("click", onImgClick);

function createGalleryItems(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const inStance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1280" height="auto">`);
  inStance.show();

  listElement.addEventListener("keydown", onPressingEsc);

  function onPressingEsc(evt) {
    if (evt.code === "Escape") {
      inStance.close();
      listElement.removeEventListener("keydown", onPressingEsc);
    }
  }
}

console.log(galleryItems);
