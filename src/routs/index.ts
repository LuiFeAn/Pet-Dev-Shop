//Importando Router da Lib
import {Router} from 'express';
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'
//Executando Router
const ROUTER = Router();
//Criando rotas
ROUTER.get("/",pageController.home);
ROUTER.get("dogs",pageController.dogs);
ROUTER.get("cats",pageController.cats);
ROUTER.get("fishes",pageController.fishes);
ROUTER.get("search",searchController.search);
//Exportando Router
export default ROUTER;