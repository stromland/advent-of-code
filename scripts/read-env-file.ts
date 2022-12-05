import { readFileSync } from 'fs';
import { resolve } from 'path';

class Env {
  private envs: Record<string, string>;
  constructor(envs: Record<string, string>) {
    this.envs = envs;
  }

  get(key: string): string {
    const value = this.envs[key];
    if (!value) {
      throw new Error(`${key} is not defined in .env`);
    }

    return value;
  }

  getNumber(key: string): number {
    const value = Number(this.get(key));
    if (Number.isNaN(value)) {
      throw new Error(`${key} is not a number`);
    }
    return value;
  }
}

export function readEnvFile(): Env {
  const envs = readFileSync(resolve(__dirname, '../.env'))
    .toString()
    .split('\n')
    .filter((it) => it.length > 0)
    .reduce((envMap, line) => {
      const [key, value] = line.replace('=', ' ').split(' ');
      envMap[key] = value;
      return envMap;
    }, {} as Record<string, string>);
  return new Env(envs);
}
