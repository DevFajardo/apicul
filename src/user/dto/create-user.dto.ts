import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";



export class CreateUserDto {

    @IsString({message : "El nombre no puede ser diferente a un texto"})
    @IsNotEmpty({message : "El nombre no puede estar vacio"})
    @MinLength(3, {message: "El nombre debe tener minimo 3 caracteres"})
    @MaxLength(15, {message : "el nombre debe contener menos de 15 caracteres"})
    name : string

    @IsString({message : "El apellido no puede ser diferente a un texto"})
    @IsNotEmpty({message : "El apellido no puede estar vacio"})
    @MinLength(3, {message: "El apellido debe tener minimo 1 caracteres"})
    @MaxLength(15, {message : "el apellido debe contener menos de 15 caracteres"})
    lastName : string

    @IsEmail({}, {message : "email invalido"})
    @IsNotEmpty({message : "el email no puede estar vacio"})
    email : string
}
