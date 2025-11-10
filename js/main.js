// "use strict";

import { lerContatos, criarContato, deletarContato } from "./contatos.js";

let container = document.querySelector("#container"),
  main = document.querySelector("main"),
  buttonNovoContato = document.querySelector("#novo-contato"),
  buttonCancelar = document.querySelector("#cancelar"),
  buttonSalvar = document.querySelector("#salvar"),
  buttonDeletar = document.querySelector("#deletar"),
  contactList,
  novoContato = {
    nome: "",
    email: "",
    celular: "",
    endereco: "",
    cidade: "",
    id: "",
  },
  inputText = document.querySelectorAll(".input-text");

async function loadContacts() {
  contactList = await lerContatos();

  contactList.forEach((contato) => {
    let cardContato = document.createElement("div"),
      img = document.createElement("img"),
      nome = document.createElement("h2"),
      telefone = document.createElement("p");

    cardContato.className = "card-contato";
    cardContato.id = contato.id;

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

buttonSalvar.addEventListener("click", async () => {
  novoContato.nome = inputText[0].value;
  novoContato.email = inputText[1].value;
  novoContato.celular = inputText[2].value;
  novoContato.endereco = inputText[3].value;
  novoContato.cidade = inputText[4].value;
  novoContato.id = "";

  criarContato(novoContato);

  inputText.forEach((item) => {
    item.value = "";
  });

  window.alert("Cadastrado com sucesso!");
});

async function deletarTodos() {
  contactList = await lerContatos();

  contactList.forEach((item) => {
    deletarContato(item.id);
  });
}

// deletarTodos();

// card.forEach((item) => {
//   item.addEventListener(
//     ("click",
//     (evento) => {
//       console.log(evento);
//       console.log(item.getAttribute("id"));
//     })
//   );
// });

function getID() {
  let listaDivs = container.childNodes;

  console.log(listaDivs);

  listaDivs.forEach((item) => {
    console.log(item);
  });
}

getID();
