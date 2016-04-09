'use strict';

import Assert from 'assert-js';
import Message from './../../Common/Network/Message';
import Player from './../../Engine/Player';
import Position from './../../Engine/Map/Area/Position';
import ServerMessages from './../../Common/Network/ServerMessages';

export default class CharacterLogoutMessage extends Message
{
    /**
     * @param {string} playerId
     */
    constructor(playerId)
    {
        super();

        Assert.string(playerId);

        this._name = ServerMessages.CHARACTER_LOGOUT;
        this._data = {
            id: playerId
        };
    }
}