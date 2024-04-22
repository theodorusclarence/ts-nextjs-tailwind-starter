export const fetchData = async (chartType: string) => {
  const dataUrl = process.env.NEXT_PUBLIC_PINKBOMBS_DATA_URL;
  const apiKey = process.env.NEXT_PUBLIC_PINKBOMBS_DATA_API_KEY;

  try {
    const response = await fetch(`${dataUrl}/${chartType}`, {
      method: "GET",
      headers: {
        "X-API-Key": apiKey,
        accept: "application/json",
      } as HeadersInit,
    });
    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return JSON.parse(data.graph);
  } catch (error) {
    return null;
  }
};
