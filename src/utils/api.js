let savedArticles = [];

export const getSavedArticles = () => {
  return Promise.resolve(savedArticles);
};

export const saveArticle = (article) => {
  const saved = {
    ...article,
    _id: crypto.randomUUID(),
  };
  savedArticles.push(saved);
  return Promise.resolve(saved);
};

export const removeArticle = (id) => {
  savedArticles = savedArticles.filter((a) => a._id !== id);
  return Promise.resolve();
};
