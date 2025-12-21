const baseUrl =
    process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";
export function searchNews(keyword) {
  const apiKey = import.meta.env.VITE_API_KEY;

  const today = new Date();
  const fromDate = new Date();
  fromDate.setDate(today.getDate() - 7);

  const to = today.toISOString().split("T")[0];
  const from = fromDate.toISOString().split("T")[0];

  const url = `${baseUrl}?q=${keyword}&from=${from}&to=${to}&pageSize=100&apiKey=${apiKey}`;

  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("Request failed");
    }
    return res.json();
  });
}
