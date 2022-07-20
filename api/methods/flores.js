const uuidv4 = require('uuid/v4');

module.exports = app => {
  const floresDB = app.pattern.flores;
  const controller = {};

  const {
    flores: floresMock,} = floresDB;
//metodo GET
  controller.listFlores = (req, res) => res.status(200).json(floresDB);
//metodo POST
  controller.saveFlores = (req, res) => {
    floresMock.pattern.push({
      id: uuidv4(),
      nome: req.body.nome,
      datavalidade: req.body.datavalidade,
      preco: req.body.preco,
      lote: req.body.lote,
      quantidade: req.body.quantidade,
      fornecedor: req.body.fornecedor,
      cidade: req.body.cidade,
      estado: req.body.estado,
    });

    res.status(201).json(floresMock);
  };
//metodo DELETE
  controller.removeFlores = (req, res) => {
    const {
      produtoId,
    } = req.params;

    const foundProdutoIndex = floresMock.pattern.findIndex(produto => produto.id === produtoId);

    if (foundProdutoIndex === -1) {
      res.status(404).json({
        message: 'Produto não encontrado no estoque',
        success: false,
        flores: floresMock,
      });
    } else {
      floresMock.pattern.splice(foundProdutoIndex, 1);
      res.status(200).json({
        message: 'Produto encontrado e removido com sucesso',
        success: true,
        flores: floresMock,
      });
    }
  };
// metodo PUT
  controller.updateFlores = (req, res) => {
    const {
      produtoId,
    } = req.params;

    const foundProdutoIndex = floresMock.pattern.findIndex(produto => produto.id === produtoId);

    if (foundProdutoIndex === -1) {
      res.status(404).json({
        message: 'Produto não encontrado no estoque',
        success: false,
        flores: floresMock,
      });
    } else {
      const newProduto = {
        id: uuidv4(),
        nome: req.body.nome,
        datavalidade: req.body.datavalidade,
        preco: req.body.preco,
        lote: req.body.lote,
        quantidade: req.body.quantidade,
        fornecedor: req.body.fornecedor,
        cidade: req.body.cidade,
        estado: req.body.estado,
        createdAt: new Date()
      };

      floresMock.pattern.splice(foundProdutoIndex, 1, newProduto);

      res.status(200).json({
        message: 'Produto encontrado e atualizado com sucesso!',
        success: true,
        flores: floresMock,
      });
    }
  }

  return controller;
}
