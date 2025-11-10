// let contatoJSON = {
//   id: "",
//   nome: "João Oliveira Dias - Atual",
//   celular: "11 9 7171-5555",
//   foto: "teste.png",
//   email: "joao@gmail.com",
//   endereco: "Av. São Joaquim, 234",
//   cidade: "Sorocaba",
// };

async function lerContatos() {
  const url = "https://bakcend-fecaf-render.onrender.com/contatos",
    response = await fetch(url),
    contatos = await response.json();

  return contatos;
}

async function criarContato(contato) {
  const url = "https://bakcend-fecaf-render.onrender.com/contatos",
    options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contato),
    },
    response = await fetch(url, options);

  return response.ok;
}

async function deletarContato(id) {
  const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`,
    options = {
      method: "DELETE",
    },
    response = await fetch(url, options);

  return response.ok;
}

async function atualizarContato(id, contato) {
  const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`,
    options = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contato),
    },
    response = await fetch(url, options);

  return response.ok;
}

function eraser() {
  const contatosLenght = lerContatos();

  console.log(contatosLenght);
}

export { lerContatos };
