type Operation = 'addx' | 'noop';

type Instruction = {
  operation: Operation;
  value: number;
};

const strengthCycles = [20, 60, 100, 140, 180, 220];

function getSignalStrength(cycles: number, register: number): number {
  return strengthCycles.includes(cycles) ? cycles * register : 0;
}

function parseInstructions(input: string[]): Instruction[] {
  return input.map((it) => {
    const [operation, value] = it.split(' ') as [Operation, string];
    return { operation, value: Number(value) };
  });
}

function runProgram<T>(
  input: string[],
  onInstruction: (x: number) => T,
  onCycle: (cycles: number, x: number, val: T) => number
): void {
  let cycles = 0;
  let x = 1;
  parseInstructions(input).forEach((ins) => {
    const value = onInstruction(x);
    const insCycles = ins.operation === 'addx' ? 2 : 1;
    for (let i = 0; i < insCycles; i++) {
      cycles = onCycle(cycles, x, value);
    }
    if (ins.operation === 'addx') {
      x += ins.value;
    }
  });
}

export function part1(input: string[]): number {
  let strength = 0;
  runProgram(
    input,
    () => 0,
    (cycles, x) => {
      cycles++;
      strength += getSignalStrength(cycles, x);
      return cycles;
    }
  );

  return strength;
}

function getSprite(register: number): string[] {
  return Array.from({ length: 40 }, () => '.').map((it, index) =>
    register - 1 <= index && register + 1 >= index ? '#' : it
  );
}

export function part2(input: string[]): string[][] {
  const display: string[][] = [];
  runProgram(input, getSprite, (cycles, x, sprite) => {
    const pixel = sprite[cycles % 40];
    const row = Math.floor(cycles / 40);
    if (!display[row]) {
      display[row] = [pixel];
    } else {
      display[row].push(pixel);
    }
    return cycles + 1;
  });
  return display;
}
