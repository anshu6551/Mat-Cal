"use client"
import { Container } from "@mui/material";
import MatrixCalculator from "./components/MatrixCalculator";

export default function Home() {
  return (
    <Container>
      <h1>Matrix Calculator</h1>
      <MatrixCalculator />
    </Container>
  );
}
