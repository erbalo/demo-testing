import 'reflect-metadata';
import * as sinon from 'sinon';
import UserRepository from '../../src/repositories/user.repository';
import UserService from '../../src/services/user.service';
import { UserRequest } from '../../src/domain/models/users/requests/user.request';
import { InvalidUser, ValidUser } from '../mocks/user.mock';

let userRepository;
let userService;

describe('Should validate the user.service functionality', () => {
    beforeEach(() => {
        userRepository = sinon.createStubInstance(UserRepository);
        userService = new UserService(userRepository);
    });

    it('should create a user representation giving a user request using sinon create instance', async () => {
        const request: UserRequest = ValidUser;
        userRepository.save.returns(Promise.resolve(ValidUser));

        const user = await userService.create({
            age: request.age,
            name: request.name,
        });

        expect(user.name).toBe(request.name);
    });

    it('should validate a not valide user name representation giving a user request using sinon create instance', async () => {
        const request: UserRequest = ValidUser;
        userRepository.save.returns(Promise.resolve(InvalidUser));

        const user = await userService.create({
            age: request.age,
            name: request.name,
        });

        expect(user.name).not.toBe(request.name);
    });
});
