import { ButtonDirective } from './button.directive';

describe('ButtonDirective', () => {
  let directive: ButtonDirective = null;

  beforeEach(() => {
    directive = new ButtonDirective(null);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('ButtonDirective', () => {
    it('should return true for HEX', () => {
      const result = directive.isHex('#713FC2');
      expect(result).toBeTrue();
    });

    it('should return false for color name', () => {
      const result = directive.isHex('primary');
      expect(result).toBeFalse();
    });
  });
});
