import 'reflect-metadata';
import * as sinon from 'sinon';
import { UserRequest } from '../../src/domain/models/users/requests/user.request';
import UserRepository from '../../src/repositories/user.repository';
import UserService from '../../src/services/user.service';
import { ValidUser } from '../mocks/user.mock';

jest.mock('../../src/repositories/user.repository');

describe('Should validate the user.service functionality', () => {
    it('should create a user representation giving a user request', async () => {
        const request: UserRequest = ValidUser;
        const mockSave = jest.fn();
        UserRepository.prototype.save = mockSave;
        mockSave.mockReturnValue(ValidUser);

        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);

        const user = await userService.create({
            age: request.age,
            name: request.name,
        });

        expect(user.name).toBe(request.name);
    });

    it('should create a user representation giving a user request using sinon create instance', async () => {
        const request: UserRequest = ValidUser;

        const userRepository = sinon.createStubInstance(UserRepository);
        userRepository.save.returns(Promise.resolve(ValidUser));

        const userService = new UserService(userRepository);
        const user = await userService.create({
            age: request.age,
            name: request.name,
        });

        expect(user.name).toBe(request.name);
    });

    it('should create a user representation giving a user request using sinon interpolation', async () => {
        const request: UserRequest = ValidUser;
        const userRepository = new UserRepository();
        sinon.stub(userRepository, 'save').returns(Promise.resolve(ValidUser));

        const userService = new UserService(userRepository);
        const user = await userService.create({
            age: request.age,
            name: request.name,
        });

        expect(user.name).toBe(request.name);
    });

    it('should create a user representation giving a user request using sinon mock', async () => {
        const request: UserRequest = ValidUser;
        const userRepository = new UserRepository();
        const repoMock = sinon.mock(userRepository);
        repoMock.expects('save').returns(ValidUser);

        const userService = new UserService(userRepository);
        const user = await userService.create({
            age: request.age,
            name: request.name,
        });

        expect(user.name).toBe(request.name);
    });
});
