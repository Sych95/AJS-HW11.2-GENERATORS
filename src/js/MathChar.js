import Character from './Character';

export default class MathChar extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = undefined;
  }

  set stoned(value) {
    return this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(attack) {
    return this._attack = attack;
  }

  get attack() {
    if (this.distance) {
      let distanceModifier;
      switch (this.distance) {
        case 1: distanceModifier = 1; break;
        case 2: distanceModifier = 0.9; break;
        case 3: distanceModifier = 0.8; break;
        case 4: distanceModifier = 0.7; break;
        case 5: distanceModifier = 0.6; break;
        default: distanceModifier = 0; break;
      }
      this._attack = Math.floor(this._attack * distanceModifier);
    }

    if (this._stoned) {
      this._attack = Math.floor(this._attack - Math.log2(this.distance) * 5);
    }
    if (this._attack >= 0) {
      return this._attack;
    } return 0;
  }
}
