const apiKey = import.meta.env.VITE_API_KEY;

const getApiData = async (city) => {
  try {
    if (!apiKey) {
      throw new Error("API KEY não definida");
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return null; // importante: evita undefined silencioso
  }
};

export default getApiData;
