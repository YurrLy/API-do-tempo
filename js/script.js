let nomeCidade = document.querySelector("#cidade-text");
let btn = document.querySelector("#btn");

let api = "a3d685b8a33f10f5e14c040ad3e49e20";

const buscarApi = async(cidade) => {  
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${api}&lang=pt_br`;
    let apiTempo = await fetch(urlApi);
    let dadosApi = await apiTempo.json();

    return dadosApi;
}

let cidadeNo = document.querySelector("#cidade span");
let temperatura = document.querySelector("#temperatura span");
let tempo = document.querySelector("#tempo span");
let umidade = document.querySelector("#umidade span");
let vento = document.querySelector("#vento span");



let tempoInfo = async (cidade) => {
    let info=await buscarApi(cidade);

    cidadeNo.innerText = info.name;
    temperatura.innerText = info.main.temp;
    tempo.innerText = info.weather[0].description;
    umidade.innerText = info.main.humidity;
    vento.innerText = info.wind.speed;
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let cidade = nomeCidade.value;
    tempoInfo(cidade);
});
