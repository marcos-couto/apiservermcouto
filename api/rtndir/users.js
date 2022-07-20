module.exports = app => {
  const controller = app.methods.users;
// metodo GET e POST para o usuario
  app.route('/api/v1/users')
    .get(controller.listUsers)
    .post(controller.saveUsers);
// metodo DELETE e PUT para o usuario
  app.route('/api/v1/users/:userId')
     .delete(controller.removeUsers)
     .put(controller.updateUsers);
}
