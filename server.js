import express from "express";

const app = express(); //express() é uma função
app.listen(3000, () => { //3000 é uma porta padrão de servidor local
    console.log("Servidor escutando..."); //O servidor escuta a porta 3000 e a função nesse momento é exibir a mensagem
});//O Servidor está ouvindo requisições que chegam na porta 3000

app.get("/api", (req, res) => { //A rota '/api' do tipo 'get' vai pegar algo do servidor após uma requisição (req) e responder (res)
    res.status(200).send("Boas vindas à imersão!"); //Nossa resposta tem um status 200 (um dos códigos HTTP>CÓDIGO NUMÉRICO ASSOCIADO A TEXTO), esse código significa OK
});//A resposta da nossa requisição é 200 e junto desse status de resposta vem o dado 'send'