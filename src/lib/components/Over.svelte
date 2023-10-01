<script>
</script>

<!--==================== ABOUT ====================-->
<section class="about section">
  <div class="about-container container grid">
    <div class="about-text">
      <h2 class="about-title">Over SPATwater</h2>
      <div class="about-content">
        <p>
          SPATwater bestaat uit een nieuwe generatie enthousiaste hydrologen die
          met een technische achtergrond nét wat anders kijken naar ruimtelijke
          opgaven. De uitdagingen zijn enorm, maar de kansen die het biedt nog
          groter.
        </p>
        <p>
          Met expertise op het gebied van waterkwaliteit, de Kaderrichtlijn
          Water en klimaatadaptatie helpt SPATwater overheden en bedrijven om
          toekomstbestendig en waterrobuust te worden.
        </p>
        <p>
          Wij voeren geen analyse uit zonder handelingsperspectief en bieden
          zowel creatieve als praktische oplossingen.
        </p>
      </div>
      <a href="#expertise" class="button">Onze expertise</a>
    </div>

    <div class="about-image">
      <img src="assets/tree.png" alt="boom illustratie" />
    </div>
  </div>
</section>

<style>
  .section {
    height: 100vh;
    padding: 5rem 2.5rem;
    overflow: hidden;
  }

  .about {
    position: relative;
    background-color: var(--lg-bg);
  }

  .about-title {
    color: var(--spat);
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  .about-content p {
    color: var(--darkblue);
    display: block;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    z-index: 5;
  }

  .about-text {
    text-align: left;
  }

  .button {
    display: inline-block;
    background-color: var(--green);
    color: white;
    padding: 0.7rem 1rem;
    border-radius: 5px;
    font-weight: var(--font-semi-bold);
    transition: 0.3s;
    text-decoration: none;
    z-index: 7;
  }

  .button:hover {
    background-color: var(--darkblue);
  }

  .about-image {
    display: inline-block;
    margin-left: 100px;
    margin-top: -2rem;
    z-index: 3;
  }

  .about-image img {
    width: 240px;
  }

  @media screen and (min-width: 454px) {
    .about-image {
      display: inline-block;
      margin-left: 170px;
      margin-top: -90px;
    }

    .about-image img {
      width: 230px;
    }
  }

  @media screen and (min-width: 568px) {
    .about__description {
      font-size: 1.2em;
    }

    .section__title {
      font-size: 2em;
    }

    .about-image {
      display: inline-block;
      margin-left: 200px;
      margin-top: -90px;
    }

    .about-image img {
      width: 300px;
    }

    .about-text {
      max-width: 44rem;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 720px) {
    .about-image {
      display: inline-block;
      margin-left: 330px;
      margin-top: -90px;
    }
  }

  @media screen and (min-width: 768px) {
    .about-image {
      display: inline-block;
      margin-left: 350px;
      margin-top: -90px;
    }

    .about-image img {
      width: 310px;
    }
  }

  @media screen and (min-width: 1024px) {
    .about-title {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    .about-content {
      margin-bottom: 2rem;
    }

    .about-content p {
      font-size: 1rem;
    }

    .about-text {
      padding: 6rem 3rem;
    }
    .about-image {
      margin: 0 auto;
    }

    .about-image img {
      width: 450px;
    }

    .about-container {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
    }
  }
</style>
