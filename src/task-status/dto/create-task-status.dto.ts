import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskStatusDto {

    @IsString({message : "la descripcion debe ser string"})
    @IsNotEmpty({message : "la descripcion no debe estar vacia"})
    description : string

}
