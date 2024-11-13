import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const MatrixCalculator: React.FC = () => {
  const [rows, setRows] = useState<number>(2);
  const [cols, setCols] = useState<number>(2);
  const [matrixA, setMatrixA] = useState<number[][]>(Array(2).fill(Array(2).fill(0)));
  const [matrixB, setMatrixB] = useState<number[][]>(Array(2).fill(Array(2).fill(0)));
  const [resultMatrix, setResultMatrix] = useState<number[][] | null>(null);

  const generateMatrices = () => {
    const newMatrixA = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) => i + j)
    );
    const newMatrixB = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) => i * j)
    );

    setMatrixA(newMatrixA);
    setMatrixB(newMatrixB);
    setResultMatrix(null); // Reset result on new matrix generation
  };

  const handleInputChange = (
    matrixIndex: number,
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    const newValue = value === "" ? 0 : Number(value);
    if (matrixIndex === 1) {
      const newMatrixA = [...matrixA];
      newMatrixA[rowIndex][colIndex] = newValue;
      setMatrixA(newMatrixA);
    } else {
      const newMatrixB = [...matrixB];
      newMatrixB[rowIndex][colIndex] = newValue;
      setMatrixB(newMatrixB);
    }
  };

  const addMatrices = () => {
    const result = matrixA.map((row, i) =>
      row.map((_, j) => (matrixA[i][j] || 0) + (matrixB[i][j] || 0))
    );
    setResultMatrix(result);
  };

  const subtractMatrices = () => {
    const result = matrixA.map((row, i) =>
      row.map((_, j) => (matrixA[i][j] || 0) - (matrixB[i][j] || 0))
    );
    setResultMatrix(result);
  };

  const multiplyMatrices = () => {
    const result = matrixA.map((row, i) =>
      row.map((_, j) => (matrixA[i][j] || 0) * (matrixB[i][j] || 0))
    );
    setResultMatrix(result);
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Matrix Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Rows"
            type="number"
            value={rows}
            onChange={(e) => setRows(Math.max(1, Number(e.target.value)))}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Columns"
            type="number"
            value={cols}
            onChange={(e) => setCols(Math.max(1, Number(e.target.value)))}
            fullWidth
          />
        </Grid>
      </Grid>
      <Button variant="contained" onClick={generateMatrices} sx={{ mt: 2 }}>
        Generate Matrices
      </Button>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="h6">Matrix A</Typography>
          <Paper>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {Array.from({ length: cols }, (_, j) => (
                      <TableCell key={`header-a-${j}`}>Col {j + 1}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {matrixA.map((row, i) => (
                    <TableRow key={`row-a-${i}`}>
                      {row.map((value, j) => (
                        <TableCell key={`a-${i}-${j}`}>
                          <TextField
                            type="number"
                            value={value}
                            onChange={(e) => handleInputChange(1, i, j, e.target.value)}
                            fullWidth
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Matrix B</Typography>
          <Paper>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {Array.from({ length: cols }, (_, j) => (
                      <TableCell key={`header-b-${j}`}>Col {j + 1}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {matrixB.map((row, i) => (
                    <TableRow key={`row-b-${i}`}>
                      {row.map((value, j) => (
                        <TableCell key={`b-${i}-${j}`}>
                          <TextField
                            type="number"
                            value={value}
                            onChange={(e) => handleInputChange(2, i, j, e.target.value)}
                            fullWidth
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" onClick={addMatrices} sx={{ mx: 1 }}>
            Add
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={subtractMatrices} sx={{ mx: 1 }}>
            Subtract
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={multiplyMatrices} sx={{ mx: 1 }}>
            Multiply
          </Button>
        </Grid>
      </Grid>

      {resultMatrix && (
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Result Matrix</Typography>
            <Paper>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    {resultMatrix.map((row, i) => (
                      <TableRow key={`result-row-${i}`}>
                        {row.map((value, j) => (
                          <TableCell key={`result-${i}-${j}`}>
                            <TextField type="number" value={value} fullWidth disabled />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default MatrixCalculator;