const repetidas = document.querySelector("#repetidas");
const tengos = document.querySelector(".tengo");
const faltas = document.querySelector(".falta");

let repes = 0;

function repesLocal(){
  repetidas.innerHTML = repes.toString();
  localStorage.setItem("repesLocal", repes)
}


tengos.innerHTML = localStorage.tengoLocal;
faltas.innerHTML = localStorage.faltanLocal;


for (let i = 0; i < 20; i++) {
    const rcountrys = ["rfifa", "rstadiums", "rqat", "recu", "rsen", "rhol", "ring", "riran", "rusa", "rgal","rarg", "rara", "rmex", "rpol", "rfra", "raus", "rdin", "rtun", "resp", "rcos", "rale", "rjap", "rbel", "rcan", "rmar", "rcro", "rbra", "rser", "rsui", "rcam", "rpor", "rgan", "ruru", "rcor", "rmus", "rcoca"];
  
    for(let a = 0; a < rcountrys.length; a++){
      if (localStorage.getItem(rcountrys[a] + i)) {
        document.getElementById(rcountrys[a] + i).className = "figurita on";
        repes += 1;
        localStorage.setItem("repesLocal", repes)
        repetidas.innerHTML = repes.toString();
      }
    }
  };

