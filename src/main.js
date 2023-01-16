import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

const productsContainer = document.querySelector('.products');
const productsCart = document.querySelector('.cart__products');

try {
  const productsList = await fetchProductsList('computador');

  if (productsList) {
    productsContainer.innerHTML = '';
    productsList.map((item) => productsContainer.appendChild(createProductElement(item)));
  }
} catch (error) {
  const errorElement = document.createElement('p');
  errorElement.className = 'error';
  errorElement.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  productsContainer.innerHTML = '';
  productsContainer.appendChild(errorElement);
}

const handleAddCartProduct = async (product) => {
  const idCurrentProduct = product.target.parentNode.firstChild.innerText;

  if (idCurrentProduct) {
    saveCartID(idCurrentProduct);

    const productData = await fetchProduct(idCurrentProduct);

    productsCart.appendChild(createCartProductElement(productData));
  }
};

console.log(getSavedCartIDs());

const handleGetAllSavedProducts = () => {
  const idsProducts = getSavedCartIDs();

  idsProducts.map(async (id) => {
    const productData = await fetchProduct(id);

    productsCart.appendChild(createCartProductElement(productData));
  });
};

handleGetAllSavedProducts();

productsContainer.addEventListener('click', handleAddCartProduct);

document.querySelector('.cep-button').addEventListener('click', searchCep);

// Precisa usar o promise.all
