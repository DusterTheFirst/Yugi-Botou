

module.exports = class Card {
  constructor() {
    this._name = "";
    this._description = "";
    this._creator = "";
    this._year = 0;

    this._attack = 0;
    this._defense = 0;

    this._cardtype = "monster/normal";
    this._level = 0; // Min: 0, Max: 12
    this._spelltraptype = "";
    this._attribute = "";

    this._circulation = "";
    this._id = "";
    this._sysid = 0; // Referenced by Yu-Gi-Oh as the serial number, increases for each new card
    this._pictureUrl = "";
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
