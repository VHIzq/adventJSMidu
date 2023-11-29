const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

function contarOvejas(ovejas) {
  const hasValues = ovejas.length > 0;
  if (!hasValues) return;

  const filtrado = ovejas.reduce((acc, oveja) => {
    isRed = oveja.color === "rojo";
    hasA = oveja.name.trim().toLowerCase().includes("a");
    hasN = oveja.name.trim().toLowerCase().includes("n");

    const isValidSheep = isRed && hasA && hasN;
    if (isValidSheep) {
      acc.push(oveja);
    }
    return acc;
  }, []);
  return filtrado;
}

const resFiltrado = contarOvejas(ovejas);
console.log(resFiltrado);
