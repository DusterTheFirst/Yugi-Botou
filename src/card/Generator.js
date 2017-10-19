const node-canvas = require('node-canvas');
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

    this._canvas = nodeCanvas
  }

  setName(name) {
    this._name = name;
    return this;
  }

  setDescription(description) {
    this._description = description;
  }

  setLevel(level) {
    if(isNaN(level) || level < 0 || level > 12) console.warn("Attempted to set level " + level + " for a card!");
    else this._level = level;
    return this;
  }

  generate() {

  }
}
