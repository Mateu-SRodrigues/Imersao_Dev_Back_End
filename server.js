import express from "express";
import conectarAoBanco from "./src/config/dbconfig.js"; 
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);//Quando essa função conectar ao BD todos os dados relativos à ela vão ficar guardados na variável 'conexao'

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

const app = express();

app.listen(3000, () => { //3000 é uma porta padrão de servidor local
    console.log("Servidor escutando..."); //O servidor escuta a porta 3000 e a função nesse momento é exibir a mensagem
});//O Servidor está ouvindo requisições que chegam na porta 3000

async function getTodosPosts() {//'async' transforma a função em assincrona, sem sincronia
    const db = conexao.db("imersao-instabytes")//Objeto db representa o banco de dados chama 'imersao-instabytes'
    const colecao = db.collection("posts")//'db.collection' foi no banco e abriu uma coleção específica (posts)
    return colecao.find().toArray()
};

function buscarPostID(id) {//Essa função recebe um número de ID
    return posts.findIndex((post) => { //A função entra na rede posts e usa o método 'findIndex', um método do JS usado para encontrar um dado pelo índice, para entrar em cada um dos objetos(posts) dentro do array
        return post.id === Number(id)//O método entra dentro do objeto, procura pelo ID do objeto e compara se esse valor é igual ao valor passado no parâmetro 
    });
}; 

app.get("/posts/:id", (req, res) => { //':' indica, para o Express, como a informação da url no navegador vai ser substituída por um dado variado
    const index = buscarPostID(req.params.id)//A requisição tem o valor de id
    res.status(200).json(posts[index]);//Passa a posição do post que queremos retornar
});