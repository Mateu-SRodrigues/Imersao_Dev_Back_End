import conectarAoBanco from "../config/dbconfig.js";


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);//Quando essa função conectar ao BD todos os dados relativos à ela vão ficar guardados na variável 'conexao'

export default async function getTodosPosts() {//'async' transforma a função em assincrona, sem sincronia
    const db = conexao.db("imersao-instabytes")//Objeto db representa o banco de dados chama 'imersao-instabytes'
    const colecao = db.collection("posts")//'db.collection' foi no banco e abriu uma coleção específica (posts)
    return colecao.find().toArray()
};