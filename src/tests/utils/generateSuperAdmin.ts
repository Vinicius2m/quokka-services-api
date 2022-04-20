import { v4 } from 'uuid';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const generateSuperAdm = () => {
    const name = faker.name.firstName().toLowerCase();
    const username = faker.name.firstName().toLowerCase();
    const word = faker.word.adjective();
    const password = bcrypt.hashSync(faker.word.preposition(4), 10);

    return {
        uuid: v4(),
        name,
        email: `${username}@${word}.com`,
        password,
    };
};

export { generateSuperAdm };
