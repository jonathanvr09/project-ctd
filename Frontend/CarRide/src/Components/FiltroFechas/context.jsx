import { createContext, useState } from "react";

export const filtroFechasContext = createContext();

const Provider = filtroFechasContext.Provider;

const FiltroFechasProvider = (props) => {
  const [rangeDate, setRangeDate] = useState([null, null]);

  const dateRangeCapture = (range) => {
    setRangeDate(range);
  };

  return (
    <Provider value={{ rangeDate, dateRangeCapture }}>
      {props.children}
    </Provider>
  );
};

export default FiltroFechasProvider;
