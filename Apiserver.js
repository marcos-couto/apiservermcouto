const app = require('./config/express')();
const port = app.get('port');

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`                                                  `);
  console.log(`==================================================`);
  console.log(`Projeto: Servidor dedicado para API Testing`);
  console.log(`==================================================`);
  console.log(`                                                  `);
  console.log(`=========================================================`);
  console.log(`Este servidor responde aos métodos GET,POST,DELETE e PUT.`);
  console.log(`que permite a leitura, inserção, remoção e modificação de`);
  console.log(`cadastro de  produtos, usuários e pedidos.`);
  console.log(`=========================================================`);
  console.log(`                                                  `);
  console.log(`Server Listening at port ${port}`);
});
