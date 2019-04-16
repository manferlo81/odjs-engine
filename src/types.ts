export type AnyFunction = (this: any, ...args: any[]) => any;

export type SingleOrMulti<T> = T | T[];

export type Dictionary<V> = Record<string, V>;

export type Falsy = false | 0 | "" | null | undefined;
export type NotFalsy = true | number | string | object;

// Applier Next

export type NextApplierCaller = () => void;

// Appliers

export type ParamTarget = Dictionary<any>;
export type ParamApplier<T extends ParamTarget> = (target: T, param: unknown, next: NextApplierCaller) => void;
export type OptionApplier<T extends ParamTarget, V> = (
  target: T,
  name: string,
  value: V,
  next: NextApplierCaller,
) => void;

// Option DB

export type OptionDBHandler<T extends ParamTarget, V> = (target: T, value: V) => void;
export type OptionDB<T extends ParamTarget, M extends Dictionary<any>> = { [K in keyof M]: OptionDBHandler<T, M[K]> };

// Params

export type PerformHandlerParam<T extends ParamTarget> = (this: T, target: T) => void;
export type OptionObjectParam<M extends Dictionary<any>> = Partial<M> & Dictionary<any>;
export type PerformOptionParam<T extends ParamTarget, M extends Dictionary<any>> =
  | PerformHandlerParam<T>
  | OptionObjectParam<M>;

// Value Types

export type Listener<T, E extends Event> = (this: T, event: E) => void;
export type EventObject<T extends EventTarget, M extends Dictionary<any>> = {
  [K in keyof M]?: Listener<T, M[K]>
};
