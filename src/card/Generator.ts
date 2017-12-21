import { Url } from "url";

const Jimp = require('jimp');

module.exports = class Card {
    /** Name of the card */
    name: string = "";

    /** Card description */
    description: string = "";

    /** Creator of the card */
    creator: string = "";

    /** Card year */
    year: number = 0;

    /** Card attack */
    attack: number = 0;

    /** Card defence */
    defense: number = 0;

    /** Type of card */
    cardtype: string = "monster/normal"; //ENUM?

    private _level: number = 0;
    /** Card level */
    get level(): number {
        return this._level;
    }

    /** Card level */
    set level(level: number) {
        if (level < 0)
            level = 0;
        
        if (level > 12)
            level = 12;

        this._level = level;
    }

    /** Card attrabute */
    attribute: string; // ENUM?

    /** Card circulation */
    circulation: string; // ENUM?

    /** Card ID */
    id: string;

    /** 
     * Card System ID
     * Referenced by Yu-Gi-Oh as the serial number, increases for each new card
     */
    readonly sysid: number;

    /** Picture URL */
    pictureUrl: string = '';

    constructor(sysid: number) {
        this.sysid = sysid;
    }

    /** Set the card's name */
    setName(_name: string) { 
        this.name = _name; 
        return this; 
    }
    /** Set the card's description */
    setDescription(_description: string) { 
        this.description = _description; 
        return this; 
    }
    /** Set the card's creator */
    setCreator(_creator: string) {
        this.creator = _creator; 
        return this;
    }
    /** Set the card's year */
    setYear(_year: number) { 
        this.year = _year; 
        return this;
    }

    /** Set the card's attack and defence */
    setAttDef(_attack: number, _defense: number) {
        this.attack = _attack; 
        this.defense = _defense;
        return this; 
    }
    /** Set the card's type */
    setCardType(_cardtype: string, _modifier: string) { 
        //ENUM??
        this.cardtype = _cardtype + "/" + _modifier; 
        return this;
    }
    /** Set the card's attrabute*/
    setAttribute(_attribute: string) { 
        this.attribute = _attribute;
        return this; 
    }
    /** Set the card's circulation */
    setCirculation(_circulation: string) { 
        this.circulation = _circulation; 
        return this; 
    }
    /** Set the card's ID */
    setID(_id: string) { 
        this.id = _id; 
        return this; 
    }
    /** Set the card's picture */
    setPicture(_pictureUrl: string) { 
        this.pictureUrl = _pictureUrl;
        return this;
    }
    /** Set the card's level */
    setLevel(_level: number) {
        this.level = _level;
        return this;
    }

    generate() {
        
    }
}
