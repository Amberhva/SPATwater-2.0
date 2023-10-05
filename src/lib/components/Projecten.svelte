<script>
  export let data;
  // console.log(data)

  import { onMount } from 'svelte';

  onMount(() => {

    var map = L.map('map', {
      center: [52.360956, 4.8964073],
      zoom: 12,
      minZoom: 10
    });

    // Leaflet map theme
    var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',).addTo(map);

    // Loop through data.projectens
    data.projectens.forEach((project, index) => {
      // Create a marker for each project
      const marker = L.circle([project.plaats.latitude, project.plaats.longitude], {
        color: '#73CA6A',
        fillColor: '#73CA6A',
        fillOpacity: 0.5,
        radius: 1200,
        shadow: true,
      }).addTo(map);

      // Add a hover event
      document.getElementById(project.slug).addEventListener('mouseover', function () {
        map.setView([project.plaats.latitude, project.plaats.longitude], 14);
      });
    });



    // Add a click event listener to the list items to toggle the "active" class
    var listItems = document.querySelectorAll('#projectList li');

    listItems.forEach(function (item) {
      item.addEventListener('click', function () {
        // Remove the "active" class from all list items
        listItems.forEach(function (li) {
          li.classList.remove('active');
        });

        // Add the "active" class to the clicked list item
        this.classList.add('active');
      });
    });

    var listItemsMobile = document.querySelectorAll('#projectList-mobile li');

    listItemsMobile.forEach(function (item) {
      item.addEventListener('click', function () {
        // Remove the "active" class from all list items
        listItemsMobile.forEach(function (li) {
          li.classList.remove('active');
        });

        // Add the "active" class to the clicked list item
        this.classList.add('active');
      });
    });

  });

</script>

<section>
  <div class="mobile-project-header">
    <h2>Projecten</h2>
    <ul class="filter-item-list" id="projectList-mobile">
            
      <li class="active">Klimaatadaptatie</li>
      <li>Waterkwaliteit</li>
      <li>B-RAIN</li>
    </ul>

    <input class="searchbar" type="search" id="search" name="search" placeholder="Zoek een project"/>

  </div>

  <div class="project-view-container">
    <article class="projects">
      <div class="set-max-height">
        <span class="anchor" id="projecten"></span>
        <div class="filter-row">
          <h2>Projecten</h2>
          <ul class="filter-item-list" id="projectList">

            <li class="active">Klimaatadaptatie</li>
            <li>Waterkwaliteit</li>
            <li>B-RAIN</li>
          </ul>
  
          <input class="searchbar" type="search" id="search" name="search" placeholder="Zoek een project"/>
        </div>
  
        <div class="project-list-container">
          <ul class="project-list">
  
            {#each data.projectens as project }
            <a href="/projecten/{project.slug}">
              <li id="{project.slug}">
                <div class="horizontal-flex">
                  <img src="/assets/projects2.png" alt="">
                  <div class="project-text">
                    <span>{project.categorie}</span>
                    <h3>{project.title}</h3>
                    <p>{project.intro}</p>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                </div>
              </li>
            </a>
            {/each}
    
          </ul>
        </div>
      </div>
    </article>
  
    <article class="project-map">
      <div id="map">
        <div class="mobile-porject-list">
          <ul>

            {#each data.projectens as project }
              <a href="/projecten/{project.slug}">
                <li id="{project.slug}-mobile">
                  <div class="horizontal-flex">
                    <img src="/assets/projects2.png" alt="">
                    <div class="project-text">
                      <span>{project.categorie}</span>
                      <h3>{project.title}</h3>
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
  h2 {
    padding: 0rem;
    color: var(--spat);
  }

  .anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
  }

  section {
    margin-top: 5rem;
    height: 100vh;
    background: white;
  }

  a {
    text-decoration: none;
  }

  .mobile-project-header {
    display: none;
  }

  .project-view-container {
    display: flex;
    gap: 1rem;
    padding: 0rem 2.5rem;
  }

  .projects {
    width: 40%;
    display: flex;
    flex-direction: column;
    height: 85vh;
    gap: 1rem;
  }

  /* Styling of filter options */
  .filter-row {
    height: 20vh;
  }

  .filter-item-list {
    list-style: none;
    padding: 0;
    display: flex;
    margin: 2rem 0rem 1rem 0rem;
    color: #2B3F5A;
  }

  .filter-item-list li {
    margin-right: 5%;
    padding: .2rem .6rem;
    cursor: pointer;
    font-size: .8rem;
  }

  .active {
    background-color: #4ECD5D;
    color: #FFFFFF;
    border-radius: .5rem;
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
  .project-list-container {
    height: 65vh;
    overflow-y: scroll;
  }

  .project-list-container::-webkit-scrollbar{
    display: none;
  }

  .project-list {
    list-style: none;
    padding: 0;
    width: 100%;
  }

  .project-list li {
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: .5rem;
    cursor: pointer;
    margin-bottom: 1rem;
    width: 99%;
  }

  .project-list .horizontal-flex {
    display: flex;
  }

  .project-list img {
    width: 25%;
    aspect-ratio: 1;
    object-fit: cover;
    padding: 0;
    margin: 0;
    border-radius: .5rem 0rem 0rem .5rem;
  }

  .project-list .project-text {
    padding: .5rem 1rem;
    position: relative;
  }

  .project-list span {
    color: #2B3F5A;
    font-weight: 600;
    font-size: .9rem;
  }

  .project-list h3 {
    color: #7FAEC5;
    margin-bottom: .5rem;
  }

  .project-list p {
    color: #2B3F5A;
    font-size: .9rem;
  }

  .project-list i {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: .6rem 1.2rem;
    color: #73CA6A;
    transition: .2s;
  }

  .project-list li:hover i {
    transform: translateX(.5rem);
  }

  .project-map {
    width: 60%;
  }

  #map {
    height: 85vh;
    pointer-events: none;
  }

  .mobile-porject-list {
    display: none;
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    #map {
      height: 65vh;
      pointer-events: none;
    }

    .project-view-container {
      display: block;
    }

    .projects {
      display: none;
    }

    .project-map {
      width: 100%;
    }

    .mobile-porject-list {
      display: block;
      position: absolute;
      z-index: 1000;
      bottom: 0;
      height: 18vh;
      width: 100%;
      padding: .5rem;
    }

    .mobile-porject-list ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      width: 100%;
      gap: 1rem;
    }

    .mobile-porject-list ul::-webkit-scrollbar{
      display: none;
    }

    .mobile-porject-list li {
      width: 20rem;
      background: var(--lg-bg);
      box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
      border-radius: .5rem;
      margin-bottom: .5rem;
    }

    .mobile-porject-list img {
      width: 8rem;
      height: 6rem;
      object-fit: cover;
      border-radius: .5rem 0rem 0rem .5rem;
    }

    .horizontal-flex {
      display: flex;
    }

    .project-text {
      padding: .5rem;
    }

    .mobile-porject-list span {
      color: #2B3F5A;
      font-weight: 600;
      font-size: .7rem;
    }

    .mobile-porject-list h3 {
      color: #7FAEC5;
      font-size: 1rem;
      line-height: 1.2rem;
      margin-bottom: .5rem;
    }

    .mobile-project-header {
      display: block;
      padding: 0rem 0rem 1rem 2.5rem;
    }

    .mobile-project-header .searchbar {
      width: calc(100% - 2.5rem);
    }
}
</style>
