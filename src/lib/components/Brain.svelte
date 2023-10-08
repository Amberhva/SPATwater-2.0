<script>
</script>

<section>
  <h2>b-RAIN</h2>

<main><article>
  <span><strong>b-RAIN is het project rondom het koppelen van weerberichten aan wateropvang/gebruik in de tuin.</strong></span>
<p class="brain_description">Weersextremen in Nederland nemen steeds verder toe. Enerzijds komen in periodes van droogte, watertekorten vaker voor en anderzijds hebben we vaker te maken met extreme neerslag, met wateroverlast tot gevolg. 
</p>
<p class="brain_description">B-rain wil bewoners positief betrokken houden bij het bufferen van regenwater en het groen houden van hun tuin. Door enkele gegevens in een app aan te geven, geeft deze app terug wanneer de regenwaterbuffer vol zit, wanneer deze geleegd moet worden (als er bijvoorbeeld een grote regenbui aan komt) en wanneer het lang niet regent (waardoor je zoveel mogelijk water in de regenwaterbuffer wil vasthouden). 
</p></article>

<img src="assets/bRAIN.png" alt="bRAIN image" class="brain_image">
</main>
</section>

<style>
  h2 {
    color: var(--spat);
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  section {
    height: 100vh;
    background: var(--lg-bg);
    padding: 5rem 2.5rem;
    overflow: hidden;
  }

@media screen and (min-width: 650px){
main{
    display:grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
}

article:first-child{
    padding:0;
}
}

span{
    color: var(--darkblue);
}

.brain_description{
    color: var(--darkblue);
    display: block;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

@media screen and (min-width: 650px){
.brain_description{
    margin-top: 2rem;
}
}

.brain_image{
    transition: 0.3s;
    width: 100%;
}

@media screen and (min-width: 650px){
.brain_image{
    width: 100%;
    margin-top:2em;
}
}

</style>
