import { DivMain, DivCalculator } from "./styles";
import Amount from "./components/amount";
import Calculate from "./components/calculate/";

function App() {
  return (
    <DivMain>
      <DivCalculator>
        <Calculate />
        <Amount />
      </DivCalculator>
    </DivMain>
  );
}

export default App;
