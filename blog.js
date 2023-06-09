// Retrieve posts from local storage or initialize an empty array
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Function to render blog posts
function renderPosts() {
  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = '';

  posts.forEach((post, index) => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const title = document.createElement('h2');
    title.textContent = post.title;

    const content = document.createElement('p');
    content.textContent = post.content;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editPost(index));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deletePost(index)); 

    const likeBtn = document.createElement('button');
    likeBtn.textContent = "👍";
    likeBtn.addEventListener('click', () => likePost(index));

    const likeCount = document.createElement('span');
likeCount.id = `like-count-${index}`;
likeCount.textContent = post.likes;

    
    postDiv.appendChild(title);
    postDiv.appendChild(content);
    postDiv.appendChild(editBtn);
    postDiv.appendChild(deleteBtn);
    postDiv.appendChild(likeBtn);
    postDiv.appendChild(likeCount);

    postsContainer.appendChild(postDiv);
  });
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  const titleInput = document.getElementById('title-input');
  const contentInput = document.getElementById('content-input');

  const newPost = {
    title: titleInput.value,
    content: contentInput.value
  };

  posts.push(newPost);
  localStorage.setItem('posts', JSON.stringify(posts));

  renderPosts();
  resetForm();
}

// Function to edit a post
function editPost(index) {
  const post = posts[index];
  const titleInput = document.getElementById('title-input');
  const contentInput = document.getElementById('content-input');

  titleInput.value = post.title;
  contentInput.value = post.content;

  // Remove the post from the array
  posts.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(posts));

  renderPosts();
}

// Function to delete a post
function deletePost(index) {
  posts.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(posts));

  renderPosts();
}

// Function to reset the form
function resetForm() {
  const titleInput = document.getElementById('title-input');
  const contentInput = document.getElementById('content-input');

  titleInput.value = '';
  contentInput.value = '';
}

// Event listeners
document.getElementById('post-form').addEventListener('submit', submitForm);

// Initial rendering of posts
renderPosts();

function likePost(index) {
  const post = posts[index];
  post.likes += 1;
  localStorage.setItem('posts', JSON.stringify(posts));
  const likeCountSpan = document.getElementById(`like-count-${index}`);
  likeCountSpan.textContent = post.likes;
}