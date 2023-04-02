const container = document.querySelector(".container");
const main = document.querySelector(".main");

fetch("https://pokeapi.co/api/v2/pokemon?limit=105&offset=0")
  .then((response) => response.json())
  .then(function (json) {
    for (let i = 0; i < json.results.length; i++) {
      fetch(json.results[i].url)
        .then((response) => response.json())
        .then(function (pokimg) {
          // console.log(pokimg.sprites.front_default);

          main.innerHTML +=
            `
            <div class="container">
            <img src="` +
            pokimg.sprites.front_default +
            `" alt="">
            <h2 class="pok_nomes">` +
            json.results[i].name +
            `</h2>
            </div>`;
        });
    }
  });

const plau = document.getElementsByClassName("pok_nomes");
const botao_m = document.querySelector("#mostrar");
const botao_esconder = document.getElementById('esconder');

setTimeout(() => {
    document.getElementById("aguarde").innerHTML="O SITE ESTÁ PRONTO PARA USO!"

  for (let index = 0; index < plau.length; index++) {
    plau[index].addEventListener("click", () => {
      plau[index].style.color = "white";
    });
    plau[index].addEventListener("mouseout", () => {
      plau[index].style.color = "gray";
    });
  }

  botao_m.addEventListener("click", () => {
    for (let x = 0; x < plau.length; x++) {
      plau[x].style.color = "white";
    }
  });

  botao_esconder.addEventListener("click", () => {
    for (let y = 0; y < plau.length; y++) {
      plau[y].style.color = "gray";
    }
  });
}, 4500);
