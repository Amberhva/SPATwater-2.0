<script>
    export let data;
    console.log(data)
  
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
  </script>
  
<Navbar />

<main class="blog">
    <!-- Start blog main -->
      <section class="blog-main">
        <img class="main-img" src="/assets/Aquathermie.png" alt="Planten in water">

        <!-- Waterkwaliteit & klimaatadaptie tags -->
        <ul class="tags">
          <li class="water">Waterkwaliteit</li>
          <li class="climate">Klimaatadaptie</li>
        </ul>

        <!-- Title blogs -->
        <h1 class="title-blog-main">Tijd om de sprong in het private domein te wagen </h1>

        <!-- Paragraphs of the blog -->
        <div class="paragraphs">
          <p class="par-1">
            Als Nederlanders lopen we vaak te koop met onze omgang met water. Het geeft ons een gevoel van trots. Op macroniveau zeker. Het staat buiten kijf dat bijvoorbeeld de Deltawerken en het programma Ruimte voor de Rivier ons land hebben gevormd. 
          </p>

          <p class="par-2">
            Nederlandse kennis omtrent watermanagement is een exportproduct, naar Venetië, Texas of Myanmar. Maar is dat ook zo op microniveau op ons hele kleine stukje aarde? Op perceelniveau vinden er grootschalige grondwateronttrekkingen plaats en verdwijnt regenwater meestal meteen in het (gemengde) riool, om zo snel mogelijk naar zee te stromen.
          </p>

          <p class="par-3">
            Zijn we dus zelf al een goed voorbeeld van het nieuwe principe Water en Bodem sturend? Is de gemiddelde Nederlander zich bewust van het watersysteem om zich heen? Nee, zou ik zeggen.  
          </p>

          <p class="par-4">
            Op perceelniveau is er nog een wereld te winnen. Waar de Belgen al bijna 20 jaar eisen stellen aan de opslag van regenwater, lukt het ons maar niet om het Bouwbesluit aan te passen. Al zal er de komende tijd, hopelijk, wel iets dergelijks worden ingepast zodat onze 1 miljoen nieuwe woningen in de toekomst beter gebruik gaan maken van regenwater.  
          </p>

          <p class="par-5">
            Maar daar kunnen we niet op wachten. Hoe gaan we om met de steeds urgentere, problematische gevolgen van piekbuien en droogte bij onze ongeveer 8 miljoen bestaande woningen? Meer dan de helft van het Nederlandse landoppervlak is privaat terrein. Louter oplossingen zoals WADI’s en infiltratiekratten in de openbare ruimte zullen niet voldoen of te duur worden. De grote regenwatertanks, zoals in België al jaren verplicht zijn bij verbouwingen of nieuwbouw, gaan pas impact hebben bij een vernieuwd Bouwbesluit en de 1 miljoen nieuwe woningen.
          </p>

          <p class="par-6">
            Dus wat kunnen we dan doen? Wat is een pragmatische manier om onze omgang met water anders in te richten en in plaats van water af te voeren, het zo lang mogelijk vast te houden? 
          </p>

          <p class="par-7">
            Het is tijd om Nederlanders bewust te maken van de hoeveelheid regenwater op- en rondom het huis. Onze oplossing is het grootschalig inzetten van micro-maatregelen. Want alle kleine beetjes helpen, als je ze op grote schaal uitvoert. Op micro-schaal macro impact maken dus.  
          </p>

          <p class="par-8">
            Want er zijn miljoenen regenpijpen in Nederland. En iedereen wil zijn steentje bijdragen om klimaatverandering tegen te gaan. Zolang je je gedrag er maar niet te veel voor aan hoeft te passen. Dus gebruik de regenton, van klein (particulier) tot groot (bedrijf), om water vast te houden. Niks nieuws zou je denken. Maar wat als je die regenton slimmer maakt? 
          </p>

          <p class="par-9">
            Piekbuien bufferen heeft pas effect op het riool als er op grote schaal regenwaterbuffers worden ingezet, en als de buffer op tijd leeg is. Juist daar wringt vaak de schoen. Want niemand heeft tijd om elke keer voor een hevige bui zijn regenton te legen. Dat moeten we dus uit handen nemen. Automatisch de opslag legen voordat er een piekbui aan komt om het riool te ontlasten, en water vast houden als er geen neerslag verwacht wordt. 
          </p>

          <p class="par-10">
            Op deze manier kunnen we moeiteloos meer dan 10% van de piekbuien opvangen. Terwijl een conventionele regenton mogelijk slechts 2000 liter per jaar in de bodem laat wegvloeien, kan een slimme regenton met gemak tien keer zoveel liters gecontroleerd de grond in laten stromen. 
          </p>

          <p class="par-11">
            Dat betekent ook dat we een stap over de publieke muur in het private domein moeten zetten. We kunnen en moeten de vele tuinen en daken inzetten om de gevolgen van klimaatverandering te beperken. En door de gemiddelde Nederlander bewuster te maken van het watersysteem, is de impact misschien nog wel groter dan die ene regenton. 
          </p>
        </div>
      </section>
    <!-- End blog main -->

    <!-- Start related articles -->
      <section class="related-articles">
        <h2 class="sub-title">Geraleteerde artikelen</h2>

        <!-- Start first article -->
          <article class="article">
            <img class="related-article-img" src="/assets/Waterbank_Website.png" alt="Planten in water">

            <ul class="related-articles-tags">
              <li class="water">Waterkwaliteit</li>
              <li class="climate">Klimaatadaptie</li>
            </ul>

            <h2 class="title-related-articles">Hoe een Sprinkhaan een Mier wordt</h2>
          </article>
        <!-- End first article -->

        <!-- Start second article -->
          <article class="article">
            <img class="related-article-img" src="/assets/projects2.png" alt="Planten in water">

            <ul class="related-articles-tags">
              <li class="water">Waterkwaliteit</li>
              <li class="climate">Klimaatadaptie</li>
            </ul>

            <h2 class="title-related-articles">Hoe de kwaliteit van ons water smeekt om keuzes</h2>
          </article>
        <!-- End second article -->
      </section>
    <!-- End related articles -->
  </main>

  <Footer />

  <style>
    /* Blog */
    .blog {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 0.5em 0.5em 0.5em;
      color: #2f3237;
      padding-left: 2%;
      padding-right: 2%;
    }

    .blog-main {
        padding-top: 7em;
    }

    .main-img {
      max-width: 100%;
      height: auto;
      border-radius: 1em;
    }

    .tags {
      list-style: none;
      padding: 0;
    }

    .tags > li {
      display: inline-block;
      margin: 0.5em 0.5em 0 0;
    }

    .water {
      background-color: #9CA2DA;
      border-radius: 0.6em;
      padding-left: 0.5em;
      padding-right: 0.5em;
    }

    .climate {
      background-color: #A2DA9C;
      border-radius: 0.6em;
      padding-left: 0.5em;
      padding-right: 0.5em;
    }

    .title-blog-main {
      margin: 1em 0 0.5em 0;
    }

    .paragraphs > p {
      margin-bottom: 1em;
    }

    /* Related articles */
    .related-articles {
      display: inline;
    }

    .sub-title {
      margin-top: 2em;
      margin-bottom: 0.5em;
      color: #89ADC2;
    }

    .article {
      margin-bottom: 2em;
      
    }

    .related-article-img {
      max-width: 100%;
      height: auto;
      border-radius: 1em;
    }

    .related-articles-tags {
      list-style: none;
      padding: 0;
    }

    .related-articles-tags > li {
      display: inline-block;
      margin: 0.5em 0.5em 0 0;
    }

    /* MEDIA QUERIES */
    @media screen and (min-width: 400px) {
        .blog {
        padding-left: 10%;
        padding-right: 10%;
      }
    }

    @media screen and (min-width: 600px) {
        .blog {
        padding-left: 20%;
        padding-right: 20%;
      }    
    }

    @media screen and (min-width: 840px) {
        .blog {
        padding-left: 20%;
        padding-right: 20%;
      }   
    }
  </style>