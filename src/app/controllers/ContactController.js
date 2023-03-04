class ContactController {
  index(request, response) {
    //  listar todos os registros
    response.send('Send from contact controller');
  }

  show() {
    // obter um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

// Singleton (apenas uma instância da classe poderá existir, e esta será usada por toda aplicação)
module.exports = new ContactController();
