const uuidv4 = require('uuid/v4');

module.exports = app => {
  const usersDB = app.pattern.users;
  const controller = {};

  const {
    users: usersMock,} = usersDB;
//metodo GET
  controller.listUsers = (req, res) => res.status(200).json(usersDB);
// metodo POST
  controller.saveUsers = (req, res) => {
    usersMock.pattern.push({
      id: uuidv4(),
      username: req.body.username,
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      email: req.body.email,
      cel: req.body.cel,
      Data_cadastro: new Date()
        });

    res.status(201).json(usersMock);
  };
// metodo DELETE
  controller.removeUsers = (req, res) => {
    const {
      userId,
    } = req.params;

    const foundUserIndex = usersMock.pattern.findIndex(user => user.id === userId);

    if (foundUserIndex === -1) {
      res.status(404).json({
        message: 'Usuário não encontrado no cadastro',
        success: false,
        users: usersMock,
      });
    } else {
      usersMock.pattern.splice(foundUserIndex, 1);
      res.status(200).json({
        message: 'Usuário encontrado e removido do cadastro',
        success: true,
        users: usersMock,
      });
    }
  };

//metodo PUT
  controller.updateUsers = (req, res) => {
    const {
      userId,
    } = req.params;

    const foundUserIndex = usersMock.pattern.findIndex(user => user.id === userId);

    if (foundUserIndex === -1) {
      res.status(404).json({
        message: 'Usuário não encontrado no cadastro',
        success: false,
        users: usersMock,
      });
    } else {
      const newUser = {
        id: uuidv4(),
        username: req.body.username,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        cel: req.body.cel,
        data_atualizacao: new Date()
      };

      usersMock.pattern.splice(foundUserIndex, 1, newUser);

      res.status(200).json({
        message: 'Usuário encontrado e atualizado com sucesso',
        success: true,
        users: usersMock,
      });
    }
  }

  return controller;
}
