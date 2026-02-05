// Simulate getting saved articles from the DB
export const getSavedArticles = () => {
  return new Promise((resolve) => {
    resolve([
      // Can return an empty array [] or a few mock articles to test styling
      {
        _id: "65f7368dfb74bd6a92114c85",
        keyword: "Nature",
        title: "Everyone Needs a Special Sit Spot in Nature",
        text: "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me.",
        date: "November 4, 2020",
        source: { name: "Treehugger" },
        link: "https://www.treehugger.com/special-sit-spot-nature-5085811",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
      },
    ]);
  });
};

// Simulate saving an article to the DB
export const saveArticle = (article) => {
  return new Promise((resolve) => {
    resolve({
      _id: "fake-id-" + Math.random(), // Generate a random ID so React doesn't complain about keys
      keyword: article.keyword,
      title: article.title,
      text: article.text,
      date: article.date,
      source: article.source,
      link: article.link,
      image: article.image,
    });
  });
};

// Simulate deleting an article from the DB
export const deleteArticle = () => {
  return new Promise((resolve) => {
    resolve({ message: "Article deleted" });
  });
};
