// import './styles.css';
// import '../node_modules/photoswipe/dist/photoswipe.css';
// import '../node_modules/photoswipe/dist/default-skin/default-skin.css';
// import '../node_modules/photoswipe/dist/photoswipe.min.js';
// import '../node_modules/photoswipe/dist/photoswipe-ui-default.min.js';
// import './js/photoswipe';

import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe';
import parentEl from 'photoswipe';

console.log(parentEl);


const openPhotoSwipe = function () {
    const pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    const items = [
        {
            src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            w: 964,
            h: 1024
        },
        {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 1024,
            h: 683
        }
    ];
    
    // define options (if needed)
    const options = {
       // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

openPhotoSwipe();

document.getElementById('btn').onclick = openPhotoSwipe;