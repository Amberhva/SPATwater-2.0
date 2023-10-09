<script>
  export let data;

  console.log(data);

  // Get the last post from the array

  let lastPost = data.kennisbanks[data.kennisbanks.length - 1];

  import { onMount } from "svelte";

  onMount(() => {
    // Add a click event listener to the list items to toggle the "active" class

    var listItems = document.querySelectorAll("#filterList li");

    listItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // Remove the "active" class from all list items

        listItems.forEach(function (li) {
          li.classList.remove("active");
        });

        // Add the "active" class to the clicked list item

        this.classList.add("active");
      });
    });
  });
</script>

<section>
  <div class="filter-container">
    <h2 id="kennisbank">Kennisbank</h2>

    <div class="mobile-blog-header">
      <ul class="filter-item-list" id="filterList-mobile">
        <li class="active">Alles</li>

        <li>Klimaatadaptatie</li>

        <li>Waterkwaliteit</li>

        <li>B-RAIN</li>
      </ul>

      <input
        class="searchbar"
        type="search"
        id="search"
        name="search"
        placeholder="Zoek een project"
      />
    </div>

    <div class="filter-row">
      <div class="filter-list-container">
        <ul class="filter-item-list" id="filterList">
          <li class="active">Alles</li>

          <li>Klimaatadaptatie</li>

          <li>Waterkwaliteit</li>

          <li>B-RAIN</li>
        </ul>
      </div>

      <div class="searchbar-container">
        <input
          class="searchbar"
          type="search"
          id="search"
          name="search"
          placeholder="Zoek een post"
        />
      </div>
    </div>
  </div>

  <div class="blog-view-container">
    <article class="main-post">
      {#if data.kennisbanks.length > 0}
        <img src={lastPost.image.url} alt="" />

        <div class="content-field">
          <span class="category">{lastPost.categorie}</span>

          <span class="author">Door {lastPost.author} op {lastPost.date}</span>

          <h3>{lastPost.title}</h3>

          <div class="hygraph-html">
            {@html lastPost.content.html}
          </div>
        </div>

        <div class="read-more-footer">
          <div class="read-more-container">
            <a class="read-more-link" href="/post/{lastPost.slug}"
              >Verder lezen</a
            >
          </div>
        </div>
      {/if}
    </article>

    <article class="blog">
      <div class="set-max-height">
        <div class="blog-list-container">
          <ul class="blog-list">
            {#each data.kennisbanks as post}
              <a href="/post/{post.slug}">
                <li id={post.slug}>
                  <img src={post.image.url} alt="" />

                  <div class="blog-text">
                    <div class="blog-info-row">
                      <span class="category">{post.categorie}</span>

                      <span class="author"
                        >Door {post.author} op {post.date}</span
                      >
                    </div>

                    <h3>{post.title}</h3>

                    <a class="read-more-small" href="/post/{post.slug}">
                      <i class="fa fa-arrow-right" aria-hidden="true" /></a
                    >
                  </div>
                </li>
              </a>
            {/each}
          </ul>
        </div>
      </div>
    </article>
  </div>
</section>

<style>
  /* Styling main elements */

  h2 {
    padding: 0rem;
    padding-top: 3rem;
    color: var(--spat);
  }

  section {
    margin-top: 5rem;
    height: 100%;
    padding-bottom: 5rem;
    background: var(--lg-bg);
  }

  .mobile-blog-header {
    display: none;
  }

  a {
    text-decoration: none;
  }

  .blog-view-container {
    display: flex;
    gap: 1rem;
    padding: 0rem 2.5rem;
  }

  .blog {
    width: 35%;
    display: flex;
    flex-direction: column;
    height: 85vh;
    gap: 1rem;
  }

  .filter-container {
    gap: 1rem;
    padding: 0rem 2.5rem;
  }

  .hygraph-html {
    width: 28rem;
    padding-top: 0.5rem;
  }

  /* Styling of filter options */

  .filter-row {
    height: 10vh;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .filter-item-list {
    list-style: none;
    padding: 0;
    display: flex;
    margin: 2rem 0rem 1rem 0rem;
    color: #2b3f5a;
  }

  .filter-item-list li {
    margin-right: 1.5rem;
    padding: 0.2rem 0.6rem;
    cursor: pointer;
    font-size: 0.8rem;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  .active {
    background-color: #4ecd5d;
    color: #ffffff;
    border-radius: 0.5rem;
  }

  .searchbar-container {
    width: 35%;

    margin: 2rem 0rem 1rem 0rem;
  }

  .searchbar {
    width: 99%;
    padding: 0.5rem 0.6rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  }

  .searchbar::placeholder {
    color: #b7b7b7;
  }

  /* Styling of project list */

  .blog-list-container {
    height: 80vh;
    overflow-y: scroll;
  }

  .blog-list-container::-webkit-scrollbar {
    display: none;
  }

  .blog-list {
    list-style: none;
    padding: 0;
    height: 100vh;
    width: 100%;
  }

  .blog-list li {
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    margin-bottom: 1rem;
    height: 8rem;
    width: 99%;
  }

  .blog-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }

  .category {
    text-align: left;
  }

  .author {
    position: absolute;
    font-size: 0.7rem !important;
    padding-top: 0.2rem;
    right: 1.5rem;
  }

  .blog-list img {
    width: 10rem;
    height: auto;
    object-fit: cover;
    padding: 0;
    margin: 0;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
  }

  .blog-list .blog-text {
    padding: 1rem 1rem;
    position: relative;
  }

  .blog-list span {
    color: #2b3f5a;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .blog-list h3 {
    color: #7faec5;
    margin-bottom: 0.5rem;
  }

  .main-post {
    width: 65%;
    height: 35vh;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: 0.5rem;
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .main-post img {
    width: 20rem;
    object-fit: cover;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
  }

  .main-post .content-field {
    padding: 1.5rem;
  }

  .main-post span {
    color: #2b3f5a;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .main-post h3 {
    color: #7faec5;
    margin-bottom: 0.5rem;
  }

  .read-more-container {
    position: relative;
    height: 100%;
    right: 1.5rem;
  }

  .read-more-link {
    position: absolute;
    width: 6.5rem;
    bottom: 1rem;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
    font-size: 0.8rem;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    background-color: #4ecd5d;
    color: #ffffff;
    border-radius: 0.5rem;
  }

  .read-more-small i {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.6rem 1.2rem;
    color: #73ca6a;
    transition: 0.2s;
  }

  .read-more-small:hover i {
    transform: translateX(0.5rem);
  }

  #map {
    height: 85vh;

    pointer-events: none;
  }

  /* Mobiele weergaven */

  @media only screen and (max-width: 1100px) {
    .blog {
      width: 100%;
    }

    .main-post {
      display: none;
    }

    .filter-row {
      display: none;
    }

    .filter-item-list {
      display: flex;
      flex-wrap: wrap;
      row-gap: 0.5rem;
    }

    .mobile-blog-header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .mobile-blog-header li {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-right: 0.1rem;
      font-size: 0.7rem;
    }
  }
</style>
