import { faker } from '@faker-js/faker';
import { Person } from './types';

export const createPerson = (): Person  => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number(40),
        visits: faker.datatype.number(1000),
        progress: faker.datatype.number(100),
        status: faker.helpers.shuffle<Person['status']>([
            'status one',
            'status two',
            'status three'
        ])[0]!
    }
}

export const createPersonData = (rows: number): Person[] => {
    const data: Person[] = [];
    Array.from({ length: rows }).forEach(() => {
        data.push(createPerson())
    });
    return data; 
}