const menu = document.querySelector("#menu");
const menuIcon = document.querySelector("#menu-icon");
const main = document.querySelector("main");
const tengo = document.querySelector("#tengo");
const falta = document.querySelector("#falta");
const porcentaje = document.querySelector("#porcentaje");
const percent1 = document.querySelector("#percent1");
const percent2 = document.querySelector("#percent2");
const percent3 = document.querySelector("#percent3");
const img = document.querySelector("#img")

menuIcon.addEventListener("click", function(){
  if(menu.getAttribute("hidden")){
    menu.removeAttribute("hidden");
    menu.removeAttribute("class");
    main.setAttribute("class", "ocult");
    menu.setAttribute("class", "animate__animated animate__fadeInRight")
    img.setAttribute("src", "x.png")
    img.setAttribute("class", "img")
  } else {
    menu.removeAttribute("class");
    menu.setAttribute("class", "animate__animated animate__fadeOutRight")
    img.setAttribute("src", "menus.png")
    img.removeAttribute("class")
    setTimeout(() => {
      menu.setAttribute("hidden", true);
      main.removeAttribute("class");
    }, 1000);
  }
})

let contador = 0;
tengo.innerHTML = contador.toString();

function cuantasFaltan(){
  let faltan = 638 - contador;
  falta.innerHTML = faltan.toString();
  porcentaje.innerHTML = Math.round(Number(tengo.innerHTML) * 100 / 638);
}

document.querySelectorAll(".figurita").forEach((item) => {
  item.addEventListener("click", function () {
    if (item.className == "figurita off") {
      item.className = "figurita on";
      localStorage.setItem(item.id, "on");
      contador += 1;
      tengo.innerHTML = contador.toString();
      cuantasFaltan()
    } else {
      item.className = "figurita off";
      localStorage.removeItem(item.id);
      contador -= 1;
      tengo.innerHTML = contador.toString();
      cuantasFaltan()
    }
  });
});

document.querySelectorAll(".button-mode").forEach((item) => {
  item.addEventListener("click", function () {
    if (item.className == "button-mode") {
      document.querySelectorAll(".button-mode").forEach((item) => {
        item.className = "button-mode";
      })
      item.className = "button-mode under";
    }
  });
});




  for (let i = 0; i < 20; i++) {
    const countrys = ["fifa", "stadiums", "qat", "ecu", "sen", "hol", "ing", "iran", "usa", "gal","arg", "ara", "mex", "pol", "fra", "aus", "din", "tun", "esp", "cos", "ale", "jap", "bel", "can", "mar", "cro", "bra", "ser", "sui", "cam", "por", "gan", "uru", "cor", "mus", "coca"];
  
    for(let a = 0; a < countrys.length; a++){
      if (localStorage.getItem(countrys[a] + i)) {
        document.getElementById(countrys[a] + i).className = "figurita on";
        contador += 1;
        tengo.innerHTML = contador.toString();
        cuantasFaltan();
      }
    }
  };

if(Number(porcentaje.innerHTML) == 0 ){
  percent1.setAttribute("class", "mask full-1 cero") 
  percent2.setAttribute("class", "fill-1 cero")
  percent3.setAttribute("class", "fill-1 cero")
}else if(Number(porcentaje.innerHTML) > 0 && Number(porcentaje.innerHTML) <= 10){
  percent1.setAttribute("class", "mask full-1 diez") 
  percent2.setAttribute("class", "fill-1 diez")
  percent3.setAttribute("class", "fill-1 diez")
} else if(Number(porcentaje.innerHTML) > 10 && Number(porcentaje.innerHTML) <= 20){
  percent1.setAttribute("class", "mask full-1 veinte") 
  percent2.setAttribute("class", "fill-1 veinte")
  percent3.setAttribute("class", "fill-1 veinte")
} else if(Number(porcentaje.innerHTML) > 20 && Number(porcentaje.innerHTML) <= 30){
  percent1.setAttribute("class", "mask full-1 treinta") 
  percent2.setAttribute("class", "fill-1 treinta")
  percent3.setAttribute("class", "fill-1 treinta")
} else if(Number(porcentaje.innerHTML) > 30 && Number(porcentaje.innerHTML) <= 40){
  percent1.setAttribute("class", "mask full-1 cuarenta") 
  percent2.setAttribute("class", "fill-1 cuarenta")
  percent3.setAttribute("class", "fill-1 cuarenta")
} else if(Number(porcentaje.innerHTML) > 40 && Number(porcentaje.innerHTML) <= 50){
  percent1.setAttribute("class", "mask full-1 cincuenta") 
  percent2.setAttribute("class", "fill-1 cincuenta")
  percent3.setAttribute("class", "fill-1 cincuenta")
} else if(Number(porcentaje.innerHTML) > 50 && Number(porcentaje.innerHTML) <= 60){
  percent1.setAttribute("class", "mask full-1 sesenta") 
  percent2.setAttribute("class", "fill-1 sesenta")
  percent3.setAttribute("class", "fill-1 sesenta")
} else if(Number(porcentaje.innerHTML) > 60 && Number(porcentaje.innerHTML) <= 70){
  percent1.setAttribute("class", "mask full-1 setenta") 
  percent2.setAttribute("class", "fill-1 setenta")
  percent3.setAttribute("class", "fill-1 setenta")
} else if(Number(porcentaje.innerHTML) > 70 && Number(porcentaje.innerHTML) <= 80){
  percent1.setAttribute("class", "mask full-1 ochenta") 
  percent2.setAttribute("class", "fill-1 ochenta")
  percent3.setAttribute("class", "fill-1 ochenta")
} else if(Number(porcentaje.innerHTML) > 80 && Number(porcentaje.innerHTML) <= 99){
  percent1.setAttribute("class", "mask full-1 noventa") 
  percent2.setAttribute("class", "fill-1 noventa")
  percent3.setAttribute("class", "fill-1 noventa")
} else if(Number(porcentaje.innerHTML) <= 100){
  percent1.setAttribute("class", "mask full-1 cien") 
  percent2.setAttribute("class", "fill-1 cien")
  percent3.setAttribute("class", "fill-1 cien")
}