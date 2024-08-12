const express = require('express');

const guardinha = express(); // CRIANDO GUARDINHA 
const PORT = 3000;          // LOCAL Q O SERVIDOR ESTA SENDO EXECUTADO (PORTA)

const rafael = {
    nome: "rafael",
    idade: "27",
    fruta: "caju"
}

guardinha.get("/pegarUsuario", (req, res) => {
    res.send(rafael);
});

guardinha.get("/", (req, res) => {
    res.send("HELLO, WORLD!");
});

guardinha.get("/caju", (req, res) => {
    res.send("Eu gosto de caju");
});


// ESCUTA TUDO QUE ESTA ACONTECENDO / PORTEIRO
guardinha.listen(PORT, () =>{
    console.log("O servidor está rodando na porta" + PORT);
});

//http://localhost:3000/ NO NAVEGADOR (OQ VC QUER PEGAR DPS DA BARRA)