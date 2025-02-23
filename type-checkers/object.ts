export const isKeyOf = (
  val: unknown,
  reference: object,
): val is keyof typeof reference => {
  return Object.keys(reference).includes(val as keyof typeof reference);
};

export const isValueOf = (
  val: unknown,
  reference: object,
): val is (typeof reference)[keyof typeof reference] => {
  return Object.values(reference).includes(val);
};

export const isKeyOrValueOf = (
  val: unknown,
  reference: object,
): val is
  | (typeof reference)[keyof typeof reference]
  | keyof typeof reference => {
  return isKeyOf(val, reference) || isValueOf(val, reference);
};

export const checkIfExistKey = <
  T extends Object,
  P extends string,
  R extends P,
>(
  object: T,
  key: P,
): key is R => {
  return Object.keys(object).includes(key);
};

export function getKeyByValue<T extends string>(
  mapper: Record<T, string>,
  value: string,
): T | undefined {
  return (Object.keys(mapper) as Array<keyof typeof mapper>).find(
    (key) => mapper[key] === value,
  ) as T | undefined;
}
