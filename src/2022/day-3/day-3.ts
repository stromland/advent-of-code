import { chunk, collectUnique, sum } from '../../utils/collection';

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const allLetters = [...letters, ...letters.map((it) => it.toUpperCase())];

export function part1(input: string[]): number {
  return sum(input, (line) => {
    const c1 = line.slice(0, line.length / 2);
    const c2 = line.slice(line.length / 2, line.length);

    const s = collectUnique(c1, (item) => c2.indexOf(item) >= 0);

    return sum(s, (letter) => allLetters.indexOf(letter) + 1);
  });
}

export function part2(input: string[]): number {
  const chunked = chunk(input, 3);
  return sum(chunked, (list) => {
    const [a, b, c] = list;
    const set = collectUnique(
      a,
      (item) => b.indexOf(item) >= 0 && c.indexOf(item) >= 0
    );
    return sum(set, (letter) => allLetters.indexOf(letter) + 1);
  });
}
