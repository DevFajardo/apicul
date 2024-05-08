import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskCategoryDto {
    //se validan los datos con typeorm

    @IsNotEmpty({message : "la descripcion no puede estar vacia"})
    @IsString({message : "la descripcion debe ser un string"})
    description : string


    @IsNotEmpty({message : "el color no puede estar vacio"})
    @IsString({message : "el color debe ser string"})
    color : string
}
