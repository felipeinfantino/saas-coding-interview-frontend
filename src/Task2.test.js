import { updateQuality } from "./Task2";

describe('Task2', () => {
    it('the quality of items decreases by 1 each day ', () => {
        let testProducts = [{
            name: 'test',
            type: 'NORMAL',
            quality: 30,
            sellIn: 12,
        }]
        expect(testProducts[0].quality).toBe(30)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(29)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(28)
    });

    it('quality of items of type TICKETS increases by 1  ', () => {
        let testProducts = [{
            name: 'test',
            type: 'TICKETS',
            quality: 30,
            sellIn: 12,
        }]
        expect(testProducts[0].quality).toBe(30)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(31)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(32)
    });

    it('if sellIn is below 10, the quality increases twice as fast (by 2) ', () => {
        let testProducts = [{
            name: 'test',
            type: 'TICKETS',
            quality: 30,
            sellIn: 9,
        }]
        expect(testProducts[0].quality).toBe(30)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(32)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(34)
    });

    it('if sellIn turns to 0, the quality drops to 0 as well', () => {
        let testProducts = [{
            name: 'test',
            type: 'TICKETS',
            quality: 30,
            sellIn: 1,
        }]
        expect(testProducts[0].quality).toBe(30)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(0)
    });

    it('the sellIn decreases by 1 each day, never below 0', () => {
        let testProducts = [{
            name: 'test',
            type: 'TICKETS',
            quality: 30,
            sellIn: 2,
        }]
        expect(testProducts[0].sellIn).toBe(2)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].sellIn).toBe(1)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].sellIn).toBe(0)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].sellIn).toBe(0)
    });

    it('if the sellIn is 0, item quality decreases twice as fast', () => {
        let testProducts = [{
            name: 'test',
            type: 'NORMAL',
            quality: 30,
            sellIn: 0,
        }]
        expect(testProducts[0].quality).toBe(30)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(28)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(26)
    });

    it('quality is never below 0', () => {
        let testProducts = [{
            name: 'test',
            type: 'NORMAL',
            quality: 0,
            sellIn: 0,
        }]
        expect(testProducts[0].quality).toBe(0)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(0)
    });

    it('quality is never below 0, even secondHand products', () => {
        let testProducts = [{
            name: 'test',
            type: 'NORMAL',
            quality: 0,
            sellIn: 2,
            isSecondHand: true
        }]
        expect(testProducts[0].quality).toBe(0)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(0)
    });

    it('isSecondHand makes the quality decrease by 2 each day even if the sellIn is greater than 0', () => {
        let testProducts = [{
            name: 'test',
            type: 'NORMAL',
            quality: 6,
            sellIn: 2,
            isSecondHand: true,
        }]
        expect(testProducts[0].quality).toBe(6)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(4)
        testProducts = updateQuality(testProducts)
        expect(testProducts[0].quality).toBe(2)
    });


});
