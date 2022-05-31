<template>
  <header>
<!-- UPHEADER -->
      <upHeader/>
<!-- /UPHEADER -->

<!-- NAV -->
    <nav class="container">
      <ul class="d-flex align-items-center">
        <li>
          <a href="#">
            <img src="../assets/img/MasterStudy.svg" alt="MasterStudy">
          </a>
        </li>

        <li class="search">
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-bars" />
            <span>CATEGORY</span>
            <input type="search" placeholder="Search courses" name="" id="">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </a>
        </li>

        <li class="business">
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-bullhorn" />
            <span>Become an Instructor</span>
          </a>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-briefcase" />
            <span>For Enterprise</span>
          </a>
        </li>

        <li>
          <div class="login">
          <a href="">
            <font-awesome-icon icon="fa-regular fa-user" />
            <span>Log In</span>
          </a>
            <btnRed class="button" btnTxt="SIGN UP"/>
            <font-awesome-icon icon="fa-regular fa-bookmark" />
          </div>
        </li>
      </ul>
    </nav>
<!-- /NAV -->
    <div class="d-flex justify-content-center moreThings">
      <span><font-awesome-icon icon="fa-solid fa-chart-simple" />Business</span>
      <span><font-awesome-icon icon="fa-solid fa-palette" />Design</span>
      <span><font-awesome-icon icon="fa-solid fa-gear" />Development</span>
      <span><font-awesome-icon icon="fa-regular fa-face-smile-beam" />Lifestyle</span>
      <span><font-awesome-icon icon="fa-solid fa-wallet" />Office productivity</span>
    </div>
<!-- JUMBOTRON -->
    <div class="jumbotron d-flex">
      <div class="jumbo-txt align-self-center">
        <h1>Udemy Affiliate Sales</h1>
        <p>Monetize your audience and attract new customers with Udemy</p>
      </div>
      <div class="jumbo-img">
        <img src="../assets/img/slide-1.jpg" alt="">
      </div>
    </div>
<!-- /JUMBOTRON -->
    
  </header>
</template>

<script>
import btnRed from './btnRed.vue'
import upHeader from './upHeader.vue'
export default {
  name: 'headerComp',
  components:{
    btnRed,
    upHeader
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

  ul{
    display: flex;
    justify-content: space-between;
    li{
      height: 100%;
      text-align: center;
      a{
        font-size: 10px;
        color: #767776;
      }
      img{
        height: 35px;
      }
    }
  }
  nav{
    ul{
      padding-left: 0;
      margin: 20px 0;
      .search{
        width: 47%;
        input{
          width: 80%;
          padding: 10px 7px;
          background-color: #F0F2F5;
          border: none;
          margin-left: 10px;
        }
        .fa-magnifying-glass{
          font-size: 12px;
          background-color: $search;
          color: white;
          padding: 11.5px;
          vertical-align: middle;
          margin-bottom: 2px;
        }
      }
      .business{
        span{
          margin-left: 5px;
          margin-right: 30px;
        }
      }
      .login{
        span{
          margin-left: 5px;
        }
        .button{
          margin: 0 30px;
        }
      }
    }
    .login{
      .button{
        display: inline-block;
      }
    }
  }
  .jumbotron{
    background-color: $red;
    color: white;
    .jumbo-txt{
      width: 50%;
      height: 100%;
      padding-left: 10%;
      p{
        font-size: 20px;
      }
    }
    .jumbo-img{
      clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
      width: 50%;
      img{
        width: 100%;
      }
    }

  }

  .moreThings{
    background-color: $dblue;
    color: white;
    font-size: 12px;
    padding: 20px 0;
    margin-bottom: 30px;
    span{
      margin-right: 60px;
    }
    .fa-chart-simple, .fa-palette, .fa-gear, .fa-face-smile-beam, .fa-wallet{
      font-size: 16px;
      margin-right: 5px;
    }
  }

</style>