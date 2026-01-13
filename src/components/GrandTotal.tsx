export const GrandTotal = ({ rows }: any) => {
  const total = rows.reduce((s: number, r: any) => s + r.value, 0);
  return <h3>Grand Total: {total.toFixed(2)}</h3>;
};
