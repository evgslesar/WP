/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/block-ships-line/view.js ***!
  \**************************************/
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
  const sliders = document.querySelectorAll(".gstore-ships-slider-wrapper");
  sliders.forEach(wrapper => {
    const slider = wrapper.querySelector(".gstore-ships-slider");
    const track = wrapper.querySelector(".gstore-ships-track");
    const prevBtn = wrapper.querySelector(".gstore-ship-nav.prev");
    const nextBtn = wrapper.querySelector(".gstore-ship-nav.next");
    if (!slider || !track || !prevBtn || !nextBtn) return;

    // --- 1. Clone Slides for Infinite Loop ---
    const originalSlides = Array.from(track.children);
    if (originalSlides.length === 0) return;

    // Clone set twice: [Clones Before] [Originals] [Clones After]
    // This ensures enough buffer for looping.
    const clonesStart = originalSlides.map(slide => slide.cloneNode(true));
    const clonesEnd = originalSlides.map(slide => slide.cloneNode(true));

    // Add markers to assist debugging or logic if needed
    clonesStart.forEach(s => s.classList.add("clone-start"));
    clonesEnd.forEach(s => s.classList.add("clone-end"));

    // Insert clones
    clonesStart.reverse().forEach(clone => {
      track.insertBefore(clone, track.firstChild);
    });
    clonesEnd.forEach(clone => {
      track.appendChild(clone);
    });

    // --- 2. Initial Positioning ---
    const getSlideWidth = () => {
      const slide = slider.querySelector(".gstore-ship-slide");
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      return (slide ? slide.offsetWidth : 300) + gap;
    };
    const totalOriginalWidth = originalSlides.length * getSlideWidth();

    // Scroll to the start of the "Real" set
    // clonesStart.length = originalSlides.length
    const initialScroll = originalSlides.length * getSlideWidth();
    slider.scrollLeft = initialScroll;

    // --- 3. Infinite Scroll Check ---
    let isThrottled = false;
    slider.addEventListener("scroll", () => {
      if (isThrottled) return;
      isThrottled = true;
      window.requestAnimationFrame(() => {
        const scrollLeft = slider.scrollLeft;
        const setWidth = totalOriginalWidth; // Approximate width of one full set

        // If we scrolled into the "Start Clones" zone (too far left)
        // Jump forward to the "Real" set
        if (scrollLeft < 50) {
          // arbitrary buffer
          slider.style.scrollBehavior = "auto";
          slider.scrollLeft = scrollLeft + setWidth;
          slider.style.scrollBehavior = "smooth";
        }
        // If we scrolled into the "End Clones" zone (too far right)
        // Jump back to the "Real" set
        else if (scrollLeft >= setWidth * 2) {
          slider.style.scrollBehavior = "auto";
          slider.scrollLeft = scrollLeft - setWidth;
          slider.style.scrollBehavior = "smooth";
        }
        isThrottled = false;
      });
    });

    // --- 4. Navigation Buttons ---
    const scrollAmount = () => getSlideWidth();
    prevBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: -scrollAmount(),
        behavior: "smooth"
      });
    });
    nextBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: scrollAmount(),
        behavior: "smooth"
      });
    });

    // --- 5. Drag to Scroll ---
    let isDown = false;
    let startX;
    let scrollLeftStart;
    let isDragging = false;

    // Prevent default browser drag behavior on images/links
    slider.addEventListener("dragstart", e => e.preventDefault());
    slider.addEventListener("mousedown", e => {
      isDown = true;
      isDragging = false; // Reset drag flag
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeftStart = slider.scrollLeft;

      // Disable Snap & Smooth for instant drag response
      slider.style.scrollSnapType = "none";
      slider.style.scrollBehavior = "auto";
    });
    const stopDrag = () => {
      isDown = false;
      slider.classList.remove("active");

      // Re-enable Snap & Smooth
      slider.style.scrollSnapType = "x mandatory";
      slider.style.scrollBehavior = "smooth";
    };
    slider.addEventListener("mouseleave", stopDrag);
    slider.addEventListener("mouseup", stopDrag);
    slider.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast factor
      slider.scrollLeft = scrollLeftStart - walk;

      // If moved more than 5 pixels, consider it a drag operation
      if (Math.abs(x - startX) > 5) {
        isDragging = true;
      }
    });

    // Prevent click navigation if the user was dragging
    slider.addEventListener("click", e => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true); // Capture phase to intercept early
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map