
import { Entity, Column, PrimaryColumn, OneToMany} from 'typeorm';
import { Service } from 'src/service/entities/service.entity';
import { Subcategoria } from 'src/subcategoria/entities/subcategoria.entity';
@Entity()
export class categoria {


  @Column()
  Nombre: string;

  @PrimaryColumn()
  codigo: string;

  @Column()
  descripcion: string;

  @OneToMany(() => Service, service => service.categoria)
  servicio: Service[];

  @OneToMany(() =>Subcategoria, subcategory => subcategory.categoria)
  subcategorias: Subcategoria[];
  
}