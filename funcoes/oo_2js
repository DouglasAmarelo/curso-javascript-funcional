class Produto {
  constructor(name, price, discount = 0.5) {
    this._name = name;
    this.price = price;
    this.discount = discount;
  }

  priceWithDiscount() {
    return this.price * (1 - this.discount);
  }

  get name() {
    return String(this._name).toUpperCase().split('').join('_');
  }

  get pricePlus10() {
    return this.price + 10;
  }
}
const product_1 = new Produto('Caneta', 30);
console.log('Produto 1', {
  name: product_1.name,
  price: product_1.price,
  discount: product_1.priceWithDiscount(),
  pricePlus10: product_1.pricePlus10,
});

const product_2 = new Produto('Geladeira', 5000);
console.log('Produto 2', {
  name: product_2.name,
  price: product_2.price,
  discount: product_2.priceWithDiscount(),
  pricePlus10: product_2.pricePlus10,
});
