import { positionToString } from './print-grid';

export interface Position {
  x: number;
  y: number;
}

type Direction = 'U' | 'R' | 'D' | 'L';

function moveKnot(pos: Position, direction: Direction): Position {
  const next = { ...pos };
  if (direction === 'U') {
    next.y++;
  }
  if (direction === 'D') {
    next.y--;
  }
  if (direction === 'R') {
    next.x++;
  }
  if (direction === 'L') {
    next.x--;
  }
  return next;
}

function nextMoves(prev: Position, current: Position): Direction[] {
  const xDiff = prev.x - current.x;
  const yDiff = prev.y - current.y;

  const diagonalUD: Direction[] =
    yDiff === 1 ? ['U'] : yDiff === -1 ? ['D'] : [];
  const diagonalRL: Direction[] =
    xDiff === 1 ? ['R'] : xDiff === -1 ? ['L'] : [];

  if (xDiff === 2) {
    return ['R', ...diagonalUD];
  }
  if (xDiff === -2) {
    return ['L', ...diagonalUD];
  }
  if (yDiff === 2) {
    return ['U', ...diagonalRL];
  }
  if (yDiff === -2) {
    return ['D', ...diagonalRL];
  }
  return [];
}

// Works only for part 1
function moveRope(input: string[], numKnots: number): Position[][] {
  const knots = Array.from({ length: numKnots }, (): Position[] => [
    { x: 0, y: 0 },
  ]);

  input.forEach((instruction) => {
    const [direction, steps] = instruction.split(' ') as [Direction, string];

    for (let i = 0; i < Number(steps); i++) {
      // Move head
      const head = moveKnot(knots[0][0], direction);
      knots[0].unshift(head);

      for (let k = 1; k < knots.length; k++) {
        const prev = knots[k - 1][0];
        const current = knots[k][0];
        const next = nextMoves(prev, current).reduce(moveKnot, current);

        if (positionToString(current) !== positionToString(next)) {
          knots[k].unshift(next);
        }
      }
    }
  });

  return knots;
}

export function part1(input: string[]): number {
  const knots = moveRope(input, 2);
  return new Set(knots.reverse()[0].map(positionToString)).size;
}
