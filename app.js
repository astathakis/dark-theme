const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  console.log('hello');
  document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles
  .map((item) => {
    // console.log(item);
    const { title, date, length, snippet } = item;
    //   format date
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return ` <article class="post">
        <h2 class="title">${title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${length} min read</span>
        </div>
        <p>
         ${snippet}
        </p>
      </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;
console.log(moment);
