'use strict';

const Assert = require('assert-js');
const Message = require('./../../Common/Network/Message');
const Player = require('./../../Engine/Player');
const ServerMessages = require('./../../Common/Network/ServerMessages');

class MoveMessage extends Message
{
    /**
     * @param {Player} player
     */
    constructor(player)
    {
        super();

        Assert.instanceOf(player, Player);

        this._name = ServerMessages.MOVE;
        this._data = {
            x: player.position.x,
            y: player.position.y,
            moveTime: (player.moveEnds === 0) ? 0 : player.moveEnds - new Date()
        };
    }
}

module.exports = MoveMessage;