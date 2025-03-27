const apiKey = import.meta.env.VITE_API_KEY;

import cidades from './Cidades.json'

const getApiData = async (city) => {
   let res;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

   await fetch(url)
   .then(response => {
     if (!response.ok) {
       throw new Error('Erro ao buscar os dados');
     }
     return response.json(); // Converte a resposta para JSON
   })
   .then(data => {
     res = data;
   })
   .catch(error => {
     console.error('Erro:', error); // Captura e exibe erros
   });

   return res;
}

export default getApiData;