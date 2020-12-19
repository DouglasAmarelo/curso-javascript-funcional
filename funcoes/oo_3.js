// Função construtora
const Produto = function (name, price, discount = 0.5) {
  this._name = name;
  this._price = price;
  this._discount = discount;

  this.name = () => this._name;

  this.price = () => this._price;

  this.priceWithDiscount = () => this._price * (1 - this._discount);
};

Produto.prototype.log = function () {
  console.log(`Produto ${this.name()}, Preço: R$ ${this.price()}`);
};

Object.defineProperty(Produto.prototype, 'discount', {
  get: function () {
    return this._discount;
  },
});

Object.defineProperty(Produto.prototype, 'discountPercentage', {
  get: function () {
    return `${this._discount * 100}%`;
  },
});

const product_1 = new Produto('Caneta', 10);
const product_2 = new Produto('Geladeira', 3000);

console.log('Produto 1', {
  name: product_1.name(),
  price: product_1.price(),
  discount: product_1.priceWithDiscount(),
  percentage: product_1.discountPercentage,
});

console.log('Produto 2', {
  name: product_2.name(),
  price: product_2.price(),
  discount: product_2.priceWithDiscount(),
  percentage: product_2.discountPercentage,
});

console.log('++++++++++++');

product_1.log();
product_2.log();
