import {add} from '../../src/bll/module1.bll.js';
import {expect} from 'chai';

describe('add', function () {
    it('should return 3', function () {
        const result: number = add(1, 2);
        expect(result).to.equal(3);
    });
});