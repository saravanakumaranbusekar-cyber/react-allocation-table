import { useState } from "react";
import { RowNode } from "../utils/types";
import { calculateSubtotal, distributeToLeaves } from "../utils/calculations";

export const useAllocation = (initial: RowNode[]) => {
  const [rows, setRows] = useState<RowNode[]>(structuredClone(initial));

  const updateByPercentage = (id: string, percent: number) => {
    setRows(prev => {
      const clone = structuredClone(prev);

      const apply = (node: RowNode) => {
        if (node.id === id) {
          const newVal = node.value * (1 + percent / 100);
          distributeToLeaves(node, newVal);
        }
        node.children?.forEach(apply);
        node.value = calculateSubtotal(node);
      };

      clone.forEach(apply);
      return clone;
    });
  };

  const updateByValue = (id: string, value: number) => {
    setRows(prev => {
      const clone = structuredClone(prev);

      const apply = (node: RowNode) => {
        if (node.id === id) distributeToLeaves(node, value);
        node.children?.forEach(apply);
        node.value = calculateSubtotal(node);
      };

      clone.forEach(apply);
      return clone;
    });
  };

  return { rows, updateByPercentage, updateByValue };
};
