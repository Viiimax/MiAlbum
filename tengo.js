document.querySelectorAll(".figurita").forEach((item) => {
    item.addEventListener("click", function () {
      if (item.className == "figurita off") {
        item.className = "figurita on";
        localStorage.setItem(item.id, "on");
        contador += 1;
        tengoLocal();
        tengo.innerHTML = contador.toString();
        cuantasFaltan()
      } else {
        item.className = "figurita off";
        localStorage.removeItem(item.id);
        contador -= 1;
        tengoLocal();
        tengo.innerHTML = contador.toString();
        cuantasFaltan()
      }
    });
  });