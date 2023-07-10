const Ordenar = (array) => {
  const ordenarArray = [...array];
  for (let i = ordenarArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ordenarArray[i], ordenarArray[j]] = [ordenarArray[j], ordenarArray[i]];
  }
  return ordenarArray;
};

export default Ordenar;
