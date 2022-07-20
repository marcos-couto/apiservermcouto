const uuidv4 = require('uuid/v4');

module.exports = app => {
  const ordersDB = app.pattern.orders;
  const controller = {};

  const {
    orders: ordersMock,} = ordersDB;
//metodo GET
  controller.listOrders = (req, res) => res.status(200).json(ordersDB);
// metodo POST
  controller.saveOrders = (req, res) => {
    ordersMock.pattern.push({
      id: uuidv4(),
      data: req.body.data,
      valor: req.body.valor,
      quantidade: req.body.quantidade,
      produto: req.body.produto,
      status: req.body.status,
      Data_pedido: new Date()
        });

    res.status(201).json(ordersMock);
  };
//metodo DELETE
  controller.removeOrders = (req, res) => {
    const {
      orderId,
    } = req.params;

    const foundOrderIndex = ordersMock.pattern.findIndex(order => order.id === orderId);

    if (foundOrderIndex === -1) {
      res.status(404).json({
        message: 'Pedido não encontrado no cadastro',
        success: false,
        users: ordersMock,
      });
    } else {
      ordersMock.pattern.splice(foundOrderIndex, 1);
      res.status(200).json({
        message: 'Pedido encontrado e removido do cadastro',
        success: true,
        users: ordersMock,
      });
    }
  };
//metodo PUT
  controller.updateOrders = (req, res) => {
    const {
      orderId,
    } = req.params;

    const foundOrderIndex = ordersMock.pattern.findIndex(order => order.id === orderId);

    if (foundOrderIndex === -1) {
      res.status(404).json({
        message: 'Pedido não encontrado no cadastro',
        success: false,
        users: ordersMock,
      });
    } else {
      const newOrder = {
        id: uuidv4(),
        data: req.body.data,
        valor: req.body.valor,
        quantidade: req.body.quantidade,
        produto: req.body.produto,
        status: req.body.status,
        Data_pedido: new Date()
      };

      ordersMock.pattern.splice(foundOrderIndex, 1, newOrder);

      res.status(200).json({
        message: 'Pedido encontrado e atualizado',
        success: true,
      orders: ordersMock,
      });
    }
  }

  return controller;
}
