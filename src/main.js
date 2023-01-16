import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const productsContainer = document.querySelector('.products');

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

document.querySelector('.cep-button').addEventListener('click', searchCep);
