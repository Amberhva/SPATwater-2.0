<script>
  export let data
  console.log(data)

  import { onMount } from 'svelte';

  onMount(() => {

    var map = L.map('map', {
      center: [52.360956, 4.8964073],
      zoom: 12,
      minZoom: 10
    });

    // Leaflet map theme
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',).addTo(map);

    // Add a marker at the specified coordinates
    var projectMarkerSlug = L.circle([52.360116, 4.9195973], {
        color: 'transparent',
        fillColor: '#73CA6A',
        fillOpacity: 0.5,
        radius: 200,
        shadow: true
    }).addTo(map);

    // Add a hover event
    document.getElementById('projectSlug').addEventListener('mouseover', function () {
      map.setView([52.360116, 4.9195973], 14);
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

  });

</script>

<section>

  <div class="project-view-container">
    <article class="projects">
      <div class="set-max-height">
        
        <div class="filter-row">
          <span class="anchor" id="projecten">Projecten</span>
          <h2>Projecten</h2>
          <ul class="filter-item-list" id="projectList">
            
            <!-- Dit kan uit hygraph -->
            <li class="active">Klimaatadaptatie</li>
            <li>Waterkwaliteit</li>
            <li>B-RAIN</li>
          </ul>
  
          <input class="searchbar" type="search" id="search" name="search" placeholder="Zoek een project"/>
        </div>
  
        <div class="project-list-container">
          <ul class="project-list">
  
            <!-- Dit kan uit hygraph -->
            <li id="projectSlug">
              <div class="horizontal-flex">
                <img src="/assets/projects2.png" alt="">
                <div class="project-text">
                  <span>Waterkwaliteit</span>
                  <h3>Gemeente Amstelveen</h3>
                  <p>De CO2-voetafdruk van je bedrijf geeft je inzicht in je CO2-emissie hotspots en stelt je in staat jouw eerste CO2-reductiemaatregelen uit te voeren op het laaghande fruit.</p>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </li>
    
          </ul>
        </div>
      </div>
    </article>
  
    <article class="project-map">
      <div id="map"></div>
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
}

  section {
    margin-top: 5rem;
    height: 100vh;
    background: white;
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
    margin-right: 10%;
    padding: .2rem .6rem;
    cursor: pointer;
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
  }
</style>
