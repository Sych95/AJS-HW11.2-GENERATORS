import Character from '../js/Character';

test('level up method test', () => {
  const char = new Character('Azmodan', 'Daemon');
  char.attack = 10;
  char.defence = 40;
  char.levelUp();
  const expected = {
    name: 'Azmodan', type: 'Daemon', level: 2, health: 100, attack: 12, defence: 48,
  };

  expect(char).toEqual(expected);
});

test('Try to level up when character is dead', () => {
  const char = new Character('Azmodan', 'Daemon');
  char.health = 0;
  const expected = new Error('Character is dead');
  expect(() => char.levelUp()).toThrowError(expected);
});
