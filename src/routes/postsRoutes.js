import express from "express";

const routes = (app) => {
    app.use(express.json());//Indica que a nossa aplicação tem funcionalidade de converter uma estrutura em json
    app.get("/posts", async (req, res) => { //A rota '/posts' do tipo 'get' vai pegar algo do servidor após uma requisição (req) e responder (res)
    const posts = await getTodosPosts()//'await' usada dentro de função assincrona (async), indica a conclusão da operação antes de continuar a execução
    res.status(200).json(posts);//.json sabe que tem que converter a resposta, em string, que ele recebe em um formato que o js consiga trabalhar
});
};

export default routes;