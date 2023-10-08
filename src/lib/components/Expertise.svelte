<script>
</script>

<section
  class="expertise section"
>
  <h2
    class="expertise-title"
  >
    Expertise
  </h2>

  <div
    class="expertise__wrapper"
  >
    <!-- Expertise Kaart 1: Klimaatadaptatie -->
    <div
      class="expertise__card"
    >
      <img
        class="expertise3"
        src="assets/Untitled4.png"
        alt="Illustratie klimaatadaptatie"
      />
      <h3>
        Klimaatadaptatie
      </h3>
      <p>
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
      <a
        href="#klimaat"
        class="button"
      >
        <p
          class="button_text2"
        >
          Lees Meer
        </p>
      </a>
    </div>

    <!-- Expertise Kaart 2: Waterkwaliteit -->
    <div
      class="expertise__card"
    >
      <img
        class="expertise2"
        src="assets/Untitled3.png"
        alt="Illustratie waterkwaliteit"
      />
      <h3>
        Waterkwaliteit
      </h3>
      <p>
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
      <a
        href="#waterkwaliteit"
        class="button"
      >
        <p
          class="button_text2"
        >
          Lees Meer
        </p>
      </a>
    </div>

    <!-- Expertise Kaart 3: B-RAIN -->
    <div
      class="expertise__card"
    >
      <img
        class="expertise2"
        src="assets/brainlogo.png"
        alt="Illustratie B-RAIN"
      />
      <h3>
        B-RAIN
      </h3>
      <p>
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
      <a
        href="#waterkwaliteit"
        class="button"
      >
        <p
          class="button_text2"
        >
          Lees Meer
        </p>
      </a>
    </div>
  </div>
</section>

<!-- Stijlen voor de Expertise sectie -->
<style>
  .expertise {
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .expertise-title {
    padding: 4rem
      2.5rem;
    color: var(
      --spat
    );
  }

  .expertise h3 {
    font-size: 1.3rem;
    color: var(
      --spat
    );
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
    height: 30em;
    width: 18em;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0
      4px 6px
      rgba(
        174,
        190,
        205,
        0.3
      );
    background-color: var(
      --lg-bg
    );
    color: var(
      --darkblue
    );
    transition: 0.3s
      ease-in;
  }

  .expertise__card
    img {
    width: 250px;
    padding-bottom: 2em;
  }

  .expertise__card
    .expertise2 {
    width: 250px;
    padding-bottom: 0.5em;
  }

  .expertise__card:nth-child(
      2
    ) {
    background-color: var(
      --lg-bg
    );
  }

  .expertise__card:nth-child(
      3
    ) {
    background-color: var(
      --lg-bg
    );
  }

  .expertise__card
    button:hover {
    cursor: pointer;
  }
  p {
    padding-bottom: 1em;
  }

  .expertise__card:hover {
    transform: scale(
      1.075
    );
    transition: 0.3s
      ease-in;
    cursor: pointer;
  }

  @media screen and (min-width: 568px) {
    .expertise__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2em
        0 2em;
      padding-top: 3em;
      padding-bottom: 3em;
    }
  }
</style>
