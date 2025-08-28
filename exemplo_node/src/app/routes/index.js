const routes = require('express').Router()

routes.get("/", (req, res) => {
  res.send(`
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPDuMNEwmWNvDf99s3ss1Y4IY1Fc0Lq8z9A&s" alt="">
    <h1>Rota padão</h1>
</body>
</html>`);
});

routes.get("/alunos", (req, res) => {
  res.send(`
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7sgo_WoHSXp-_VCfTKWTP4hE-CjtspaBKQ&s alt="">
    <h1>Página para os alunos</h1>
</body>
</html>`);
});
routes.get("/suletta_mercury", (req, res) => {
  res.send(`
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
    </style>
</head>
<body>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMBiBmMQAOCrKj_UJNxmC1B0wwxKniLulCQ&s">
     
</body>
</html>`);
});
routes.get("/bloodborne", (req, res) => {
  res.send(`
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpuvqr340M95F_6e4TwuUfG1S6NyKueuJZg&s alt="">

 
</body>
</html>`);
});
routes.get("/me_apaixonei_pela_vila", (req, res) => {
  res.send(`
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJF39kRyF03ugzliEljasRb7GJcT0HJ21PQ&s alt="">
    
</body>
</html>`);
});

module.exports = routes