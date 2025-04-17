/* main.js : 神託（漢文版）ロジック */
const oracleEl = document.getElementById('oracle');
const symbolEl = document.getElementById('symbol');
const interpEl = document.getElementById('interpretation');
const transEl  = document.getElementById('translation');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomOracle() {
  const oracles = window.shinData.oracles;
  const runeSet = window.shinData.runes;
  const oracle = oracles[getRandomInt(oracles.length)];

  let symbol = '';
  for (let i = 0; i < 5; i++) {
    symbol += runeSet[getRandomInt(runeSet.length)];
  }

  return {
    oracle: oracle.oracle,
    interpretation: oracle.interpretation,
    translation: oracle.translation,
    symbol: symbol
  };
}

function updateDom(data) {
  oracleEl.textContent = data.oracle;
  symbolEl.textContent = data.symbol;
  interpEl.textContent = data.interpretation;
  transEl.textContent = data.translation;
}

document.addEventListener('DOMContentLoaded', () => {
  updateDom(getRandomOracle());
  document.getElementById('generateBtn').addEventListener('click', () => {
    updateDom(getRandomOracle());
  });
});
