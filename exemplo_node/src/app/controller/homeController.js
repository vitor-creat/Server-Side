module.exports = (req, res) => {
  const dados = {
    nome_usuario: "Max",
    perfil_usuario: "professor",
  };
  res.render("index_exemplo", {dados});
};
