export interface RowNode {
  id: string;
  label: string;
  value: number;
  originalValue: number;
  variance: number;
  input?: number;
  children?: RowNode[];
}
