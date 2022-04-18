import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToMany,
    JoinTable,
} from 'typeorm';

import Resident from './Resident';
import Category from './Category';

@Entity('condominiums')
export default class Condominium {
    @PrimaryGeneratedColumn('uuid')
    condominiumId: string;

    @Column({ nullable: false, unique: true })
    condominiumName: string;

    @Column({ length: 8, nullable: false })
    zipCode: string;

    @Column({ nullable: false })
    district: string;

    @Column({ nullable: false })
    street: string;

    @Column({ type: 'integer', nullable: false })
    number: number;

    @Column({ nullable: false })
    trusteeName: string;

    @Column({ nullable: false, unique: true })
    trusteeEmail: string;

    @Column({ nullable: false, unique: true })
    trusteeCpf: string;

    @Column({ nullable: false })
    trusteePassword: string;

    @OneToMany(() => Resident, (resident: Resident) => resident.condominium)
    residents: Resident[];

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];
}