import { TextField, Grid } from '@mui/material';

const MatrixTable = ({ data, onChange }: { data: number[][]; onChange: (row: number, col: number, value: number) => void }) => {
  return (
    <Grid container spacing={2}>
      {data.map((row, rowIndex) => (
        <Grid item xs={12} key={rowIndex}>
          {row.map((value, colIndex) => (
            <TextField
              key={colIndex}
              type="number"
              value={value}
              onChange={(e) => onChange(rowIndex, colIndex, Number(e.target.value))}
            />
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default MatrixTable;