<template>
  <div class="rbs-contacts" id="contacts">
    <div class="rbs-title">
      Docteur Radostina BACHVAROVA-STOYANOVA <br />Dermatologue et vénérologue
    </div>
    <div class="container rbs-contacts-content">
      <div class="row justify-content-center">
        <div class="col">
          <iframe
            class="rbs-contacts-map"
            src="https://maps.google.com/maps?q=88%20avenue%20de%20la%20gare,%2074700%20Sallanches%20France&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            style="border: 0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col">
          <div class="rbs-contacts-info">
            <h3 class="rbs-contacts-info-title">Contactez-nous</h3>
            <table>
              <tr>
                <td><i class="fas fa-phone"></i></td>
                <td><a href="tel:+334 50 91 22 81">+334 50 91 22 81</a></td>
              </tr>
              <tr>
                <td><i class="fas fa-envelope"></i></td>
                <td>
                  <a href="mailto:ladermatologue@gmail.com"
                    >ladermatologue@gmail.com</a
                  >
                </td>
              </tr>
              <tr>
                <td><i class="fas fa-map-marker-alt"></i></td>
                <td>
                  <a
                    href="https://www.google.com/maps/place/88+Avenue+de+la+Gare,+74700+Sallanches,+France/@45.935491,6.6340089,17z/data=!4m9!1m2!2m1!1s88+avenue+de+la+gare+les+elysees+faucigny+74700+Sallanches+France!3m5!1s0x478bfddbe7e02b7f:0x71bd6c4a76c493ed!8m2!3d45.9350183!4d6.6338085!15sCkE4OCBhdmVudWUgZGUgbGEgZ2FyZSBsZXMgZWx5c2VlcyBmYXVjaWdueSA3NDcwMCBTYWxsYW5jaGVzIEZyYW5jZZIBEWNvbXBvdW5kX2J1aWxkaW5n?hl=en-US"
                    >88 Avenue de la Gare, ELYSÉE FAUCIGNY, 74700 Sallanches,
                    France</a
                  >
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '../mixins';

.rbs-contacts {
  height: 100%;
  background-color: $c-dark;
  padding: 1em;

  & .rbs-title {
    margin: 2em 0;
  }
  & .rbs-contacts-content {
    background-color: $c-light;

    & .col {
      padding: 0;
    }

    & .rbs-contacts-map {
      width: 100%;
      min-width: 20em;
      height: 100%;
      min-height: 18em;
    }

    & .rbs-contacts-info {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      padding: 3.4em;
      height: 100%;

      & td {
        padding: 0.4em 0;

        & a {
          color: $text-dark;
        }

        & i {
          text-align: center;
          font-size: 1.5em;
          margin-right: 0.5em;
        }

        &:nth-of-type(1) {
          text-align: center;
          color: $c-palette-primary;
        }
      }
    }
  }
}

@include media-breakpoint-down(sm) {
  .rbs-contacts {
    & .rbs-contacts-content {
      & .rbs-contacts-map {
        min-width: 16em;
      }

      & .rbs-contacts-info {
        padding: 2em 1em;
      }
    }
  }
}
</style>
