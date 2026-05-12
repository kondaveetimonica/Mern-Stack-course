document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", function () {
    const accordionItem = button.parentElement;
    const accordionContent = button.nextElementSibling;
    const contentHeight =
      accordionContent.querySelector(".accordion-body").offsetHeight;
    if (accordionItem.classList.contains("active")) {
      accordionContent.style.maxHeight = "0px";
      accordionItem.classList.remove("active");
      accordionContent.classList.remove("active");
    } else {
      document
        .querySelectorAll(".accordion-item.active")
        .forEach((activeItem) => {
          activeItem.classList.remove("active");
          activeItem.querySelector(".accordion-content").style.maxHeight =
            "0px";
          activeItem
            .querySelector(".accordion-content")
            .classList.remove("active");
        });

      // Open clicked item
      accordionContent.style.maxHeight = contentHeight + "px";
      accordionItem.classList.add("active");
      accordionContent.classList.add("active");
    }
  });
});
