export function formatCurrency(value) {
  if (value >= 1000) {
    return "$" + (value / 1000).toFixed(1) + "B";
  }
  return "$" + value.toLocaleString();
}

export function formatPercent(value) {
  return (value * 100).toFixed(1) + "%";
}

export function formatNumber(value) {
  return value.toLocaleString();
}
