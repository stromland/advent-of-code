import { sum } from '../../utils/collection';

const playerOne = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissor
} as const;

const playerTwo = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissor
} as const;

type P1 = keyof typeof playerOne;
type P2 = keyof typeof playerTwo;

const drawMap: Record<P1, P2> = {
  A: 'X',
  B: 'Y',
  C: 'Z',
};

const loosingMap: Record<P1, P2> = {
  A: 'Z',
  B: 'X',
  C: 'Y',
};

const winningMap: Record<P1, P2> = {
  A: 'Y',
  B: 'Z',
  C: 'X',
};

function resolveMatch(p1: P1, p2: P2): number {
  if (winningMap[p1] === p2) {
    return 6;
  }
  if (loosingMap[p1] === p2) {
    return 0;
  }

  return 3;
}

function applyPart2Rule(p1: P1, p2: P2): P2 {
  if (p2 === 'X') {
    return loosingMap[p1];
  }
  if (p2 === 'Y') {
    return drawMap[p1];
  }
  if (p2 === 'Z') {
    return winningMap[p1];
  }
  return p2;
}

export function part1(input: string[]): number {
  return sum(input, (round) => {
    const game = round.split(' ');
    const p1 = game[0] as P1;
    const p2 = game[1] as P2;
    const roundScore = resolveMatch(p1, p2);

    return roundScore + playerTwo[p2];
  });
}

export function part2(input: string[]): number {
  return sum(input, (round) => {
    const game = round.split(' ');
    const p1 = game[0] as P1;
    const p2 = game[1] as P2;

    const modifiedP2 = applyPart2Rule(p1, p2);
    const roundScore = resolveMatch(p1, modifiedP2);

    return roundScore + playerTwo[modifiedP2];
  });
}
