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
    <div
      class="expertise__card"
    >
      <img
        class="expertise2"
        src="assets/Untitled4.png"
        alt="Illustratie klimaatadaptatie"
      />
      <h3>
        Klimaatadaptatie
      </h3>
      <a
        href="#klimaat"
        class="button"
      >
        <p
          class="button_text2"
        >
          Meer
          informatie
        </p>
      </a>
    </div>

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
      <a
        href="#waterkwaliteit"
        class="button"
      >
        <p
          class="button_text2"
        >
          Meer
          informatie
        </p>
      </a>
    </div>

    <div
      class="expertise__card"
    >
      <img
        class="expertise2"
        src="assets/brainlogo.png"
        alt="Illustratie B-Rain"
      />
      <h3>
        B-Rain
      </h3>
      <a
        href="#brain"
        class="button"
      >
        <p
          class="button_text2"
        >
          Meer
          informatie
        </p>
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

  .expertise-title {
    font-size: 1.5rem;
    color: var(
      --spat
    );
    font-weight: 600;
    text-align: center;
    margin-top: 2rem;
  }

  .expertise h3 {
    font-size: 1.3rem;
    color: var(
      --darkblue
    );
    font-weight: 600;
    text-align: center;
    padding-bottom: 1em;
  }

  .expertise__wrapper {
    display: grid;
    grid-template-columns: repeat(
      1,
      minmax(0, 1fr)
    );
    gap: 1rem;
    padding: 4em;
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
    width: 100%;
    padding-bottom: 1em;
  }

  .button {
    display: inline-block;
    background-color: var(
      --green
    );
    color: white;
    padding: 0.7rem
      1rem;
    height: 50px;
    border-radius: 5px;
    font-weight: var(
      --font-semi-bold
    );
    transition: 0.3s;
    text-decoration: none;
  }

  .button_text2 {
    text-decoration: none;
    color: white;
    font-size: 1rem;
  }

  @media (min-width: 900px) {
    .expertise__wrapper {
      grid-template-columns: repeat(
        3,
        minmax(
          0,
          1fr
        )
      );
    }
  }
</style>
