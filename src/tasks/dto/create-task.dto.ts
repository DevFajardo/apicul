import { IsInt, IsNotEmpty, IsString, isNotEmpty } from "class-validator";

export class CreateTaskDto {

    //se validan los datos con typeorm
    
    @IsInt({message : "el taskcategoryid tiene que ser un entero"})
    @IsNotEmpty({message : "el taskcategoryid no puede estar vacio"})
    taskCategoryId : number

    @IsInt({message : "el taskstatusid tiene que ser un entero"})
    @IsNotEmpty({message : "el taskstatusid no puede estar vacio"})
    taskStatusId : number

    @IsInt({message : "el userid tiene que ser un entero"})
    @IsNotEmpty({message : "el userid no puede estar vacio"})
    userId : number

    @IsString({message : "la descripcion tiene que ser un string"})
    @IsNotEmpty({message : "la descripcion no puede estar vacio"})
    description : string 

    @IsString({message : "el color tiene que ser un string"})
    @IsNotEmpty({message : "el color no puede estar vacio"})
    color : string 

}
