import { request } from 'https';
import { URL } from 'url';

export function fetchPuzzleInput(
  year: number,
  day: number,
  session: string
): Promise<Buffer> {
  const url = new URL(`https://adventofcode.com/${year}/day/${day}/input`);
  return new Promise((resolve, reject) => {
    const req = request(
      {
        hostname: url.hostname,
        path: url.pathname,
        method: 'GET',
        headers: {
          Cookie: `session=${session}`,
        },
      },
      (res) => {
        console.log(`Puzzle Input Day ${day}: ${res.statusCode}`);
        res.on('data', (data) => resolve(data));
      }
    );
    req.on('error', (err) => reject(err));

    req.end();
  });
}
