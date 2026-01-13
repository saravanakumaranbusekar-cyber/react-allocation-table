import { Table } from "./components/Table";
import { GrandTotal } from "./components/GrandTotal";
import { initialData } from "./data/initialData";
import { useAllocation } from "./hooks/useAllocation";

export default function App() {
  const { rows, updateByPercentage, updateByValue } = useAllocation(initialData);

  return (
    <>
      <div className="app-container">
      <div>
        <Table
          rows={rows}
          onPercent={updateByPercentage}
          onValue={updateByValue}
        />
        <GrandTotal rows={rows} />
      </div>
    </div>
    </>
  );
}
