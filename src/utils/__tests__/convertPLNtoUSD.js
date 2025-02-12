import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBe('Error');
    expect(convertPLNToUSD('abc')).toBe('Error');
    expect(convertPLNToUSD('-564')).toBe('Error');
  })
  it('should return Error when input is neither a number nor text', () => {
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(false)).toBe('Error');
    expect(convertPLNToUSD(true)).toBe('Error');
  });

  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD('')).toBe('Error');
    expect(convertPLNToUSD('   ')).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(undefined)).toBe('Error');
  });

  it('should return NaN when input is a negative number', () => {
    expect(convertPLNToUSD(-5)).toBe('$0.00');
    expect(convertPLNToUSD(-20)).toBe('$0.00');
    expect(convertPLNToUSD(-4.5)).toBe('$0.00');
  });


});




