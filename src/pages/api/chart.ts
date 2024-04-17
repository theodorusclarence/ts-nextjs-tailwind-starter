export const fetchData = async () => {
  const dataUrl = process.env.NEXT_PUBLIC_PINKBOMBS_DATA_URL;
  const apiKey = process.env.NEXT_PUBLIC_PINKBOMBS_DATA_API_KEY;
  console.log('PROCESS', process, dataUrl, apiKey);
  try {
      const response = await fetch(dataUrl, {
          headers: {
              'X-API-Key': apiKey
          }
      });
      if (response.ok) {
          const data = await response.json();
          return data;
      } else {
          console.error('Erreur lors de la récupération des données:', response.status);
          return null;
      }
  } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return null;
  }
};