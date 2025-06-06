
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY || window.pageYOffset;
    const topHeader = document.getElementById("top");
    const downHeader = document.getElementById("down");

    if (scrollY > window.innerHeight * 0.1) {
      // Hide top header
      topHeader.style.display = "none";
      // Fix down header to top
      downHeader.classList.add("fixed");
    } else {
      // Show top header
      topHeader.style.display = "block";
      // Remove fixed class from down header
      downHeader.classList.remove("fixed");
    }
  });

