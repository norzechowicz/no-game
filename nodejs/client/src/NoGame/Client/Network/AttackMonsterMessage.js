'use strict';

import Assert from 'assert-js';
import NetworkMessage from './../../Common/NetworkMessage';
import ClientMessages from './../../Common/ClientMessages';

export default class AttackMonsterMessage extends NetworkMessage
{
    /**
     * @param {string} monsterId
     */
    constructor(monsterId)
    {
        super();

        Assert.string(monsterId);

        this._name = ClientMessages.ATTACK_MONSTER;
        this._data = {id: monsterId};
    }
}