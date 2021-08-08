const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas a pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

const precosFiltro = precos.filter((preco) => preco.includes("R$")); // Quando retornar verdadeiro inclue o numero na Array.

const precoNumero = precosFiltro.map((preco) => Number(preco.replace("R$", ""))); // O retorno é o que vai ser incluído em cada Array.

// Retorna um valor unico final
// Pode ser usado para saber qual era o valor do return anterior
const total = precoNumero.reduce((acc, item) =>  acc + item)

//
// MAP
//

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

  const saleProducts = products.map( (product) => {
      if (product.price >= 30) {
          return { name: product.name, price: product.price / 2 }
      }

      return product;
  });

//  
// FILTER
// 

const randomNumbers = [36, 99, 37, 63];

const numerbsGreaterThan37 = randomNumbers.filter((number) => number > 37);

console.log("Metodo filter -> Antes:", randomNumbers);
console.log("Metodo filter -> Depois:", numerbsGreaterThan37);

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ];

  const onlyPremiumUsers = users.filter((user) => user.premium);

  console.log("Metodo filter -> Antes:", users)
  console.log("Metodo filter -> Depois:", onlyPremiumUsers);

//   
// REDUCE
// 

const numbers = [1, 2, 3];

const sumResults = numbers.reduce((acc, i) => acc + i, 0);

console.log("Metodo reduce -> Antes:", numbers);
console.log("Metodo reduce -> Depois:", sumResults);

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

  const rogerScore = phaseScores.reduce((acc, phaseScore) =>  {
      if (phaseScore.name === 'Roger Melo') {
        acc += phaseScore.score;
      }

      return acc;
  }, 0)

  console.log(rogerScore);