<template>
  <b-navbar toggleable="xl" type="dark">
    <b-navbar-toggle target="nav-collapse" class="ml-auto">
      <template><i class="fas fa-bars"></i></template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="text-uppercase d-flex justify-content-center">
        <b-nav-item class="mx-3 text-nowrap" href="#" v-scroll-to="'#team'">
          Accueil
        </b-nav-item>
        <b-nav-item class="mx-3 text-nowrap" href="#" v-scroll-to="'#laser'">
          Traitements Laser
        </b-nav-item>
        <b-nav-item class="mx-3 text-nowrap" href="#" v-scroll-to="'#contacts'">
          Contact
        </b-nav-item>
        <b-nav-item class="mx-3 text-nowrap" href="#" v-scroll-to="'#gallery'">
          Galerie
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style lang="scss" scoped>
@import '../mixins';
$nav-item-margin: 1.5em;

.navbar {
  z-index: 40;
  position: absolute;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  padding: 1rem;

  & .navbar-toggler {
    color: $text-light;
    outline: none;

    & i {
      font-size: 1.8em;
    }
  }

  & .navbar-nav {
    width: 100%;
    margin-top: 2em;

    & .nav-item {
      margin: 0 $nav-item-margin;

      &:last-of-type,
      &:first-of-type {
        margin-left: auto;
      }

      & .nav-link {
        color: $text-light;
        letter-spacing: $letter-spacing-sm;
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .navbar {
    & .navbar-collapse {
      background-color: $c-dark;
      min-height: 0;

      & .navbar-nav {
        margin-top: 0;
        text-align: center;

        & .nav-item {
          font-size: 1.8em;
          margin: 0;

          &:last-of-type,
          &:first-of-type {
            margin-left: 0;
          }
        }
      }
    }
  }
  // @include media-breakpoint-down(sm) {
  //   .navbar {
  //     & .navbar-collapse {
  //       & .navbar-nav {
  //         & .nav-item {
  //           .nav-link {
  //             color: $text-light-green;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>
