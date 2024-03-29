body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  max-width: 300px;
}

.display {
  grid-column: span 4;
  text-align: right;
  padding: 10px;
  font-size: 1.5em;
  background-color: #f2f2f2;
}
