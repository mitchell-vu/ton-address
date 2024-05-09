export const humanizeNumber = (num?: number, notation: 'standard' | 'compact' = 'standard') =>
  !Number.isNaN(num) && num !== undefined
    ? Intl.NumberFormat(undefined, {
        notation,
        maximumFractionDigits: 2,
      }).format(num)
    : undefined;

export const formatCurrency = (num?: number, local = 'en-US') =>
  !Number.isNaN(num) && num !== undefined
    ? new Intl.NumberFormat(local, { style: 'currency', currency: 'USD' }).format(num)
    : undefined;
