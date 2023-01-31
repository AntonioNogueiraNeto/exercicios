const fs = require("fs").promises;

async function lerTodosPersonagens() {
  const conteudoDoArquivo = await fs.readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(conteudoDoArquivo);
  const strings = simpsons.map(({ id, name }) => `${id} :  ${name}`);
  strings.forEach((strings) => console.log(strings));
}

async function buscarPeloId(id) {
  const filecontent = await fs.readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(filecontent);
  const simpsonsFind = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!simpsonsFind) {
    throw new Error("id não encontrado");
  }

  return simpsonsFind;
}

async function filterSimpsons() {
  const filecontent = await fs.readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(filecontent);
  const newArray = simpsons.filter(
    (simpson) => simpson.id !== "10" && simpson.id !== "6"
  );
  await fs.writeFile("./simpsons.json", JSON.stringify(newArray));
}

async function createSimpsonsFamily() {
  const filecontent = await fs.readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(filecontent);

  const familyids = [1, 2, 3, 4];

  const simpsonsFamily = simpsons.filter((simpson) =>
    familyids.includes(Number(simpson.id))
  );
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(simpsonsFamily));
}

async function addNelsonFamilY() {
    const filecontent = await fs.readFile("./simpsonsFamily.json", "utf-8");
    const simpsonsFamily = JSON.parse(filecontent);
    simpsonsFamily.push({id: '8', name: 'Nelson Muntz'});
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))

}

function main() {
  //lerTodosPersonagens();
  buscarPeloId(3).then((simpson) => console.log(simpson));
  filterSimpsons();
  createSimpsonsFamily();
  addNelsonFamilY();
}

main();
