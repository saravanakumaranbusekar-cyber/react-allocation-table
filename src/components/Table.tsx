import { TableRow } from "./TableRow";

export const Table = ({ rows, onPercent, onValue }: any) => (
  <table border={1} cellPadding={8}>
    <thead>
      <tr>
        <th>Label</th>
        <th>Value</th>
        <th>Input</th>
        <th>Variance %</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((r: any) => (
        <TableRow
          key={r.id}
          node={r}
          level={0}
          onPercent={onPercent}
          onValue={onValue}
        />
      ))}
    </tbody>
  </table>
);
