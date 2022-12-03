import { readFileSync } from 'fs';
import { resolve } from 'path';

type InputType = 'PUZZLE' | 'TEST';

export function readDayInput(
  year: number,
  day: number,
  type: InputType
): string[] {
  const file = getDayInputFile(year, day, type);
  return readFileSync(file).toString().split('\n');
}

function getDayInputFile(year: number, day: number, type: InputType): string {
  const inputType = type === 'PUZZLE' ? 'puzzle-input' : 'test-input';
  return resolve(
    __dirname,
    `../../src/${year}/day-${day}/day-${day}-${inputType}.txt`
  );
}
