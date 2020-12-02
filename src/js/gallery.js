import galleryImg from './galleryItems.js';
// инициализация плагина lightGallery.js

const refs = {
    jsGallery: document.querySelector('.js-gallery'),
    jsLightbox: document.querySelector('.js-lightbox'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
    jsLightboxImage: document.querySelector('.lightbox__image'),
    closeLightbox: document.querySelector('button[data-action="close-lightbox"]'),
}

refs.jsGallery.insertAdjacentHTML('beforeend', galleryImg.map(({ preview, original, description }) =>
    `<a class="gallery__link" href="${original}">
     <img class="gallery__image"
      src="${preview}"
      title="${description}">
    </a>`)
    .join(''));


lightGallery(document.getElementById('lightgallery'), {
    mode: 'lg-zoom-in-big',
    hideControlOnEnd: false,
    getCaptionFromTitleOrAlt: false,
    preload: 2,
    download: false,
    currentPagerPosition: 'right',
    thumbWidth: 100,
});
