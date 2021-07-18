<template>
  <div class="rbs-gallery" id="gallery">
    <CoolLightBox :items="items" :index="index" @close="index = null">
    </CoolLightBox>

    <div class="rbs-title">Galerie</div>
    <div class="images-wrapper">
      <div
        class="figure"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
      >
        <div
          class="image"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image.src + ')'
          }"
        />
        <figcaption :key="imageIndex">{{ image.title }}</figcaption>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/images/gallery/1_sm.jpg'
import img2 from '../assets/images/gallery/2_sm.jpg'
import img3 from '../assets/images/gallery/3_sm.jpg'
import img4 from '../assets/images/gallery/4_sm.jpg'
import img5 from '../assets/images/gallery/5_sm.jpg'
import img6 from '../assets/images/gallery/6_sm.jpg'
import img7 from '../assets/images/gallery/7_sm.jpg'
import img8 from '../assets/images/gallery/8_sm.jpg'
import img9 from '../assets/images/gallery/9_sm.jpg'
import img10 from '../assets/images/gallery/10_sm.jpg'
import img11 from '../assets/images/gallery/11_sm.jpg'
import img12 from '../assets/images/gallery/12_sm.jpg'
import img13 from '../assets/images/gallery/13_sm.jpg'
import img14 from '../assets/images/gallery/14_sm.jpg'
import img15 from '../assets/images/gallery/15_sm.jpg'
import img16 from '../assets/images/gallery/16_sm.jpg'

export default {
  // check https://vue-cool-lightbox.lucaspulliese.com/
  name: 'Gallery',
  data: function() {
    const imgs = [
      {
        title: 'Cabinet de dermatologie',
        src: img1
      },
      {
        title: "Salle d'attente",
        src: img2
      },
      {
        title: "Salle d'attente",
        src: img3
      },
      {
        title: "Salle d'attente",
        src: img4
      },
      {
        title: "Espace d'attente médecine esthétique",
        src: img5
      },
      {
        title: 'Cabinet médecine esthétique',
        src: img6
      },
      {
        title: 'Cabinet médecine esthétique',
        src: img7
      },
      {
        title: 'Cabinet médecine esthétique',
        src: img8
      },
      {
        title: 'Cabinet médecine esthétique',
        src: img9
      },
      {
        title: 'Salle de stérilisation',
        src: img10
      },
      {
        title: "Direction vers l'espace médecine esthétique",
        src: img11
      },
      {
        title: "Salle d'intervention et Cabinet de consultation",
        src: img12
      },
      {
        title: "Salle d'intervention",
        src: img13
      },
      {
        title: "Salle d'intervention",
        src: img14
      },
      {
        title: 'Cabinet de consultation',
        src: img15
      },
      {
        title: 'Cabinet de consultation',
        src: img16
      }
    ]
    return {
      items: imgs,
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../mixins';

.rbs-gallery {
  padding: 0em 1em;
  $height: 20em;
  $width: 20em;

  & .images-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-around;
    width: auto;
    height: auto;
    overflow: hidden;

    & .figure {
      text-align: center;
      & .image {
        width: $width;
        height: $height;
        margin: 1em 0em;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        overflow: hidden;
        cursor: pointer;
      }
      & .figcaption {
        vertical-align: bottom;
      }
    }
  }
}

@include media-breakpoint-down(sm) {
  .rbs-gallery {
    padding: 1em;

    & .images-wrapper {
      width: inherit;
      height: auto;
      overflow: hidden;
    }
  }
}
</style>
