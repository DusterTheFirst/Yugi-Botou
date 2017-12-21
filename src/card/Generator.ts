import * as jimp from 'jimp';

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

    /** Card rarity */
    rarity: Rarity;

    private _cardtype: CardType;
    private _modifier: Modifier;
    /** Type of card */
    get cardtype() {
        return `${this._cardtype}/${this._modifier}`
    }

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
    attribute: Attribute;

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
    setName(name: string) { 
        this.name = name; 
        return this; 
    }
    /** Set the card's description */
    setDescription(description: string) { 
        this.description = description; 
        return this; 
    }
    /** Set the card's creator */
    setCreator(creator: string) {
        this.creator = creator; 
        return this;
    }
    /** Set the card's year */
    setYear(year: number) { 
        this.year = year; 
        return this;
    }

    /** Set the card's attack and defence */
    setAttDef(attack: number, defense: number) {
        this.attack = attack; 
        this.defense = defense;
        return this; 
    }
    /** Set the card's type */
    setCardType(cardtype: CardType, modifier: Modifier) { 
        this._cardtype = cardtype;
        this._modifier = modifier; 
        return this;
    }
    /** Set the card's rairity */
    setRairity(rairity: Rarity) {
        this.rarity = rairity;
        return this; 
    }
    /** Set the card's attrabute */
    setAttribute(attribute: Attribute) { 
        this.attribute = attribute;
        return this; 
    }
    /** Set the card's circulation */
    setCirculation(circulation: string) { 
        this.circulation = circulation; 
        return this; 
    }
    /** Set the card's ID */
    setID(id: string) { 
        this.id = id; 
        return this; 
    }
    /** Set the card's picture */
    setPicture(pictureUrl: string) { 
        this.pictureUrl = pictureUrl;
        return this;
    }
    /** Set the card's level */
    setLevel(level: number) {
        this.level = level;
        return this;
    }

    generate() {

    }
}

enum CardType {
    Monster = "Monster",
    Ritual = "Ritual",
    Fusion = "Fusion",
    Spell = "Spell",
    Trap = "Trap",
    Synchro = "Synchro",
    Xyz = "Xyz"
}

enum Modifier {
    Normal = "Normal",
    Effect = "Effect",
    Devine = "Devine",
    Gemini = "Gemini",
    Spirit = "Spirit",
    Toon = "Toon",
    Tuner = "Tuner",
    Union = "Union"
}

enum Attribute {
    Light = "Light",
    Dark = "Dark",
    Fire = "Fire",
    Water = "Water",
    Wind = "Wind",
    Earth = "Earth",
    Divine = "Divine"
}

enum Rarity {
    Common = "Common",
    Rare = "Rare",
    SuperRare = "Super Rare",
    UltraRare = "Ultra Rare",
    SecretRare = "Secret Rare",
    UltimiteRare = "Ultimite Rare"
}