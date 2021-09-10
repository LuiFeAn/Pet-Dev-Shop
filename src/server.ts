//Importando libs
import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import routs from './routs/index'
import path from 'path';
//Configurando porta do servidor local
dotenv.config();
//Executando o express
const SERVER = express();
//Definindo a engine utilizada para executar o front-end
SERVER.set("view engine","mustache");
//Definindo o diretório dos nossos arquivos front-end
SERVER.set("views",path.join(__dirname, "views"));
//Executando nossa engine
SERVER.engine("mustache", mustache());
//Definindo um diretório absoluto para nossos arquivos públicos.
SERVER.use(express.static(path.join(__dirname,"../public")));
//Rotas
SERVER.use(routs);
SERVER.use((req:Request,res:Response)=>{
   res.render("page/404page")
})
SERVER.listen(4000)