// "use strict";

import { lerContatos } from "./contatos.js";

let container = document.querySelector("#container"),
  main = document.querySelector("main"),
  buttonNovoContato = document.querySelector("#novo-contato"),
  buttonCancelar = document.querySelector("#cancelar"),
  contactList;

async function loadContacts() {
  contactList = await lerContatos();

  contactList.forEach((contato) => {
    let cardContato = document.createElement("div"),
      img = document.createElement("img"),
      nome = document.createElement("h2"),
      telefone = document.createElement("p");

    cardContato.className = "card-contato";

    img.src = contato.foto;
    nome.innerText = contato.nome;
    telefone.innerText = contato.celular;
    cardContato.append(img, nome, telefone);
    container.append(cardContato);
  });
}

loadContacts();

buttonNovoContato.addEventListener("click", () => {
  main.classList.remove("card-show");
  main.classList.add("form-show");
});
buttonCancelar.addEventListener("click", () => {
  main.classList.add("card-show");
  main.classList.remove("form-show");
});
