const express = require('express');

const guardinha = express(); // CRIANDO GUARDINHA 
const PORT = 3000;          // LOCAL Q O SERVIDOR ESTA SENDO EXECUTADO (PORTA)

const rafael = {
    nome: "rafael",
    idade: "27",
    fruta: "caju"
};

const mari = {
    nome: "mariana",
    user: "mariwvs",
    email: "mari@gmail.com",
    password: "senha"
};

const rafaelly = {
    nome: "rafaelly",
    user: "rafawvs",
    email: "rafa@gmail.com",
    password: "senha"
}

//res -> responder
//get -> pega

guardinha.get("/pegarUsuario", (req, res) => {
    const userEmail = req.query.email

    let userReq = null;
    for (let user of users) {
        if (user.email === userEmail){
            userReq = user;
            break;
        }
    }

    if(userReq === null){
        return res.status(404).send("Usuario nao encontrado");
    }

    // const user = users.filter((user) => user.email === userEmail);

    return res.status(200).send(userReq);
});

guardinha.post("/usuario", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send(users)
})


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