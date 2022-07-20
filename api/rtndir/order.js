module.exports = app => {
  const controller = app.methods.order;
// metodo GET e POST para o pedido
  app.route('/api/v1/orders')
    .get(controller.listOrders)
    .post(controller.saveOrders);
// metodo DELETE e PUT para o pedido
  app.route('/api/v1/orders/:orderId')
     .delete(controller.removeOrders)
     .put(controller.updateOrders);
}
