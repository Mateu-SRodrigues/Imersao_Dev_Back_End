import express from "express"; 
import routes from "./src/routes/postsRoutes.js";


const app = express();
routes(app)

app.listen(3000, () => { //3000 é uma porta padrão de servidor local
    console.log("Servidor escutando..."); //O servidor escuta a porta 3000 e a função nesse momento é exibir a mensagem
});//O Servidor está ouvindo requisições que chegam na porta 3000

function buscarPostID(id) {//Essa função recebe um número de ID
    return posts.findIndex((post) => { //A função entra na rede posts e usa o método 'findIndex', um método do JS usado para encontrar um dado pelo índice, para entrar em cada um dos objetos(posts) dentro do array
        return post.id === Number(id)//O método entra dentro do objeto, procura pelo ID do objeto e compara se esse valor é igual ao valor passado no parâmetro 
    });
}; 

app.get("/posts/:id", (req, res) => { //':' indica, para o Express, como a informação da url no navegador vai ser substituída por um dado variado
    const index = buscarPostID(req.params.id)//A requisição tem o valor de id
    res.status(200).json(posts[index]);//Passa a posição do post que queremos retornar
});