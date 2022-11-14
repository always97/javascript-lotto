const { Console } = require("@woowacourse/mission-utils");
const LOTTO_PRICE = 1000;
class User {
  #myLottos;
  #amount;
  #profit;
  #winStats;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }
  inputAmount() {
    Console.readLine("구입금액을 입력해 주세요.", (input) => {
      this.validate(input);
      this.#amount = input;
    });
  }

  purchasableLotto() {
    return this.#amount/LOTTO_PRICE;
  }

  addLotto(lotto) {
    this.#myLottos.push(lotto);
  }

  getRateOfProfit(){
    return (this.#profit/this.#amount).toFixed(1); 
  }

  validate(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(`[ERROR] 구입 금액은 ${LOTTO_PRICE}원 단위여야 합니다.`);
    }
  }

  printMyLottos() {
    Console.print(this.purchasableLotto() + "개를 구매했습니다.");
    this.#myLottos.map((lotto) => {
      Console.print(lotto);
    });
  }
}
