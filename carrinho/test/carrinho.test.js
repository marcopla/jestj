import Carrinho from '../carrinho';
import Item from '../item';

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });
  it('Deve ter itens', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maçã', 0.5, 1);
    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    expect(typeof carrinho).toBe('object');
    expect(carrinho[0]).toBe(item);
    expect(carrinho[1]).toBe(item2);
  });
});
