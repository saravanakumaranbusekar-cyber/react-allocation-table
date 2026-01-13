import { RowNode } from "../utils/types";

export const TableRow = ({ node, level, onPercent, onValue }: any) => {
  return (
    <>
      <tr>
        <td style={{ paddingLeft: (level === 0 ? '5px' : level * 20 )}}>{node.label}</td>
        <td>{node.value.toFixed(2)}</td>
        <td>
          <input type="number" onChange={e => (node.input = +e.target.value)} />
          <button onClick={() => onPercent(node.id, node.input)}>Alloc %</button>
          <button onClick={() => onValue(node.id, node.input)}>Alloc Val</button>
        </td>
        <td>{node.variance.toFixed(2)}%</td>
      </tr>

      {node.children?.map((c: RowNode) => (
        <TableRow
          key={c.id}
          node={c}
          level={level + 1}
          onPercent={onPercent}
          onValue={onValue}
        />
      ))}
    </>
  );
};
