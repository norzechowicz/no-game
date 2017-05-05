describe("Spawn", () => {
    const expect = require('expect.js');
    const Spawn = require('./../../../src/NoGame/Engine/Spawn');
    const MonsterFactory = require('./../../../src/NoGame/Engine/MonsterFactory');
    const Position = require('./../../../src/NoGame/Engine/Map/Area/Position');

    let monsterFactory = new MonsterFactory();
    monsterFactory.addTemplate("rat", 1, 100, 5, 500, 5);

    it("it knows when its full", () => {
        let spawn = new Spawn("rat", 1, 1000, new Position(20, 20), 10);

        spawn.spawnMonster(monsterFactory, spawn.randomPosition);

        expect(() => {spawn.spawnMonster(monsterFactory, spawn.randomPosition);})
            .to.throwError(`Spawn ${spawn.id} for "${spawn.monsterName}" is full.`);
    });

    it("it throws exception when not ready to spawn new monster", () => {
        let spawn = new Spawn("rat", 10, 1000, new Position(20, 20), 10);

        spawn.spawnMonster(monsterFactory, spawn.randomPosition);

        expect(() => {spawn.spawnMonster(monsterFactory, spawn.randomPosition);})
            .to.throwError(`Spawn ${spawn.id} for "${spawn.monsterName}" is not ready for new monster yet.`);
    });

    it("is not full by default", () => {
        let spawn = new Spawn("rat", 1, 1000, new Position(20, 20), 10);

        expect(spawn.isFull).to.be(false);
    });
});