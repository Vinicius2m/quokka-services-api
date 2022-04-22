import { Repository, getRepository } from 'typeorm';

import Condominium from '../../entities/Condominium';
import { ICondominium, ICondominiumRepository } from './interface';

class CondominiumRepository implements ICondominiumRepository {
    private ormRepository: Repository<Condominium>;

    constructor() {
        this.ormRepository = getRepository(Condominium);
    }

    saveCondominium = async (
        condominium: ICondominium,
    ): Promise<ICondominium> => {
        return await this.ormRepository.save(condominium);
    };

    findCondominium = async (): Promise<ICondominium[]> => {
        return await this.ormRepository.find();
    };

    findCondominiumById = async (
        condominium_id: string,
    ): Promise<ICondominium> => {
        return await this.ormRepository.findOne(condominium_id);
    };

    findByEmail = async (condominium_email: string): Promise<ICondominium> => {
        return await this.ormRepository.findOne({
            // select: ['trusteeEmail'],
            where: { trusteeEmail: condominium_email },
        });
    };

    updateCondominium = async (
        condominium: ICondominium,
    ): Promise<ICondominium> => {
        return await this.ormRepository.save(condominium);
    };

    deleteCondominium = async (condominium_id: string): Promise<void> => {
        await this.ormRepository.delete(condominium_id);
    };
}

export { CondominiumRepository, ICondominiumRepository, ICondominium };
