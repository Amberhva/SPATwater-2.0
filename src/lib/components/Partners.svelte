<script>
  export let data
  console.log(data)
</script>

<section
  class="sponsor section"
>
  <div
    class="sponsor__container container grid"
  >
    {#each data.partner as partner}
      <a
        href={partner.link}
        ><img
          width="200"
          height="100"
          src={partner
            .image
            .url}
          alt=""
        /></a
      >
    {/each}
    <div
      class="sponsor__content"
    />
  </div>
</section>

<style>
  .sponsor {
    height: 100vh;
    background: white;
    position: relative;
  }

  .sponsor__container {
    grid-template-columns: repeat(
      auto-fit,
      minmax(
        110px,
        1fr
      )
    );
    justify-items: center;
    row-gap: 3.5rem;
  }

  .sponsor__content:hover
    .sponsor__img {
    filter: invert(
      0.5
    );
  }

  .sponsor__img {
    width: 90px;
    opacity: 0.5;
    filter: invert(
      0.7
    );
    transition: var(
      --img-transition
    );
  }
  /* Responsive */
  @media screen and (min-width: 720px) {
    .sponsor__container {
      grid-template-columns: repeat(
        3,
        1fr
      );
      justify-items: center;
      row-gap: 3.5rem;
    }

    .sponsor__img {
      width: 100px;
      opacity: 0.5;
      filter: invert(
        0.7
      );
      transition: var(
        --img-transition
      );
    }
  }
  @media screen and (min-width: 768px) {
    .sponsor__img {
      width: 130px;
    }
  }
</style>
