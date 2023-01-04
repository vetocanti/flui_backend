import { Blob } from "buffer";
export class CreateCompanyDto{
    nombre: string;
    nombreUsuario: string;
    correoElectronico: string;
    clave: string;
    descripcion:string;
    telefono:string;
    //Foto:Blob;
}