document.querySelectorAll(".figurita").forEach((item) => {
    item.addEventListener("click", function () {
      if (item.className == "figurita off") {
        item.className = "figurita on";
        localStorage.setItem(item.id, "on");
        repes += 1;
        repesLocal();
      } else {
        item.className = "figurita off";
        localStorage.removeItem(item.id);
        repes -= 1;
        repesLocal();
      }
    });
  });