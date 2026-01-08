/******/ (() => { // webpackBootstrap
/*!**********************************!*\
  !*** ./src/block-header/view.js ***!
  \**********************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

document.addEventListener("DOMContentLoaded", () => {
  const moreToggles = document.querySelectorAll(".gstore-nav-more");
  moreToggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.stopPropagation();
      toggle.classList.toggle("is-open");
    });
  });
  document.addEventListener("click", e => {
    moreToggles.forEach(toggle => {
      if (!toggle.contains(e.target)) {
        toggle.classList.remove("is-open");
      }
    });
  });

  // Burger Menu Toggle
  const burgerBtn = document.querySelector(".js-burger-menu");
  const navMenu = document.querySelector(".gstore-header__nav");
  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      navMenu.classList.toggle("is-open");
      // Optional: Animate burger bars
      burgerBtn.classList.toggle("is-active");
    });
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map