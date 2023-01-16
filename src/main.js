import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const productsContainer = document.querySelector('.products');

const productsList = await fetchProductsList('computador');
if (productsList) {
  productsContainer.innerHTML = '';
  productsList.map((item) => productsContainer.appendChild(createProductElement(item)));
}

document.querySelector('.cep-button').addEventListener('click', searchCep);
