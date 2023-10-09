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
    <!-- Afbeelding voor Klimaatadaptatie -->
    <div
      class="right"
    >
      <img
        class="expertise-img"
        src="assets/Untitled4.png"
        style="width: 350px; height: 200px;"
        alt="Illustratie waterkwaliteit"
      />
    </div>
  </div>

  <!-- Tweede Expertise-container -->
  <div
    class="expertise-container"
  >
    <!-- Afbeelding voor Waterkwaliteit -->
    <div>
      <img
        class="expertise-img"
        src="assets/Untitled3.png"
        style="width: 350px; height: 200px;"
        alt="Illustratie Klimaat"
      />
    </div>
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
  </div>

  <!-- Derde Expertise-container -->
  <div
    class="expertise-container"
  >
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
    <!-- Afbeelding voor B-RAIN -->
    <div
      class="right2"
    >
      <img
        class="expertise-img"
        src="assets/brainlogo.png"
        style="width: 350px; height: 200px;"
        alt="Illustratie B-RAIN"
      />
    </div>
  </div>
</section>

<style>
  /* Stijlen voor de Expertise sectie */
  .expertise-section {
    padding: 4rem
      2.5rem;
    color: var(
      --spat
    );
  }

  /* Globale stijlen voor afbeeldingen */
  img {
    max-width: 400px;
    border-radius: 20px;
  }

  /* Stijlen voor de Expertise sectie container */
  .expertise {
    background: white;
    padding: 30px
      50px;
    border-radius: 20px;
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
    border-radius: 20px;
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
    font-size: 2rem;
  }

  /* Stijlen voor de Expertise titel */
  .expertise-title {
    margin-top: 10px;
    margin-bottom: 13px;
    color: var(
      --spat
    );
    font-size: 1.4rem;
    font-weight: bold;
  }

  /* Stijlen voor de Expertise omschrijving */
  .omschrijving {
    max-width: 500px;
    font-size: 0.8rem;
    color: var(
      --darkblue
    );
    margin-bottom: 0.5rem;
    text-align: justify;
  }

  /* Stijlen voor de knop */
  .button {
    display: inline-block;
    background-color: var(
      --green
    );
    color: white;
    padding: 0.7rem
      1rem;
    border-radius: 5px;
    font-weight: var(
      --font-semi-bold
    );
    transition: 0.3s;
    text-decoration: none;
    width: 120px;
    margin-top: 10px;
    font-size: 1rem;
  }

  /* Stijlen voor de knoptekst */
  .button_text2 {
    text-decoration: none;
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
