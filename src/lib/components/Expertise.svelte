<script>
</script>

<section class="expertise section">
  <h2 class="section-title">Expertise</h2>

  <div class="expertise__wrapper">
    <div class="expertise__card">
      <img
        class="expertise3"
        src="assets/Untitled4.png"
        alt="Illustratie klimaatadaptatie"
      />
      <h3>Klimaatadaptatie</h3>
      <a href="#klimaat" class="button">
        <p class="button_text2">Meer informatie</p>
      </a>
    </div>

    <div class="expertise__card">
      <img
        class="expertise2"
        src="assets/Untitled3.png"
        alt="Illustratie waterkwaliteit"
      />
      <h3>Waterkwaliteit</h3>
      <a href="#waterkwaliteit" class="button">
        <p class="button_text2">Meer informatie</p>
      </a>
    </div>
  </div>
</section>

<style>
  .expertise {
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .expertise__title {
    font-size: 1.5rem;
    color: var(--spat);
    font-weight: 600;
    text-align: center;
  }

  .expertise h3 {
    font-size: 1.3rem;
    color: var(--darkblue);
    font-weight: 600;
    text-align: center;
    padding-bottom: 1em;
  }

  .expertise__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 2rem;
    padding-top: 2em;
    padding-bottom: 4em;
  }

  .expertise__card {
    margin: 0 auto;
    height: 25em;
    width: 18em;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(174, 190, 205, 0.3);
    background-color: var(--lg-bg);
    color: var(--darkblue);
    transition: 0.3s ease-in;
  }

  .expertise__card img {
    width: 250px;
    padding-bottom: 2em;
  }

  .expertise__card .expertise2 {
    width: 250px;
    padding-top: 1em;
    padding-bottom: 0.5em;
  }

  .expertise__card:nth-child(2) {
    background-color: var(--lg-bg);
  }

  .expertise__card:nth-child(3) {
    background-color: var(--lg-bg);
  }

  .expertise__card button:hover {
    cursor: pointer;
  }

  .expertise__card:hover {
    transform: scale(1.075);
    transition: 0.3s ease-in;
    cursor: pointer;
  }
</style>
