<template>
  <div class="page" id="team">
    <div class="rbs-title">A propos</div>
    <div class="card-apropos">
      <div class="img-img">
        <img src="../assets/images/team/team_2.jpg" alt="" />
      </div>
      <div>
        <div class="img-title">Docteur Radostina Bachvarova-Stoyanova</div>
        <div class="img-text">
          <p>
            Dermatologue - vénérologue depuis 2009 Médecin conventionné, secteur
            1
            <br />Passionnée de la médecine depuis toujours, troisième
            génération médecin, j’adore mon métier et je ferai de mon mieux pour
            résoudre votre problème de peau. <br />Mes affinités sont dans les
            domaines : <br />- du psoriasis <br />- de la dermatite atomique
            <br />- des maladies inflammatoires <br />- de la dermatologie
            pédiatrique <br />- du thermalisme <br />Stages de dermatologie
            effectués : <br />- Service de Dermatologie, Hôpital Archet 2
            <br />- Service de Dermatologie et Médecine Interne, Hôpital Erasme,
            Bruxelles <br />- Service de dermatologie, Hôpital Saint Pierre,
            Bruxelles. <br />Je pratique essentiellement de la médecine
            clinique, mais suite à une demande de plus en plus importante je me
            suis lancée également dans l’esthétique.<br />
            Je possède l’un des meilleurs appareils du marché - Candella. Il est
            adapté pour l’épilation de toutes types de peau. Il traite des
            problèmes vasculaires comme la couperose, les points de rubis, les
            varicosités. <br />Il est une alternative pour le traitement des
            verrues rebelles, surtout peri-unguéales et l’onychomycose si
            contra-indications et/ou échecs des traitements conventionnels.
          </p>
        </div>
      </div>
      <br style="clear: both" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '../mixins';

.page {
  .card-apropos {
    padding: 0em 5em;

    .img-title {
      color: $text-green;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.5rem;
    }
    .img-img {
      width: 100%;
      max-width: 500px;
      float: left;
      shape-outside: url(../assets/images/team/team_2.jpg);
      shape-margin: 20px;
      overflow: hidden;
      margin-right: 20px;
    }
    .img-text {
      text-align: justify;
      color: $text-dark;
      font-weight: 400;
    }
  }
}

@include media-breakpoint-down(md) {
  .page {
    .card-apropos {
      padding: 0em 3em;
    }
  }
}

@include media-breakpoint-down(sm) {
  .page {
    .card-apropos {
      padding: 0em 1em;
    }
  }
}

@include media-breakpoint-down(xs) {
  .img-img img {
    width: 100%;
  }
  .img-title {
    clear: both;
  }
}
</style>
