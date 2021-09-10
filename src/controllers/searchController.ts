import {Request,Response} from 'express';
import path from 'path';
import { Pet } from '../models/pet'
import { createMenuObject } from '../helpers/createMenuObjects';

export const search = (req: Request, res: Response)=> {
    let query: string = req.query.q as string;
    let list = Pet.getFromName(query);
    res.render("page/page",{
        menu: createMenuObject(""),
        list,
        query,
    })
}