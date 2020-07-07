export const aEb = () => {
  let number = Math.floor(Math.random() * 10);
  number % 2 === 0
    ? (number = Math.floor(Math.random() * 10))
    : (number = Math.floor(Math.random() * 10 * -1));
  return number;
};

export const trueOrFalse = () => {
  let number = aEb();
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return number;
  }
};

export const triangle = () => {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 100);
  let result = a + b + c;

  result === 180 ? (result = "true") : (result = "false");
  return result;
};

export const chess = () => {
  let pawns = "Pawns -> straight";
  let rooks = "Rooks -> straight up and down";
  let knights = "Knights -> L movement";
  let bishops = "Bishops -> diagonals";
  let queen = "Queen -> all the moves";
  let king = "King -> all the moves block by block";
  let choice = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  let number = choice(0, 7);
  let piece = "";
  let pieces = [pawns, rooks, knights, bishops, queen, king];
  for (let i = 0; i !== number; i += 1) {
    piece = pieces[i];
  }
  return piece;
};
/*
var chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal e horizontal.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
*/
export const grades = () => {
  let note = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  let grade = note(-1, 101);

  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else if (grade >= 50) {
    return "E";
  } else if (grade < 50 && grade > 0) {
    return "F";
  } else {
    return "Nota inválida!";
  }
};

export const product = () => {
  let value = Math.floor(Math.random() * 100);
  let keyboard = value + (value * 20) / 100;
  let sellPrice = value + (value * 100) / 100;
  let total = (sellPrice - keyboard) * 1000;
  total !== 0 ? (total = `$${total.toFixed(2)}`) : (total = "Valor incorreto.");
  return total;
};

export const payCheck = () => {
  let value = Math.floor(Math.random() * 10000).toFixed(2);
  let totalINSS = "";
  let final = "";
  if (value > 1556.94 && value < 2594.93) {
    totalINSS = value - value * 0.09;
  } else if (value > 2594.92 && value < 5189.83) {
    totalINSS = value - value * 0.11;
  } else if (value > 5189.82) {
    totalINSS = value - 570.88;
  } else {
    totalINSS = value - value * 0.08;
  }
  if (totalINSS < 1903.98) {
    final = totalINSS;
  } else if (totalINSS > 1903.98 && totalINSS < 2826.66) {
    final = totalINSS * 0.075 - 142.8;
  } else if (totalINSS > 2826.65 && totalINSS < 3751.05) {
    final = totalINSS * 0.015 - 354.8;
  } else if (totalINSS > 3751.06 && totalINSS < 4664.68) {
    final = totalINSS * 0.225 - 636.13;
  } else {
    final = totalINSS * 0.275 - 869.36;
  }
  return `Para Bruto de R$${value}, Líquido igual a R$${(value - final).toFixed(2)}.`;
};
