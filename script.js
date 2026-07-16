document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".button").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#invitation").scrollIntoView({
      behavior: "smooth"
    });
  });
});
