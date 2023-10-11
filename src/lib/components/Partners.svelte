<script>
  export let data
  console.log(data)
</script>

<section
  class="sponsor section"
>
  <div
    class="sponsor__container"
  >
    {#each data.partner as partner}
      <a
        href={partner.link}
        ><img
          width="100"
          height="100"
          src={partner
            .image
            .url}
          alt=""
          class="sponsor-img"
        /></a
      >
    {/each}
  </div>
</section>

<style>
  .sponsor {
    height: 100vh;
    background: white;
    position: relative;
    padding: 8rem 0
      4rem;
  }

  .sponsor__container {
    display: grid;
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
    .sponsor-img {
    filter: invert(
      0.5
    );
  }

  .sponsor-img {
    width: 100px;
    height: 90px;
    opacity: 0.5;
    filter: invert(
      0.7
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

    .sponsor-img {
      width: 90px;
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
    .sponsor-img {
      width: 90px;
    }
  }
</style>
