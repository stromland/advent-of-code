import { sum } from '../../utils/collection';

function runDiskUsage(input: string[]): Record<string, number> {
  let parentDirs: string[] = [];
  let listing = false;
  return input.reduce((dirs, line) => {
    if (line.startsWith('$')) {
      listing = false;
      const [, command, to] = line.split(' ');
      if (command === 'cd') {
        switch (to) {
          case '/':
            parentDirs = [];
            break;
          case '..': {
            parentDirs.pop();
            break;
          }
          default:
            parentDirs.push(to);
        }
      }
      if (command === 'ls') {
        listing = true;
      }
    }
    if (listing) {
      const [count] = line.split(' ').map(Number);
      if (Number.isInteger(count)) {
        for (let i = 0; i <= parentDirs.length; i++) {
          const key = parentDirs.slice(0, i).join('/');
          dirs[key] = (dirs[key] ?? 0) + count;
        }
      }
    }
    return dirs;
  }, {} as Record<string, number>);
}

export function part1(input: string[]): number {
  const diskUsageSummary = runDiskUsage(input);
  return sum(
    Object.values(diskUsageSummary).filter((it) => it <= 100000),
    (it) => it
  );
}

export function part2(input: string[]): number {
  const diskUsageSummary = runDiskUsage(input);

  const totalUsage = diskUsageSummary[''];
  const spaceAvailable = 70000000 - totalUsage;
  const spaceToClean = 30000000 - spaceAvailable;

  return Object.values(diskUsageSummary)
    .filter((size) => spaceToClean <= size)
    .sort((a, b) => a - b)[0];
}
