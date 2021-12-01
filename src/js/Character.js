export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length <= 10 && name.length >= 2) {
      this.name = name;
    } else throw new Error('Name must be more than 2 letters, less than 10 letters');

    const isType = Character.typeList.includes(type);
    if (isType) {
      this.type = type;
    } else throw new Error('Wrong character type');

    this.level = 1;
    this.health = 100;
    this.attack = null;
    this.defence = null;
  }

  static typeList = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.defence = Math.round(this.defence * 1.2);
      this.attack = Math.round(this.attack * 1.2);
      this.health = 100;
    } else throw new Error('Character is dead');
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else throw new Error('Why do you hit dead char?');
  }
}
