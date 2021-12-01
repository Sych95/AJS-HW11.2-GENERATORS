import MathChar from './MathChar';

export default class Daemon extends MathChar {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
