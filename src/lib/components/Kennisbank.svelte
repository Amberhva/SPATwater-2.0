<script>
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

    <input
      class="searchbar"
      type="search"
      id="search"
      name="search"
      placeholder="Zoek een artikel"
    />

    <div class="blogpost-container">
      <div class="blogpost">
        <img src="assets/projects2.png" alt="blog foto" />
        <h3>Titel van blog</h3>
        <p>content blog</p>
      </div>

      <div class="blogpost">
        <img src="assets/projects2.png" alt="blog foto" />
        <h3>Titel van blog</h3>
        <p>content blog</p>
      </div>
    </div>
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
    height: 100vh;
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

  .blogpost-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 5px;
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

  .blogpost-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 5px;
  }

  @media only screen and (min-width: 1240px) {
    .searchbar {
      width: 50%;
    }

    .blogpost-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
    }

    .blogpost {
      width: 50%;
      margin-left: 2.5rem;
      margin-bottom: 1rem;
    }
    .blogpost img {
      width: 100%;
      height: 60%;
      object-fit: cover;
      border-radius: 0.5rem 0.5rem 0rem 0rem;
    }
  }
</style>
