<script>
    export let data;
    console.log(data)
  
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
  </script>
  
  <Navbar />

  <main>
    {#if data.project}
      {#if data.project.image && data.project.image.url}
        <img src={data.project.image.url} alt={data.project.title} />
      {/if}

      <h1>{data.project.title}</h1>
      <p>{data.project.intro}</p>
    {:else}

      <p>Project not found.</p>
    {/if}
  </main>
  
  <Footer />

  <style>
    main {
        padding-top: 10rem;
    }

  </style>