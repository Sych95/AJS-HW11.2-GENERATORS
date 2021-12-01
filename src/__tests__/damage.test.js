import Character from '../js/Character';

test('Damage test', () => {
  const char = new Character('Azmodan', 'Daemon');
  char.defence = 40;
  char.attack = 10;
  char.damage(5);

  const expected = {
    name: 'Azmodan', type: 'Daemon', level: 1, health: 97, attack: 10, defence: 40,
  };
  expect(char).toEqual(expected);
});

test('Damage when health < =0', () => {
  const char = new Character('Azmodan', 'Daemon');
  char.health = 0;

  const expected = new Error('Why do you hit dead char?');
  expect(() => char.damage(5)).toThrowError(expected);
});
