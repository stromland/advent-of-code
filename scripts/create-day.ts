import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fetchPuzzleInput } from './fetch-puzzle-input';
import { readEnvFile } from './read-env-file';

const [, , DAY] = process.argv;

const day = Number(DAY);
if (Number.isNaN(day)) {
  throw new Error('argument is not a number');
}

const env = readEnvFile();
const SESSION = env.get('SESSION');
const YEAR = env.getNumber('YEAR');

async function createDay(): Promise<void> {
  const name = `day-${day}`;

  const dayDir = resolve(__dirname, `../src/${YEAR}/${name}`);
  mkdirSync(dayDir);

  const puzzleInput = await fetchPuzzleInput(YEAR, day, SESSION);

  // day-X-puzzle-input.txt
  writeFileSync(resolve(dayDir, `${name}-puzzle-input.txt`), puzzleInput);

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
}

createDay();
