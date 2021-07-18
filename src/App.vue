<template>
  <div id="app">
    <navigation />
    <carousel />
    <team />
    <traitments-laser />
    <contacts />
    <gallery />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Carousel from './components/Carousel.vue'
import Team from './components/Team.vue'
import TraitmentsLaser from './components/TraitmentsLaser.vue'
import Contacts from './components/Contacts.vue'
import Gallery from './components/Gallery.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Carousel,
    Team,
    TraitmentsLaser,
    Contacts,
    Gallery,
  },
}
</script>

<style lang="scss">
@import './custom.scss';
@import './mixins.scss';
$theme-colors: (
  'primary': $c-palette-primary,
  'danger': $c-palette-sec-primary,
  'success': $c-palette-accent-dark,
);
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
@import '~aos/src/sass/aos.scss';

body {
  font-family: $font-family-sans-serif;
  background-color: $c-light-dark;
}

a {
  &:hover {
    text-decoration: none;
  }
}

.rbs-title {
  display: block;
  color: $text-green;
  letter-spacing: $letter-spacing-xs;
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 2em 1em 2em 1em;

  &.rbs-title-dark {
    color: $c-palette-accent-dark;
  }
}

.rbs-subtitle {
  display: block;
  color: $c-palette-light;
  letter-spacing: $letter-spacing-xs;
  font-size: 1.4em;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.5em;
}

.rbs-message {
  display: block;
  font-size: 1.4em;
  text-align: center;
  letter-spacing: $letter-spacing-xxs;
}

/* Fonts */
@font-face {
  font-family: GothaPro;
  src: url('./assets/fonts/gotham_pro/GothaProMed.otf') format('opentype');
}

@font-face {
  font-family: GothaPro;
  font-weight: bold;
  src: url('./assets/fonts/gotham_pro/GothaProBol.otf') format('opentype');
}

@font-face {
  font-family: GothaPro;
  font-weight: italic;
  src: url('./assets/fonts/gotham_pro/GothaProIta.otf') format('opentype');
}
</style>
