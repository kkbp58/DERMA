<template>
  <b-carousel
    id="rbs-carousel"
    class="rbs-carousel"
    v-model="slide"
    :interval="5000"
  >
    <b-carousel-slide :img-src="slide1">
      <template #img>
        <div
          class="rbs-carousel-content"
          :style="{
            'background-image': `url(${slide1})`
          }"
        >
          <span class="rbs-carousel-title-sm">Dermatologue</span>
          <span class="rbs-carousel-title-sm-left">Traitements laser</span>
          <a
            href="https://www.doctolib.fr/dermatologue/saint-gervais-les-bains/radostina-bachvarova-stoyanova"
            class="btn btn-success rbs-carousel-btn"
            role="button"
            target="_blank"
            >Prendre rendez-vous</a
          >
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import slide1 from '../assets/images/slides/cabinet.jpg'

export default {
  name: 'Carousel',
  data() {
    return { slide: 0, slide1 }
  }
}
</script>

<style lang="scss" scoped>
@import '../mixins';

.rbs-carousel {
  $carousel-height: 100vh;
  height: $carousel-height;

  & .rbs-carousel-content {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding-top: 10em;

    & .rbs-carousel-title-sm,
    & .rbs-carousel-title-sm-left,
    & .rbs-carousel-title-lg {
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 1em;
      letter-spacing: $letter-spacing-xs;
    }

    & .rbs-carousel-title-sm,
    & .rbs-carousel-title-sm-left {
      font-size: 1.6em;
      color: $text-light;
      border-color: black;
      @include animation-slide-in-right(0.3s);
    }

    & .rbs-carousel-title-sm-left {
      @include animation-slide-in-left(0.6s);
    }

    & .rbs-carousel-title-lg {
      font-size: 2.6em;
      color: $text-light;
      @include animation-slide-in-left(0.9s);
    }

    & .rbs-carousel-btn {
      width: auto;
      padding: 1em 2.6em;
      border-radius: 30px;
      margin: 2em auto 1em auto;
      text-transform: uppercase;
      @include animation-slide-in-right(0.9s);
    }

    & .rbs-social-icons-pack {
      @include animation-slide-in-right(0.8s);
      & .fab {
        font-size: 2.2em;
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .carousel {
    & .rbs-carousel-content {
      padding: 8em 2em 1em 2em;

      & .rbs-carousel-title-sm {
        font-size: 1.4em;
      }

      & .rbs-carousel-title-sm-left {
        font-size: 1.4em;
      }

      & .rbs-carousel-title-lg {
        font-size: 2.4em;
      }

      & .rbs-social-icons-pack {
        & .fab {
          font-size: 2em;
        }
      }

      & .rbs-carousel-btn {
        margin-top: 1em;
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .carousel {
    & .rbs-carousel-content {
      & .rbs-carousel-title-sm {
        font-size: 1em;
      }

      & .rbs-carousel-title-sm-left {
        font-size: 1em;
      }

      & .rbs-carousel-title-lg {
        font-size: 2em;
      }

      & .rbs-social-icons-pack {
        & .fab {
          font-size: 1.6em;
        }
      }
    }
  }
}

@include media-breakpoint-down(sm) {
}
</style>
