<script>
  export let data

  import { onMount } from 'svelte';

  onMount(() => {

    var map = L.map('map', {
      center: [52.360956, 4.8964073],
      zoom: 12,
      minZoom: 8 // Set the maximum zoom level to 12
    });

    var osm = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
    }).addTo(map);

    // Add a circle marker at the specified coordinates
    var circle = L.circle([52.360116, 4.9195973], {
        color: 'transparent',       // Border color of the circle
        fillColor: '#73CA6A',   // Fill color of the circle
        fillOpacity: 0.5,   // Fill opacity
        radius: 200,         // Radius of the circle in meters
        shadow: true // Add a shadow to the circle marker
    }).addTo(map);

  });

</script>

<section>

  <div class="project-view-container">
    <article class="project-list">
      <h2 id="projecten">Projecten</h2>

      {#each data.projectens as project }
        <p>{project.title}</p>
      {/each}

    </article>
  
    <article class="project-map">
      <div id="map"></div>
    </article>
  </div>

</section>

<style>
  h2 {
    padding: 0rem 2.5rem;
    color: var(--spat);
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

  .project-list {
    width: 40%;

  }

  .project-map {
    width: 60%;
  }

  #map {
    height: 85vh;
  }
</style>
