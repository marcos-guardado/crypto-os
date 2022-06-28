export const currencyFormatter = (number) => {
  return Intl.NumberFormat("en-US").format(number);
};
