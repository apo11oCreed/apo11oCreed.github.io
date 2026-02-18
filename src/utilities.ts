// Export as a shared signal for fullscreen image functionality
// Using a simple object with getter/setter for shared state
export const fullscreenImage = {
  _value: null as string | null,
  
  get value(): string | null {
    return this._value;
  },
  
  set value(newValue: string | null) {
    this._value = newValue;
  }
};