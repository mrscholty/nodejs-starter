import {describe, it, expect} from "vitest";
import {add} from '../../src/bll/module1.bll.js';

describe('add', function () {
    it('should return 3', function () {
        const result = add(1, 2);
        expect(result).to.equal(3);
    });
});