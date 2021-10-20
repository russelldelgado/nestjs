import { Injectable, NotFoundException } from '@nestjs/common';
import { Tuit } from './tuit.entity';
import { CreateTuitDto } from '../dto/create-tuit.dto';
import { UpdateTuitDto } from '../dto/update-tuit.dto';

@Injectable()
export class TuitsService {


   private tuits : Tuit[] = [
       {
           id : "1",
           message : "hola que tal soy russell delgado muñoz"
       }
   ];

    getTuits(): Tuit[]{
        return this.tuits;
    }

    getTuit(id : string) : Tuit{
        const tuit =  this.tuits.find(item => item.id === id)
        if(!tuit){
            throw new NotFoundException('resource not found')
        }
        return tuit;
    }

    createTuit({ message }  : CreateTuitDto){
        this.tuits.push({
            id : (this.tuits.length + 1).toString(),
            message : message,
        })
    }

    updateTuit(id : string ,  message  : string) : Tuit{
        //me traigo un tuit por id para posteriormente actualizarlo
        const tuit : Tuit = this.getTuit(id);
        //como esto se comparte por referencia se actualiza automaticamente
        tuit.message = message;
        return tuit;
    }

    deleteTuit(id : string) : void{
        const index  = this.tuits.findIndex(tuit  => tuit.id === id);
        if(index >= 0){
            //aliminame a partir de este elemento solo un elemento
            this.tuits.splice(index , 1)
        }
    }

}
