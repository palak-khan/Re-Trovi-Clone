const scroller = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function texteffect() {
  var tl = gsap.timeline();
  tl.from(".text-img h1", {
    y: 100,
    opacity: 0,
    duration: 2,
    delay: 2,
  }).to(".text-img h1", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  });
}

texteffect();
window.onload = function () {
  document.querySelector(".next").onclick = function () {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
  };

  document.querySelector(".prev").onclick = function () {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };
};

let cursoreffect = document.querySelector(".cursoreffect");
document.addEventListener("mousemove", (e) => {
  cursoreffect.style.left = e.pageX + "px";
  cursoreffect.style.top = e.pageY + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  var elementsToAnimate = document.querySelectorAll("h1, h5, h6, p");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 1 }
  );

  elementsToAnimate.forEach(function (element) {
    observer.observe(element);
  });
});
