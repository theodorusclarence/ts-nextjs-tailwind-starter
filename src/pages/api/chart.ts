export const fetchData = async (
  lang: string,
  type: "graphs" | "maps",
  chartName: string,
) => {
  const url = `/dashboard/${type}/${lang}/${chartName}.${type === "graphs" ? "json" : "html"}`;

  if (type === "maps") {
    return url;
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      } as HeadersInit,
    });

    if (!response) {
      return null;
    }

    const data = await response.json();

    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};
