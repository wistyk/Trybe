import React, { Component } from "react";
import * as functions from "./functions";
import "./style.css";

class BasicOp extends Component {
  render() {
    let a = functions.aEb();
    let b = functions.aEb();
    let c = functions.aEb();
    let returnn = functions.trueOrFalse();
    let result = functions.triangle();
    let chess = functions.chess();
    let evaluation = functions.grades();
    let product = functions.product();
    let payment = functions.payCheck();

    return (
      <ol>
        <li>
          <p>
            Faça cinco programas, um para cada operação aritmética básica. Seu
            programa deve ter duas variáveis, a e b, definidas no começo com os
            valores que serão operados. Faça programas de acordo com:
          </p>
          <p>{`Para A = ${a}, B = ${b} e C = ${c}. Temos:`}</p>
          <ul>
            <li>{`Adição = ${a + b}`}</li>
            <li>{`Subtração = ${a - b}`}</li>
            <li>{`Multiplicação = ${a * b}`}</li>
            <li>{`Divisão = ${a / b}`}</li>
            <li>{`Módulo = ${a % b}`}</li>
          </ul>
        </li>
        <li>
          <p>
            Faça um programa que retorne o maior de dois números. Defina no
            começo do programa duas variáveis com os valores que serão
            comparados.
          </p>
          {`O maior número é: ${a > b ? a : b}`}
        </li>
        <li>
          <p>
            Faça um programa que retorne o maior de três números. Defina no
            começo do programa três variáveis com os valores que serão
            comparados.
          </p>
          {`O maior número é: ${Math.max(a, b, c)}`}
        </li>
        <li>
          <p>
            Faça um programa que, dado um valor definido numa variável, retorne
            "positive" se esse valor for positivo, "negative" se for negativo e
            "zero" caso contrário.
          </p>
          <p>{returnn}</p>
        </li>
        <li>
          <p>
            Faça um programa que defina três variáveis com os valores dos três
            ângulos internos de um triângulo. Retorne true se os ângulos
            representarem os ângulos de um triângulo e false caso contrário.
          </p>
          <ul>
            <li>
              Para os ângulos serem de um triângulo válido, a soma dos três deve
              ser 180 graus. Caso os ângulos estejam inválidos, o programa deve
              retornar uma mensagem de erro.
            </li>
          </ul>
          <p>{result}</p>
        </li>
        <li>
          <p>
            Escreva um programa que receba o nome de uma peça de xadrez e
            retorne os movimentos que ela faz.
          </p>
          <ul>
            <li>
              Como desafio, faça o programa funcionar tanto se receber o nome de
              uma peça com letras maiúsculas quanto com letras minúsculas, sem
              aumentar a quantidade de condicionais.
            </li>
            <li>
              Como dica, você pode pesquisar uma função que faz uma string ficar
              com todas as letras minúsculas (lower case).
            </li>
            <li>
              Se a peça passada for inválida, o programa deve retornar uma
              mensagem de erro.
            </li>
            <li>Exemplo: bishop -> diagonals</li>
            <p>{chess}</p>
          </ul>
        </li>
        <li>
          <p>
            Escreva um programa que converte uma nota dada em porcentagem (de 0
            a 100) em conceitos de A a F. Siga essas regras:
          </p>
          <ul>
            <li>Porcentagem maior ou igual a 90 recebe A</li>
            Porcentagem maior ou igual a 80 recebe B
            <li>Porcentagem maior ou igual a 70 recebe C</li>
            Porcentagem maior ou igual a 60 recebe D
            <li>Porcentagem maior ou igual a 50 recebe E</li>
            Porcentagem menor que 50 recebe F
            <li>
              O programa deve retornar uma mensagem de erro e encerrar se a nota
              passada for menor que 0 ou maior que 100.
            </li>
          </ul>
          <p>{evaluation}</p>
        </li>
        <li>
          <p>
            Escreva um programa que defina três números em variáveis no seu
            começo e retorne true se uma das três for par. Caso contrário, ele
            retorna false.
          </p>
          <ul>
            <li>Bonus: use somente um if</li>
          </ul>
          <p>{a % 2 === 0 || b % 2 === 0 || c % 2 === 0 ? "true" : "false"}</p>
        </li>
        <li>
          <p>
            Escreva um programa que defina três números em variáveis no seu
            começo e retorne true se uma das três for ímpar. Caso contrário, ele
            deve retornar false.
          </p>
          <ul>
            <li>Bonus: use somente um if</li>
          </ul>
          <p>{a % 2 === 1 || b % 2 === 1 || c % 2 === 1 ? "true" : "false"}</p>
        </li>
        <li>
          <p>
            Escreva um programa que se inicie com dois valores em duas variáveis
            diferentes: o custo de um produto e seu valor de venda. A partir dos
            valores, calcule quanto de lucro (valor de venda descontado o custo
            do produto) a empresa terá ao vender mil desses produtos.
          </p>
          <ul>
            <li>
              Atente que, sobre o custo do produto, incide um imposto de 20%.
            </li>
            <li>
              Seu programa também deve emitir uma mensagem de erro e encerrar
              caso algum dos seus valores de entrada seja menor que zero.
            </li>
            <p>{product}</p>
          </ul>
        </li>
        <li>
          <p>
            Uma pessoa que trabalha de carteira assinada no Brasil tem
            descontados de seu salário bruto o INSS e o IR. Faça um programa
            que, dado um salário bruto, calcule o líquido a ser recebido.
          </p>
          <ul>
            <li>
              A notação para um salário de R$1500,10, por exemplo, deve ser
              1500.10. Para as faixas de impostos, use as seguintes referências:
              <ul>
                <li>INSS</li>
                <li>Salário bruto até R$ 1.556,94: alíquota de 8%</li>
                <li>
                  Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
                </li>
                <li>
                  Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
                </li>
                <li>
                  Salário bruto acima de R$ 5.189,82: alíquota máxima de R$
                  570,88
                </li>
                <li>IR</li>
                <li>Até R$ 1.903,98: isento de imposto de renda</li>
                <li>
                  De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$
                  142,80 a deduzir do imposto
                </li>
                <li>
                  De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$
                  354,80 a deduzir do imposto
                </li>
                <li>
                  De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de
                  R$ 636,13 a deduzir do imposto
                </li>
                <li>
                  Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36
                  a deduzir do imposto.
                </li>
                <p>{payment}</p>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    );
  }
}

export default BasicOp;
