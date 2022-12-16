import { Position } from './day-9';

export function positionToString(pos: Position): string {
  return `x:${pos.x},y:${pos.y}`;
}

export function print(grid: Position[][]): void {
  const { highest, lowest } = getHighestAndLowest(grid[0]);
  const tail = grid.reverse()[0];

  const visited = new Set(tail.map(positionToString));

  let line = '';
  for (let y = highest.y; y >= lowest.y; y--) {
    for (let x = lowest.x; x <= highest.x; x++) {
      line += visited.has(positionToString({ x, y })) ? '#' : '.';
    }
    line += '\n';
  }

  console.log(line);
}

function getHighestAndLowest(knots: Position[]): {
  highest: Position;
  lowest: Position;
} {
  const highest: Position = { x: 0, y: 0 };
  const lowest: Position = { x: 0, y: 0 };

  knots.forEach((it) => {
    if (it.x > highest.x) {
      highest.x = it.x;
    }
    if (it.y > highest.y) {
      highest.y = it.y;
    }
    if (it.x < lowest.x) {
      lowest.x = it.x;
    }
    if (it.y < lowest.y) {
      lowest.y = it.y;
    }
  });

  return {
    highest,
    lowest,
  };
}
