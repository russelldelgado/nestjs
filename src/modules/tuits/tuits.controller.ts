import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDto } from '../dto/create-tuit.dto';
import { UpdateTuitDto } from '../dto/update-tuit.dto';

@Controller('tuits')
export class TuitsController {

    constructor(private readonly tuitService : TuitsService){};


    @Get()
    getTuits(@Query() filterQuery) : Tuit[]{

        const { shearchTerm , orderBy  , } = filterQuery;

        return this.tuitService.getTuits();
    }

    //podemos indicar que tipo de parametro vamos a recibir y de que tipo de dato se trata

    @Get(':id')
    getTuit(@Param('id') id : string) : Tuit{
        return this.tuitService.getTuit(id);
    }

    //indicamos al body que solo identifique el parametro de usuario
    @Post()
    //@HttpCode(HttpStatus.NO_CONTENT)
    createTuits(@Body() message : CreateTuitDto) : void{
        console.log(message instanceof CreateTuitDto);
        console.log(!(message instanceof CreateTuitDto));
        
        return this.tuitService.createTuit(message);
    }

    //en el patch aparte del elemento a actualizar tambien tenemos que enviar los datos a actualizar
    @Patch(":id")
    uptadeTuits(@Param('id') id : string , @Body() tuit : UpdateTuitDto) : Tuit {
        return this.tuitService.updateTuit(id , "Actualizamos estos datos" );
    }

    @Delete(":id")
    deleteTuits(@Param('id') id : string) : void{
        return this.tuitService.deleteTuit(id);
    }

}
