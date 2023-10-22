import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "name", headerName: "Name", width: 120 },
  { field: "start_time", headerName: "Start Time", width: 120 },
  { field: "end_time", headerName: "End Time", width: 120 },
  { field: "hours_worked", headerName: "No. of Hours Worked", width: 250 },
  { field: "rate_per_hour", headerName: "Rate per Hour", width: 200 },
  { field: "Supplier", headerName: "Supplier", width: 150 },
  { field: "PO Number", headerName: "PO Number", width: 150 },
];

// eslint-disable-next-line react/prop-types
export const Grid = ({ dataSets }) => {
  return (
    <DataGrid getRowId={(row) => row._id} rows={dataSets} columns={columns} />
  );
};
