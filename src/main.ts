import './style.css'
import Alpine from 'alpinejs'
import MoveTo from 'moveto';

export const initMoveTo = () => {
  const moveTo = new MoveTo({
    tolerance: 180,
  });

  const buttons = document.querySelectorAll<HTMLElement>("[data-moveto]");
  buttons.forEach((button) => {
    moveTo.registerTrigger(button);
  });
};

// const basePrice = {
//   simple: {
//     "hokan": 66000,
//     "shoki": 22000,
//     "kensa": 33000,
//     "sagyo": 0,
//     "gijutsu": 236600,
//   },
//   standard: {
//     "hokan": 132000,
//     "shoki": 44000,
//     "kensa": 33000,
//     "sagyo": 32000,
//     "gijutsu": 236600,
//   }
// }

Alpine.data('simulator', () => ({
  plan: "simple",
  hokan: "10",
  kaisu: "120",
  discount: [] as string[],
  get hokanPrice() {
    let price = 0;
    // プラン選択
    //simple:ONEプラン、standard:Wプラン
    if (this.plan === "simple") {
      price = 66000;
    }
    if (this.plan === "standard") {
      price = 132000;
    }
    // 年数
    if (this.hokan === "20") {
      price *= 2
    }
    return price;
  },
  get shokiPrice() {
    let price = 0;
    if (this.plan === "simple") {
      price = 22000;
    }
    if (this.plan === "standard") {
      price = 44000;
    }
    return price;
  },
  kensaPrice: 33000,
  gijutsuPrice: 236600,
  get sagyoPrice() {
    let price = 0;
    if (this.plan === "standard") {
      price = 32000;
    }
    return price;
  },
  get shokiPriceAlpha() {
    let price = this.shokiPrice + this.kensaPrice + this.gijutsuPrice + this.sagyoPrice
    return price
  },
  get totalPrice() {
    let price = this.hokanPrice + this.shokiPriceAlpha;// + this.kensaPrice + this.gijutsuPrice + this.sagyoPrice;
    // リピーター割引
    if (this.discount.includes("repeater")) {
      price -= 30000;
    }
    //　多胎割引
    if (this.discount.includes("tatai")) {
      price -= 100000;
    }
    // 一括割引 
    if (this.kaisu === "ikkatsu") {
      if (this.plan === "simple") {
        price -= 15000;
      }
      if (this.plan === "standard") {
        price -= 20000;
      }
      // price -= 15000;
    }
    return price;
  },
  get monthlyPrice() {
    let price = this.totalPrice;
    // 一括
    if (this.kaisu === "ikkatsu") {
      return null;
    }
    // 回数で割る
    price /= Number(this.kaisu);
    // 小数点以下切り捨て
    price = Math.floor(price);
    return price;
  },
  // base: 357600,
  // dochiramo: false,
  // choki: 'none' as 'none' | 'single' | 'double',
  // ikkatsu: false,
  // repeater: false,
  // get dividedBy120() {
  //   return Math.round(this.total / 120)
  // },
  // get total() {
  //   let total = this.base

  //   // さい帯・さい帯血 どちらも保管【早割】
  //   if (this.dochiramo) total += 20000

  //   // 長期保管オプション（20年保管）
  //   const chokiObj = {
  //     none: 0,
  //     single: 25000,
  //     double: 50000
  //   }
  //   total += chokiObj[this.choki]

  //   // 一括払い割引
  //   if (this.ikkatsu) total -= 15000

  //   // リピーター様割引
  //   if (this.repeater) total -= 20000

  //   return total
  // }
}))

// @ts-ignore
window.Alpine = Alpine

Alpine.start()
