import * as jimp from 'jimp';

export class Card {
    /** Name of the card */
    name: string = "";

    /** Card description */
    description: string = "";

    /** Creator of the card */
    creator: string = "";

    /** Card year */
    year: number = new Date(Date.now()).getFullYear();

    /** Card attack */
    attack: number = 0;

    /** Card defence */
    defense: number = 0;

    /** Card rarity */
    rarity: Rarity;

    private _cardtype: CardType = CardType.Monster;
    private _modifier: Modifier = Modifier.Normal;
    /** Type of card */
    get cardtype() {
        return `${this._cardtype}/${this._modifier}`;
    }

    private _level: number = 1;
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
    attribute: Attribute = Attribute.Light;

    /** Card circulation */
    circulation: string;

    private _id1: string;
    private _id2: number;
    /** Card ID */
    get id() {
        return `${this._id1}-${this._id2}`;
    }

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
    setName(name: string): this { 
        this.name = name; 
        return this; 
    }
    /** Set the card's description */
    setDescription(description: string): this { 
        this.description = description; 
        return this; 
    }
    /** Set the card's creator */
    setCreator(creator: string): this {
        this.creator = creator; 
        return this;
    }
    /** Set the card's year */
    setYear(year: number): this { 
        this.year = year; 
        return this;
    }

    /** Set the card's attack and defence */
    setAttDef(attack: number, defense: number): this {
        this.attack = attack; 
        this.defense = defense;
        return this; 
    }
    /** Set the card's type */
    setCardType(cardtype: CardType, modifier: Modifier): this { 
        this._cardtype = cardtype;
        this._modifier = modifier; 
        return this;
    }
    /** Set the card's rairity */
    setRairity(rairity: Rarity): this {
        this.rarity = rairity;
        return this; 
    }
    /** Set the card's attrabute */
    setAttribute(attribute: Attribute): this { 
        this.attribute = attribute;
        return this; 
    }
    /** Set the card's circulation */
    setCirculation(circulation: string): this { 
        this.circulation = circulation; 
        return this; 
    }
    /** Set the card's ID */
    setID(id1: string, id2?: number): this { 
        if (id1.includes('-')) {
            let split = id1.split('-');
            if (isNaN(split[1] as any)) {
                this._id1 = id1;
                this._id2 = id2;
            }
            this._id1 = split[0],
            this._id2 = parseInt(split[1]);
        } else {
            this._id1 = id1;
            this._id2 = id2;
        }
        return this; 
    }
    /** Set the card's picture */
    setPicture(pictureUrl: string): this { 
        this.pictureUrl = pictureUrl;
        return this;
    }
    /** Set the card's level */
    setLevel(level: number): this {
        this.level = level;
        return this;
    }

    generate() {

    }
}

export enum CardType {
    Monster = "monster",
    Ritual = "ritual",
    Fusion = "fusion",
    Spell = "spell",
    Trap = "trap",
    Synchro = "synchro",
    Xyz = "xyz"
}

export enum Modifier {
    Normal = "normal",
    Effect = "effect",
    Devine = "devine",
    Gemini = "gemini",
    Spirit = "spirit",
    Toon = "toon",
    Tuner = "tuner",
    Union = "union"
}

export enum Attribute {
    Light = "light",
    Dark = "dark",
    Fire = "fire",
    Water = "water",
    Wind = "wind",
    Earth = "earth",
    Divine = "divine"
}

export enum Rarity {
    Common = "common",
    Rare = "rare",
    SuperRare = "superrare",
    UltraRare = "ultrarare",
    SecretRare = "secretrare",
    UltimateRare = "ultimaterare"
}