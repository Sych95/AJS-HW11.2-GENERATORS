import Person from "./Person";

export default class Team {
  constructor() {
    this.members = new Set();
  }
  *[Symbol.iterator]() {
      let list = this.toArray();
      for(let item of list) {
        let character = new Person(item);
        yield character;
      }
  };

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else { throw new Error('Team already has this character'); }
  }

  addAll(...characterList) {
    for (const character of characterList) {
      this.members.add(character);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
