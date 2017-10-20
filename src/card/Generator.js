const Jimp = require('jimp');

module.exports = class Card {
  constructor() {
    this.name = "";
    this.description = "";
    this.creator = "";
    this.year = 0;

    this.attack = 0;
    this.defense = 0;

    this.cardtype = "monster/normal";
    this.level = 0; // Min: 0, Max: 12
    this.attribute = "";

    this.circulation = "";
    this.id = "";
    this.sysid = 0; // Referenced by Yu-Gi-Oh as the serial number, increases for each new card
    this.pictureUrl = "";
  }

  setName(_name) { this.name = _name; return this; }
  setDescription(_description) { this.description = _description; return this; }
  setCreator(_creator) { this.creator = _creator; return this; }
  setYear(_year) { this.year = _year; return this; }

  setAttDef(_attack, _defense) { this.attack = _attack; this.defense = _defense; return this; }
  setCardType(_cardtype, _modifier) { this.cardtype = _cardtype + "/" + _modifier; return this; }
  setAttribute(_attribute) { this.attribute = _attribute; return this; }

  setCirculation(_circulation) { this.circulation = _circulation; return this; }
  setID(_id) { this.id = _id; return this; }
  setPicture(_pictureUrl) { this. }

  setLevel(_level) {
    if(isNaN(_level) || _level < 0 || _level > 12) console.warn("Attempted to set level " + _level + " for a card!");
    else this.level = _level;
    return this;
  }

  setSystemID(_sysid) {
    if(isNaN(_sysid)) throw new Error("System ID for a card must be a number!");
    this.sysid = _sysid;
    return this;
  }

  generate() {

  }
}
