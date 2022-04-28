import 'reflect-metadata';

import { describe, it, expect } from '@jest/globals';
import { getConnection, QueryRunner } from 'typeorm';
import request from 'supertest';
import { v4 } from 'uuid';

import app from './../../app';
import connection from '../../database';
import { generateSuperAdm } from '../utils/generateSuperAdmin';

const superadm = generateSuperAdm();

describe('Create Super Admin', () => {
    beforeAll(async () => {
        await connection();
    });

    it('should be able to register a SUPER ADMIN', async () => {
        const response = await request(app).post(`/super_adm`).send(superadm);
        const { body } = response;

        expect(response.statusCode).toBe(201);
        expect(body.name).toBe(superadm.name);
        expect(body.email).toBe(superadm.email);
    });

    afterAll(async () => {
        const defaultConnection = getConnection('default');
        await defaultConnection.close();
    });
});