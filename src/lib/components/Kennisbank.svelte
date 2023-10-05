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
  <h2>Kennisbank</h2>

  <div class="filter-row">
    <ul class="filter-item-list" id="projectList">
      <li class="active">Klimaatadaptatie</li>
      <li>Waterkwaliteit</li>
    </ul>
  </div>

  <input
    class="searchbar"
    type="search"
    id="search"
    name="search"
    placeholder="Zoek een artikel"
  />

  <div class="blogpost-container">
    <div class="blogpost">
      <img src="assets/Aquathermie.png" alt="blog foto" />
      <h3>Titel van blog</h3>
      <p>content blog</p>
      <i class="fa fa-arrow-right" aria-hidden="true" />
    </div>

    <div class="blogpost">
      <img src="assets/Aquathermie.png" alt="blog foto" />
      <h3>Titel van blog</h3>
      <p>content blog</p>
      <i class="fa fa-arrow-right" aria-hidden="true" />
    </div>

    <div class="blogpost">
      <img src="assets/Aquathermie.png" alt="blog foto" />
      <h3>Titel van blog</h3>
      <p>content blog</p>
      <i class="fa fa-arrow-right" aria-hidden="true" />
    </div>
  </div>

  <!-- Blogpage grid desktop -->

  <div class="blog-container">
    <div class="filter-row-desktop">
      <ul class="filter-item-list-desktop" id="projectList">
        <li class="active">Klimaatadaptatie</li>
        <li>Waterkwaliteit</li>
      </ul>
    </div>

    <input
      class="searchbar-desktop"
      type="search"
      id="search"
      name="search"
      placeholder="Zoek een artikel"
    />

    <div class="blogpost-desktop">
      <img src="assets/Aquathermie.png" alt="blog foto" />
      <div class="content-desktop">
        <h3>Titel van blog</h3>
        <p>content blog</p>
        <i class="fa fa-arrow-right" aria-hidden="true" />
      </div>
    </div>

    <aside class="sidebar-container">
      <div class="blogpost1-desktop">
        <img src="assets/Aquathermie.png" alt="blog foto" />

        <div class="content-desktop">
          <h3>Titel van blog</h3>
          <p>content blog</p>
          <i class="fa fa-arrow-right" aria-hidden="true" />
        </div>
      </div>

      <div class="blogpost2-desktop">
        <img src="assets/Aquathermie.png" alt="blog foto" />
        <div class="content-desktop">
          <h3>Titel van blog</h3>
          <p>content blog</p>
          <i class="fa fa-arrow-right" aria-hidden="true" />
        </div>
      </div>

      <div class="blogpost3-desktop">
        <img src="assets/Aquathermie.png" alt="blog foto" />
        <div class="content-desktop">
          <h3>Titel van blog</h3>
          <p>content blog</p>
          <i class="fa fa-arrow-right" aria-hidden="true" />
        </div>
      </div>
    </aside>
  </div>
</section>

<style>
  h2 {
    padding-top: 4rem;
    padding-left: 2.5rem;
    padding-bottom: 1rem;
    color: var(--spat);
  }

  section {
    height: auto;
    padding-bottom: 2rem;
    background: var(--lg-bg);
  }

  .filter-item-list {
    padding-top: 1rem;
    padding-left: 2.5rem;
    list-style: none;
    display: flex;
    gap: 1rem;
    align-items: left;
    color: #2b3f5a;
  }

  .filter-item-list li {
    padding: 0.2rem 0.5rem;
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

  .searchbar {
    width: 80%;
    margin-left: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.6rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  }

  .searchbar::placeholder {
    color: #b7b7b7;
  }

  .sidebar-container {
    display: none;
  }

  .blogpost {
    width: 80%;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-left: 2.5rem;
    margin-bottom: 1rem;
  }
  .blogpost img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
  }

  .blogpost-desktop {
    display: none;
  }

  .blog-container {
    display: none;
  }

  @media only screen and (min-width: 1240px) {
    .filter-row {
      display: none;
    }

    .blogpost-container {
      display: none;
    }

    .blog-container {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1.2fr 0.7fr;
      grid-template-rows: 0.1fr 2.6fr;
      gap: 1.5rem;
      margin-right: 2.5rem;
      grid-template-areas:
        "filter search"
        "aanbevolen aside";
    }
    .searchbar {
      display: none;
    }

    .searchbar-desktop {
      grid-area: search;
      width: 93%;
      height: 2.5rem;
      margin-left: 2.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    }

    .filter-row-desktop {
      grid-area: filter;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .filter-item-list-desktop {
      padding-left: 2.5rem;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      align-items: left;
      color: #2b3f5a;
      grid-area: filter;
    }

    .filter-item-list-desktop li {
      padding: 0.2rem 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
    }

    aside {
      grid-area: aside;
    }

    .blogpost-desktop {
      height: 40rem;
      display: flex;
      background-color: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-left: 2.5rem;
      margin-bottom: 1rem;
      display: block;
      margin-left: 2.5rem;
      grid-area: aanbevolen;
    }

    .blogpost-desktop img {
      width: 100%;
      height: 35%;
      object-fit: cover;
    }

    .blogpost-desktop i {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 0.6rem 1.2rem;
      color: #73ca6a;
      transition: 0.2s;
    }

    /* sidebar */
    .sidebar-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 0.2fr 0.2fr 0.2fr;
      gap: 0px 0px;
      grid-template-areas:
        "blog1"
        "blog2"
        "blog3";
    }
    .blogpost1-desktop {
      height: 10rem;
      display: flex;
      background-color: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-left: 2.5rem;
      margin-bottom: 1rem;
      grid-area: blog1;
    }

    .blogpost1-desktop img {
      width: 30%;
      object-fit: cover;
      padding: 0;
      margin: 0;
      border-radius: 0.5rem 0rem 0rem 0.5rem;
    }

    .blogpost1-desktop i {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 0.6rem 1.2rem;
      color: #73ca6a;
      transition: 0.2s;
    }

    .blogpost1-desktop i:hover {
      transform: translateX(0.5rem);
    }

    .blogpost2-desktop {
      height: 10rem;
      display: flex;
      background-color: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-left: 2.5rem;
      margin-bottom: 1rem;
      grid-area: blog2;
    }
    .blogpost2-desktop img {
      width: 30%;
      object-fit: cover;
      padding: 0;
      margin: 0;
      border-radius: 0.5rem 0rem 0rem 0.5rem;
    }

    .blogpost3-desktop {
      height: 10rem;
      display: flex;
      background-color: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-left: 2.5rem;
      margin-bottom: 1rem;
      grid-area: blog3;
    }

    .blogpost3-desktop img {
      width: 30%;
      object-fit: cover;
      padding: 0;
      margin: 0;
      border-radius: 0.5rem 0rem 0rem 0.5rem;
    }
  }
</style>
