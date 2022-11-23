import { createContext, useState } from "react";
import { AxiosRequests } from "../services";

export const CalculateContext = createContext();

export const CalculateProvider = ({ children }) => {
  const [results, setResults] = useState(null);

  const calculate = (data) =>
  AxiosRequests.post("", data).then((res) => setResults(res.data));

  return (
    <CalculateContext.Provider
      value={{
        calculate,
        results,
      }}
    >
      {children}
    </CalculateContext.Provider>
  );
};
