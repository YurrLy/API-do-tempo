let api = "a3d685b8a33f10f5e14c040ad3e49e20";

let nomeCidade = document.querySelector("#cidade-text");
let btn = document.querySelector("#btn");

let tempoInfo = (cidade) => {
    console.log(cidade);
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let cidade = nomeCidade.value;
    tempoInfo(cidade);
});
