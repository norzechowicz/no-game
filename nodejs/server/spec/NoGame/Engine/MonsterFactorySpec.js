describe("Monster Factory", () => {
    const Assert = require('assert-js');
    const MonsterFactory = require('./../../../src/NoGame/Engine/MonsterFactory');
    const Position = require('./../../../src/NoGame/Engine/Map/Area/Position');
    const TestKit = require('../TestKit/TestKit');

    let clock = null;

    beforeEach(() => {
        clock = new TestKit.ManualClock(new Date().getTime());
    });

    it("it creates monster from template", () => {
        let factory = new MonsterFactory(clock);
        factory.addTemplate('rat', 5, 1, 100, 5, 500, 5);

        let monster = factory.create('rat', new Position(0, 0), "123123123");

        Assert.equal(monster.health, 100);
        Assert.equal(monster.spriteId, 1);
        Assert.equal(monster.name, "rat");
    });

    it("throws exception when there is no template for a monster", () => {
        let factory = new MonsterFactory(clock);

        try {
            factory.create("bobok", new Position(1, 1), "123123123");
        } catch (e) {
            Assert.equal(e.toString(), `Monster "bobok" does not have valid template.`);
        }
    });
});