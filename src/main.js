import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const productsList = await fetchProductsList('computador');

const productsContainer = document.querySelector('.products');

productsList.map((item) => productsContainer.appendChild(createProductElement(item)));

document.querySelector('.cep-button').addEventListener('click', searchCep);
