import { add, complete, cycle, save, suite } from 'benny';
import { readDayInput } from './utils/read-day-input';

async function benchmark(): Promise<void> {
  const [, , YEAR, DAY, TYPE] = process.argv;
  const type = TYPE ? `-${TYPE}` : '';
  const { part1, part2 } = await import(
    `./${YEAR}/day-${DAY}/day-${DAY}${type}.js`
  );
  const input = readDayInput(Number(YEAR), Number(DAY), 'PUZZLE');

  suite(
    `${YEAR}-day-${DAY}${type}`,
    add('part1', () => part1(input)),
    add('part2', () => part2(input)),
    cycle(),
    complete(),
    save({
      file: `day-${DAY}${type}`,
      folder: `benchmark/${YEAR}`,
    })
  );
}

benchmark();
