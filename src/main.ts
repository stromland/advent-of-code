import { readDayInput } from './utils/read-day-input';

async function main(): Promise<void> {
  const { YEAR, DAY, PART } = process.env;
  console.log('Year: %d, Day: %d, Part: %d', YEAR, DAY, PART);

  const { part1, part2 } = await import(`./${YEAR}/day-${DAY}/day-${DAY}.js`);
  const input = readDayInput(Number(YEAR), Number(DAY), 'PUZZLE');

  if (PART === '1') {
    const answer = part1(input);
    console.log(`Answer: ${answer}`);
  }
  if (PART === '2') {
    const answer = part2(input);
    console.log({ answer });
  }
}

main();
