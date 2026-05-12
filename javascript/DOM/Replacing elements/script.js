function replaceArticle(articleId, newContent) {
  const existingArticle = document.getElementById(articleId);
  //create a new div element
  const newArticleEl = document.createElement("div");
  newArticleEl.className = "article";
  newArticleEl.id = articleId;
  //create new text node
  const newTextNode = document.createTextNode(newContent);
  newArticleEl.appendChild(newTextNode);
  //replace
  existingArticle.parentNode.replaceChild(newArticleEl, existingArticle);
}
replaceArticle("article1", "some content");
replaceArticle("article2", "some content 2");
