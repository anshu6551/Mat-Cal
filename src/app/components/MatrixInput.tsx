import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const MatrixInput = ({ onGenerate }: { onGenerate: (rows: number, cols: number) => void }) => {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const handleGenerate = () => {
    onGenerate(rows, cols);
  };

  return (
    <Box>
      <TextField
        type="number"
        label="Rows"
        value={rows}
        onChange={(e) => setRows(Number(e.target.value))}
      />
      <TextField
        type="number"
        label="Columns"
        value={cols}
        onChange={(e) => setCols(Number(e.target.value))}
      />
      <Button variant="contained" onClick={handleGenerate} sx={{marginLeft:"10px"}}>Generate</Button>
    </Box>
  );
};

export default MatrixInput;