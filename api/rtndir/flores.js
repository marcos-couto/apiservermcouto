module.exports = app => {
  const controller = app.methods.flores;

// metodo GET e POST para o produto
  app.route('/api/v1/flores')
    .get(controller.listFlores)
    .post(controller.saveFlores);

// metodo DELETE e PUT para o produto
  app.route('/api/v1/flores/:produtoId')
    .delete(controller.removeFlores)
    .put(controller.updateFlores);



}
