import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { retry } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {

  constructor(@InjectRepository(Contact)
  private readonly contactRepository: Repository<Contact>,)
  {}

  create(createContactDto: CreateContactDto) {
    let contact = new Contact;
    contact.Nombre = createContactDto.Nombre;
    contact.email= createContactDto.email;
    contact.Comentario = createContactDto.comentario;

    this.contactRepository.save(contact);

    return "Success";
  }

  findAll(): Promise <Contact[]> {
    return this.contactRepository.find();
  }

  findOne(email: string): Promise<Contact> {
    let contact = this.contactRepository.findOne({
      where: {
        email:email
      }
    })

    return contact
  }


}
