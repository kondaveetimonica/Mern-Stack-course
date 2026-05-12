//make sure all assets are loaded
document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.querySelector(".posts-container");
  const APIUrl = "https://jsonplaceholder.typicode.com/posts";
  async function fetchPosts() {
    try {
      const postResponse = await fetch(APIUrl);
      const posts = await postResponse.json();
      postsContainer.innerHTML = " ";
      posts.forEach((post) => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
      });
    } catch (error) {
      postsContainer.innerHTML = `<p  style="color:red;text-align:center;font-size:50px">Error loading posts.please try again</p>`;
    }
  }

  //create post html elements
  function createPostElement(post) {
    const article = document.createElement("Article");
    article.className = "post-card";
    const title = document.createElement("h2");
    title.className = "post-title";
    title.textContent = post.title;
    const body = document.createElement("p");
    body.className = "post-body";
    body.textContent = post.body;
    article.appendChild(title);
    article.appendChild(body);
    return article;
  }
  fetchPosts();
});
