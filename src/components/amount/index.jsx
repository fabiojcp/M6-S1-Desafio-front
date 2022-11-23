import { useContext, useEffect, useState } from "react";
import { CalculateContext } from "../../context";
import { DivMain, Tittle, List } from "./style";

export default function Amount() {
  const toFormat = (currency) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(currency);

  const { results } = useContext(CalculateContext);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    if (results !== null) {
      setEntries([...Object.entries(results)]);
    }
  }, [results]);

  return (
    <DivMain>
      <Tittle>"Você receberá:"</Tittle>
      <List>
        <ul>
          {results &&
            entries.map((item) => (
              <li key={item[0]}>
                {item[0] === "1" ? (
                  <>
                    <span>Amanhã: </span>
                    <span>{`${toFormat(item[1])}`}</span>
                  </>
                ) : (
                  <>
                    <span>{`Em ${item[0]} dias: `}</span>
                    <span>{`${toFormat(item[1])}`}</span>
                  </>
                )}
              </li>
            ))}
        </ul>
      </List>
    </DivMain>
  );
}
