<script>
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

  });

</script>

<section>
  <h2 id="projecten">Projecten</h2>

  <div class="project-view-container">
    <article class="project-list">
      <p>project list</p>
    </article>
  
    <article class="project-map">
      <div id="map"></div>
    </article>
  </div>

</section>

<style>
  h2 {
    padding: 4rem 2.5rem;
    color: var(--spat);
  }

  p {
    margin: 0;
    padding: 0;
  }

  section {
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
    background: var(--lg-bg);

  }

  .project-map {
    width: 60%;
  }

  #map {
    height: 80vh;
  }
</style>
