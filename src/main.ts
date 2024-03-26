import './style.css'
import Alpine from 'alpinejs'

Alpine.data('simulator', () => ({
  base: 357600,
  dochiramo: false,
  choki: 'none' as 'none' | 'single' | 'double',
  ikkatsu: false,
  repeater: false,
  get dividedBy120() {
    return Math.round(this.total / 120)
  },
  get total() {
    let total = this.base

    // さい帯・さい帯血 どちらも保管【早割】
    if (this.dochiramo) total += 20000

    // 長期保管オプション（20年保管）
    const chokiObj = {
      none: 0,
      single: 25000,
      double: 50000
    }
    total += chokiObj[this.choki]

    // 一括払い割引
    if (this.ikkatsu) total -= 15000

    // リピーター様割引
    if (this.repeater) total -= 20000

    return total
  }
}))

// @ts-ignore
window.Alpine = Alpine

Alpine.start()
