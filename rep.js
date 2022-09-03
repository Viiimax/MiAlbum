const repetidas = document.querySelector("#repetidas");

let repes = 0;
repetidas.innerHTML = repes.toString();


for (let i = 0; i < 20; i++) {
    const rcountrys = ["rfifa", "rstadiums", "rqat", "recu", "rsen", "rhol", "ring", "riran", "rusa", "rgal","rarg", "rara", "rmex", "rpol", "rfra", "raus", "rdin", "rtun", "resp", "rcos", "rale", "rjap", "rbel", "rcan", "rmar", "rcro", "rbra", "rser", "rsui", "rcam", "rpor", "rgan", "ruru", "rcor", "rmus", "rcoca"];
  
    for(let a = 0; a < rcountrys.length; a++){
      if (localStorage.getItem(rcountrys[a] + i)) {
        document.getElementById(rcountrys[a] + i).className = "figurita on";
        repes += 1;
        repetidas.innerHTML = repes.toString();
      }
    }
  };

