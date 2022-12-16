import { coerceIn } from '../../utils/math';
import { positionToString } from './print-grid';

export interface Position {
  x: number;
  y: number;
}

type Direction = 'U' | 'R' | 'D' | 'L';

export function add(a: Position, b: Position): Position {
  const [x, y] = [a.x + b.x, a.y + b.y];
  return { x, y };
}

export function subtract(a: Position, b: Position): Position {
  const [x, y] = [a.x - b.x, a.y - b.y];
  return { x, y };
}

export function distance(dx: number, dy: number): number {
  return Math.max(Math.abs(dx), Math.abs(dy));
}

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

        const sub = subtract(prev, current);
        const dist = distance(sub.x, sub.y);

        if (dist < 2) {
          continue;
        }

        const next: Position = {
          x: coerceIn(sub.x, -1, 1),
          y: coerceIn(sub.y, -1, 1),
        };

        knots[k].unshift(add(current, next));
      }
    }
  });

  return knots;
}

export function part1(input: string[]): number {
  const knots = moveRope(input, 2);
  // print([...knots]);
  return new Set(knots.reverse()[0].map(positionToString)).size;
}

export function part2(input: string[]): number {
  const knots = moveRope(input, 10);
  // print([...knots]);
  return new Set(knots.reverse()[0].map(positionToString)).size;
}
