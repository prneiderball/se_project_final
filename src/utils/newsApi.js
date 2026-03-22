const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";
export function searchNews(keyword) {
  // NOTE: API key is included for demo purposes only.
  // In production, this will be handled via backend.
  const apiKey =
    import.meta.env.VITE_API_KEY || "3bac86ff448446fbb3dc6f4674a1e448";

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
