import Daemon from '../js/Daemon';

test('Daemon constructor with MathChar', () => {
  const diablo = new Daemon('Diablo', 'Daemon');
  const expected = {
    name: 'Diablo',
    type: 'Daemon',
    level: 1,
    health: 100,
    _attack: 10,
    defence: 40,
    _stoned: undefined,
  };
  expect(diablo).toEqual(expected);
});

test('get/set stoned', () => {
  const diablo = new Daemon('Diablo', 'Daemon');
  diablo.stoned = true;
  const result = diablo.stoned;
  const expected = true;
  expect(result).toBe(expected);
});

test('set attack', () => {
  const diablo = new Daemon('Diablo', 'Daemon');
  diablo.attack = 100;
  const expected = {
    name: 'Diablo',
    type: 'Daemon',
    level: 1,
    health: 100,
    _attack: 100,
    defence: 40,
    _stoned: undefined,
  };
  expect(diablo).toEqual(expected);
});

test.each([
  [{ distance: 1, stoned: true }, 100],
  [{ distance: 1, stoned: false }, 100],
  [{ distance: undefined, stoned: true }, 0],
  [{ distance: 2, stoned: true }, 85],
  [{ distance: 3, stoned: true }, 72],
  [{ distance: 4, stoned: true }, 60],
  [{ distance: 5, stoned: true }, 48],
  [{ distance: 10, stoned: true }, 0],
])(('get attack'), (params, expected) => {
  const diablo = new Daemon('Diablo', 'Daemon');
  diablo.distance = params.distance;
  diablo.attack = 100;
  diablo.stoned = params.stoned;
  const result = diablo.attack;
  expect(result).toBe(expected);
});
