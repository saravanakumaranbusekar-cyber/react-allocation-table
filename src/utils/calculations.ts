import { RowNode } from "./types";

export const calculateSubtotal = (node: RowNode): number => {
  if (!node.children) return node.value;
  return node.children.reduce((sum, c) => sum + calculateSubtotal(c), 0);
};

export const distributeToLeaves = (node: RowNode, newValue: number) => {
  if (!node.children) {
    node.value = newValue;
    node.variance = ((newValue - node.originalValue) / node.originalValue) * 100;
    return;
  }

  const total = node.children.reduce((s, c) => s + c.value, 0);

  node.children.forEach(child => {
    const ratio = child.value / total;
    distributeToLeaves(child, newValue * ratio);
  });

  node.value = newValue;
  node.variance = ((newValue - node.originalValue) / node.originalValue) * 100;
};
