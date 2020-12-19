// Função construtora
const Produto = function (name, price, discount = 0.5) {
  this.name = name;
  this.price = price;
  this.discount = discount;

  this.priceWithDiscount = () => {
    return this.price * (1 - this.discount);
  };
};

const product_1 = new Produto('Caneta', 10);
console.log('Produto 1', {
  name: product_1.name,
  price: product_1.price,
  discount: product_1.priceWithDiscount(),
});

const product_2 = new Produto('Geladeira', 3000);
console.log('Produto 2', {
  name: product_2.name,
  price: product_2.price,
  discount: product_2.priceWithDiscount(),
});
