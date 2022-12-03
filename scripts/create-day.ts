import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const YEAR = 2022;
const { DAY } = process.env;

const day = Number(DAY);
if (Number.isNaN(day)) {
  throw new Error('Env DAY is not a number');
}

const name = `day-${day}`;

const dayDir = resolve(__dirname, `../src/${YEAR}/${name}`);
mkdirSync(dayDir);

// day-X-puzzle-input.txt
writeFileSync(resolve(dayDir, `${name}-puzzle-input.txt`), '');

// day-X-test-input.txt
writeFileSync(resolve(dayDir, `${name}-test-input.txt`), '');

// day-X.test.ts
writeFileSync(
  resolve(dayDir, `${name}.test.ts`),
  `import { readDayInput } from '../../utils/read-day-input';
import { part1, part2 } from './day-${day}';

const testInput = readDayInput(${YEAR}, ${day}, 'TEST');

describe('day-${day}', () => {
  test('part1', () => {
    const answer = part1(testInput);
    expect(answer).toBe(-1);
  });

  xtest('part2', () => {
    const answer = part2(testInput);
    expect(answer).toBe(-1);
  });
});
`
);

// day-X.ts
writeFileSync(
  resolve(dayDir, `${name}.ts`),
  `export function part1(input: string[]): number {
  return 0;
}

export function part2(input: string[]): number {
  return 0;
}
`
);
