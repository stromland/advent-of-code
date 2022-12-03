export function collectUnique<T>(
  arr: Iterable<T> | ArrayLike<T>,
  predicate: (item: T) => boolean = () => true
): Set<T> {
  return Array.from(arr).reduce((set, item) => {
    if (predicate(item)) {
      set.add(item);
    }
    return set;
  }, new Set<T>());
}

export function chunk<T>(
  arr: Iterable<T> | ArrayLike<T>,
  chunkSize: number
): T[][] {
  return Array.from(arr).reduce((list, item) => {
    const index = list.length - 1;

    if (list[index] === undefined || list[index].length === chunkSize) {
      list.push([item]);
      return list;
    }

    list[index].push(item);
    return list;
  }, [] as T[][]);
}

export function sum<T>(
  arr: Iterable<T> | ArrayLike<T>,
  fn: (value: T) => number
): number {
  return Array.from(arr).reduce((total, next) => total + fn(next), 0);
}
