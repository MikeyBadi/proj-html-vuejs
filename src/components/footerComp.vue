<template>
  <footer>
    <div class="fThings">
      <div class="fItem">
        <h6>ABOUT</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto reiciendis culpa, earum ratione quam minima obcaecati eaque cum! Rerum laboriosam est nulla nemo commodi quae dolor esse ad assumenda.</p>
      </div>
      <div class="fItem">
        <h6>CONTACT</h6>
        <p class="address">USA, California 20, First Avenue, California</p>
        <p>Tel.:+1 212 458 300 32</p>
        <p class="fax">Fax:+1 212 375 24 14</p>
        <span>info@masterstudy.com</span>
      </div>
      <div class="fItem">
        <h6>SOCIAL NETWORK</h6>
        <div>
          <font-awesome-icon icon="fa-brands fa-facebook" />
          <font-awesome-icon icon="fa-brands fa-instagram" />
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          <font-awesome-icon icon="fa-brands fa-pinterest" />
          <font-awesome-icon icon="fa-brands fa-twitter" />
          <font-awesome-icon icon="fa-brands fa-dribbble" />
          <font-awesome-icon icon="fa-brands fa-google-plus" />
          <font-awesome-icon icon="fa-brands fa-skype" />
        </div>
      </div>
      <div class="fItem">
        <img src="../assets/img/Top-udemy-courses-90-percent-off.jpg" alt="">
      </div>
    </div>
    <hr>
    <div class="subFooter">
      <img src="../assets/img/footer-logo2x-50x56.png" alt="">
      <p>Copyright &copy; 2020. <a href="#">MasterStudy.</a>Theme by <a href="#">StylemixThemes</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name:'footerComp'
}
</script>

<style lang="scss" scoped>
  footer{
    background-color: #272F42;
    color: white;
    .fThings{
      padding: 0 20%;
      display: flex;
      justify-content: space-between;
      padding-top: 50px;
      padding-bottom: 50px;
      .fItem{
        width: calc(100%/5);
        h6{
          font-size: 12px;
        }
        p{
          font-size: 10px;
          margin: 0;
        }
        .address{
          margin-bottom: 1rem;
        }
        .fax{
          margin-bottom: 1rem;
        }
        span{
          font-size: 10px;
          color: #9AA9A5;
        }
        .fa-facebook, .fa-instagram, .fa-linkedin-in, .fa-pinterest, 
        .fa-twitter, .fa-dribbble, .fa-google-plus, .fa-skype{
          padding: 10px;
          border-radius: 50%;
          margin: 2px;
          cursor: pointer;
        }
        .fa-facebook{
          background-color: #3C5997;
        }
        .fa-instagram{
          background-color: #EA4C89;
        }
        .fa-linkedin-in{
          background-color: #0277B5;
        }
        .fa-pinterest{
          background-color: #BD091C;
        }
        .fa-twitter{
          background-color: #1EA1F1;
        }
        .fa-dribbble{
          background-color: #C32BA3;
        }
        .fa-google-plus{
          background-color: #DB4537;
        }
        .fa-skype{
          background-color: #02AFF0;
        }
      }
      img{
        width: 100%;
      }
    }
    .subFooter{
      padding: 0 20%;
      img{
        height: 25px;
        margin-right: 15px;
        display: inline-block;
      }
      p{
        display: inline-block;
        font-size: 10px;
        a{
          color: white;
        }
      }
    }
  }

</style>