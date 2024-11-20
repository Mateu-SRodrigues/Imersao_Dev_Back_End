import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato fazendo yoga",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Paisagem incrível",
        imagem: "https://placecats.com/millie/300/150"
    } //Dados hospedados localmente, array em memória
];//Temos uma lista '[]' e dentro dessa lista temos um objeto '{}', composto por um conjunto de chaves (descricao, imagem) e valor ("Uma foto teste","https")

const app = express(); //express() é uma função
app.use(express.json());//Indica que a nossa aplicação tem funcionalidade de converter uma estrutura em json

app.listen(3000, () => { //3000 é uma porta padrão de servidor local
    console.log("Servidor escutando..."); //O servidor escuta a porta 3000 e a função nesse momento é exibir a mensagem
});//O Servidor está ouvindo requisições que chegam na porta 3000

app.get("/posts", (req, res) => { //A rota '/posts' do tipo 'get' vai pegar algo do servidor após uma requisição (req) e responder (res)
    res.status(200).json(posts);//.json sabe que tem que converter a resposta, em string, que ele recebe em um formato que o js consiga trabalhar
});

function buscarPostID(id) {//Essa função recebe um número de ID
    return posts.findIndex((post) => { //A função entra na rede posts e usa o método 'findIndex', um método do JS usado para encontrar um dado pelo índice, para entrar em cada um dos objetos(posts) dentro do array
        return post.id === Number(id)//O método entra dentro do objeto, procura pelo ID do objeto e compara se esse valor é igual ao valor passado no parâmetro 
    });
}; 

app.get("/posts/:id", (req, res) => { //':' indica, para o Express, como a informação da url no navegador vai ser substituída por um dado variado
    const index = buscarPostID(req.params.id)//A requisição tem o valor de id
    res.status(200).json(posts[index]);//Passa a posição do post que queremos retornar
});