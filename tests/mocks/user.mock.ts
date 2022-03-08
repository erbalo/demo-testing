import { IUser } from '../../src/domain/models/users/user.interface';

export const ValidUser: IUser = {
    age: 18,
    name: 'JC',
    created_at: new Date(),
    id: '546789',
};

export const InvalidUser: IUser = {
    age: 18,
    name: 'sgs',
    created_at: new Date(),
    id: '546789',
};
