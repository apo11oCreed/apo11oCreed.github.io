import { describe, it, expect } from '@jest/globals';
import { fullscreenImage } from '../utilities';

// Test for the fullscreenImage signal
describe('fullscreenImage signal', () => {
  it('should be null by default', () => {
    expect(fullscreenImage.value).toBeNull();
  });

  it('should update the value correctly', () => {
    fullscreenImage.value = 'test-image.png';
    expect(fullscreenImage.value).toBe('test-image.png');
  });

  it('should reset to null', () => {
    fullscreenImage.value = null;
    expect(fullscreenImage.value).toBeNull();
  });
});