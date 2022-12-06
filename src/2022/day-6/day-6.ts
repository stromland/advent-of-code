function getMarkerStart(line: string, uniqueChars: number): number {
  const marker: string[] = [];
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    marker.push(char);

    if (new Set(marker).size !== marker.length) {
      marker.shift();
    }
    if (marker.length === uniqueChars) {
      return i + 1;
    }
  }
  return 0;
}

export function part1(input: string[]): number {
  const line = input[0];
  return getMarkerStart(line, 4);
}

export function part2(input: string[]): number {
  const line = input[0];
  return getMarkerStart(line, 14);
}
