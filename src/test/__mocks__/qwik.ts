export const component$ = <T extends (...args: unknown[]) => unknown>(fn: T): T => fn;
export const useStyles$ = (): void => {};
export const useStylesScoped$ = (): void => {};
export const useComputed$ = <T extends (...args: unknown[]) => unknown>(fn: T): T => fn;
export const useSignal = <T>(initialValue: T): { value: T } => ({ value: initialValue });
export const signal = <T>(initialValue: T): { value: T } => ({ value: initialValue });
export const $ = <T extends (...args: unknown[]) => unknown>(fn: T): T => fn;
export const useVisibleTask$ = (): void => {};
export const Slot = (): null => null;
