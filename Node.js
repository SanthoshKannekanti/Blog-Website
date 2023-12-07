document.addEventListener('DOMContentLoaded', () => {
  fetch('/getPosts')
    .then(response => response.json())
    .then(posts => {
      const blogPosts = document.getElementById('blog-posts');
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        `;
        blogPosts.appendChild(postElement);
      });
    });
});
