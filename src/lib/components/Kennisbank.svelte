<script>
  export let data;
  console.log(data);

  import { onMount } from "svelte";

  onMount(() => {
    // Add a click event listener to the list items to toggle the "active" class
    var listItems = document.querySelectorAll("#projectList li");

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

    var listItemsMobile = document.querySelectorAll("#projectList-mobile li");

    listItemsMobile.forEach(function (item) {
      item.addEventListener("click", function () {
        // Remove the "active" class from all list items
        listItemsMobile.forEach(function (li) {
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

      <div class="filter-row">

      <div class="filter-list-container">
        <ul class="filter-item-list" id="projectList">

          <li class="active">Alles</li>
          <li>Klimaatadaptatie</li>
          <li>Waterkwaliteit</li>
          <li>B-RAIN</li>
  
        </ul>
      </div>
      
      <div class="searchbar-container">
        <input class="searchbar" type="search" id="search" name="search" placeholder="Zoek een post"/>
      </div>
      
    </div>
  </div>

  <div class="blog-view-container">
    
    <article class="main-post">

    </article>

    <article class="blog">
      <div class="set-max-height">
  
        <div class="blog-list-container">
          <ul class="blog-list">
  
            {#each data.kennisbanks as post }

            <a href="#">
              <li id="{post.slug}">
                <div class="horizontal-flex">
                  <img src="{post.image.url}" alt="">
                  <div class="blog-text">
                    <span>{post.categorie}</span>
                    <h3>{post.title}</h3>
                  </div>
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
    color: #2B3F5A;
  }

  .filter-item-list li {
    margin-right: 1.5rem;
    padding: .2rem .6rem;
    cursor: pointer;
    font-size: .8rem;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  .active {
    background-color: #4ECD5D;
    color: #FFFFFF;
    border-radius: .5rem;
  }

  .searchbar-container {
    width: 35%;
    margin: 2rem 0rem 1rem 0rem;
  }

  .searchbar {
    width: 99%;
    padding: .5rem .6rem;
    border-radius: .5rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  }

  .searchbar::placeholder {
    color: #B7B7B7;
  }

  /* Styling of project list */
  .blog-list-container {
    height: 65vh;
    overflow-y: scroll;
  }

  .blog-list-container::-webkit-scrollbar{
    display: none;
  }

  .blog-list {
    list-style: none;
    padding: 0;
    width: 100%;
  }

  .blog-list li {
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: .5rem;
    cursor: pointer;
    margin-bottom: 1rem;
    width: 99%;
  }

  .blog-list .horizontal-flex {
    display: flex;
  }

  .blog-list img {
    width: 25%;
    aspect-ratio: 1;
    object-fit: cover;
    padding: 0;
    margin: 0;
    border-radius: .5rem 0rem 0rem .5rem;
  }

  .blog-list .blog-text {
    padding: .5rem 1rem;
    position: relative;
  }

  .blog-list span {
    color: #2B3F5A;
    font-weight: 600;
    font-size: .9rem;
  }

  .blog-list h3 {
    color: #7FAEC5;
    margin-bottom: .5rem;
  }

  .main-post {
    width: 65%;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: .5rem;
    background-color: #FFFFFF;
  }

  #map {
    height: 85vh;
    pointer-events: none;
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    
  }
</style>
