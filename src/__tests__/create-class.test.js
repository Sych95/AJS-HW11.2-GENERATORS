import Character from '../js/Character';

test('Check class creation', () => {
  const result = {
    name: 'Azmodan', type: 'Daemon', level: 1, health: 100, attack: null, defence: null,
  };
  const expected = new Character('Azmodan', 'Daemon');
  expect(result).toEqual(expected);
});

test('error throw name', () => {
  const result = new Error('Name must be more than 2 letters, less than 10 letters');

  expect(() => new Character.prototype.constructor('a', 'Daemon')).toThrowError(result);
});

test('error throw type', () => {
  const result = new Error('Wrong character type');

  expect(() => new Character.prototype.constructor('Azmodan', 'Angel')).toThrowError(result);
});
