<script>
</script>

<!-- Sectie voor Expertise -->
<section
  class="expertise section"
>
  <!-- Header voor de Expertise sectie -->
  <h2
    class="expertise-header"
  >
    Expertise
  </h2>

  <!-- Eerste Expertise-container -->
  <div
    class="expertise-container"
  >
    <!-- Afbeelding voor Klimaatadaptatie -->
    <div
      class="right"
    >
      <img
        class="expertise-img"
        src="assets/Untitled4.png"
        style="width: 400px; height: 250px;"
        alt="Illustratie Klimaat"
      />
    </div>
    <!-- Expertise-info voor Klimaatadaptatie -->
    <div
      class="expertise-info"
    >
      <!-- Titel voor Klimaatadaptatie -->
      <p
        class="expertise-title"
      >
        Klimaatadaptatie
      </p>
      <!-- Omschrijving voor Klimaatadaptatie -->
      <p
        class="omschrijving"
      >
        SPATwater
        helpt
        overheden en
        bedrijven om
        private
        grond
        klimaatadaptief
        in te
        richten door
        middel van
        ruimtelijke
        data en
        sociale
        kennis.
      </p>
      <!-- Link naar meer informatie -->
      <a
        href="#klimaat"
        class="button"
      >
        <!-- Tekst voor de link -->
        <p
          class="button_text2"
        >
          Lees Meer
        </p>
      </a>
    </div>
  </div>

  <!-- Tweede Expertise-container -->
  <div
    class="expertise-container"
  >
    <!-- Expertise-info voor Waterkwaliteit -->
    <div
      class="expertise-info left"
    >
      <!-- Titel voor Waterkwaliteit -->
      <p
        class="expertise-title"
      >
        Waterkwaliteit
      </p>
      <!-- Omschrijving voor Waterkwaliteit -->
      <p
        class="omschrijving"
      >
        SPATwater
        biedt hulp
        aan
        organisaties
        bij het
        identificeren
        van de
        implicaties
        van de KRW
        voor hun
        specifieke
        situatie.
      </p>
      <!-- Link naar meer informatie -->
      <a
        href="#waterkwaliteit"
        class="button"
      >
        <!-- Tekst voor de link -->
        <p
          class="button_text2"
        >
          Lees Meer
        </p>
      </a>
    </div>
    <!-- Afbeelding voor Waterkwaliteit -->
    <div>
      <img
        class="expertise-img"
        src="assets/Untitled3.png"
        style="width:500px; height: 250px;"
        alt="Illustratie Waterkwaliteit"
      />
    </div>
  </div>

  <!-- Derde Expertise-container -->
  <div
    class="expertise-container"
  >
    <!-- Afbeelding voor B-RAIN -->
    <div
      class="right2"
    >
      <img
        class="expertise-img"
        src="assets/brainlogo.png"
        style="width: 400px; height:250px;"
        alt="Illustratie B-RAIN"
      />
    </div>
    <!-- Expertise-info voor B-RAIN -->
    <div
      class="expertise-info right"
    >
      <!-- Titel voor B-RAIN -->
      <p
        class="expertise-title"
      >
        B-RAIN
      </p>
      <!-- Omschrijving voor B-RAIN -->
      <p
        class="omschrijving"
      >
        B-rain wil
        bewoners
        positief
        betrokken
        houden bij
        het bufferen
        van
        regenwater
        en het groen
        houden van
        hun tuin.
      </p>
      <br />
      <br />
      <!-- Link naar meer informatie -->
      <a
        href="#b-Rain"
        class="button"
      >
        <!-- Tekst voor de link -->
        <p
          class="button_text2"
        >
          Lees Meer
        </p>
      </a>
    </div>
  </div>
</section>

<style>
  /* Stijlen voor de Expertise sectie */
  .expertise-section {
    padding: 3rem
      4rem;
    color: var(
      --spat
    );
  }
  /* Globale stijlen voor afbeeldingen */
  img {
    max-width: 400px;
  }
  /* Stijlen voor de Expertise sectie container */
  .expertise {
    padding: 3rem
      4rem;
    height: 100%;
  }
  /* Stijlen voor de Expertise container */
  .expertise-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    align-items: left;
  }
  /* Stijlen voor afbeeldingen binnen de Expertise container */
  .expertise-img {
    max-width: 400px;
    max-width: 100%;
    height: auto;
  }
  /* Stijlen voor rechterzijde binnen de Expertise container */
  .right {
    margin-left: 1rem;
  }
  /* Stijlen voor rechterzijde binnen de Expertise container */
  .right2 {
    margin-right: 1rem;
  }
  /* Stijlen voor informatie binnen de Expertise container */
  .expertise-info {
    display: grid;
    place-content: center;
  }
  /* Stijlen voor linkerzijde binnen de Expertise container */
  .left {
    margin-left: 3rem;
  }
  /* Stijlen voor de Expertise header */
  .expertise-header {
    color: var(
      --spat
    );
    font-size: 1.5rem;
  }
  /* Stijlen voor de Expertise titel */
  .expertise-title {
    margin-top: 10px;
    margin-bottom: 13px;
    color: var(
      --spat
    );
    font-size: 1.2rem;
    font-weight: bold;
  }
  /* Stijlen voor de Expertise omschrijving */
  .omschrijving {
    max-width: 450px;
    font-size: 0.8rem;
    color: var(
      --darkblue
    );
    margin-bottom: 0.5rem;
    text-align: start;
  }
  /* Stijlen voor de knop */
  .button {
    display: inline-block;
    background-color: var(
      --green
    );
    color: white;
    border-radius: 5px;
    font-weight: var(
      --font-semi-bold
    );
    width: fit-content;
    height: 45px;
    transition: 0.3s;
  }
  /* Stijlen voor de knoptekst */
  .button_text2 {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
  }
  /* Responsieve stijlen voor schermen kleiner dan 768px */
  @media only screen and (max-width: 768px) {
    /* Aanpassingen voor Expertise-container */
    .expertise-container {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    /* Aanpassingen voor Expertise-info */
    .expertise-info {
      margin-bottom: 1rem;
      order: 2;
    }
    /* Aanpassingen voor Expertise-afbeeldingen */
    .expertise-img {
      order: 1;
      max-width: 100%;
      height: auto;
    }
    /* Aanpassingen voor rechter- en linkerzijde binnen de Expertise container */
    .right,
    .left {
      margin-left: 0;
    }
  }
</style>
