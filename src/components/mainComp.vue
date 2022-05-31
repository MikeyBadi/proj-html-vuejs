<template>
<div>
  <!-- FIRST CARD -->
  <div class="container fCard">
    <h6>Popular Devlopment Courses</h6>
    <cardComp/>
  </div>
  <!-- /FIRST CARD -->

  <!-- LEARN MORE -->
  <div class="learn">
    <div class="lInfo">
      <h1>Limitless learning, <br> more possibilities</h1>
      <p>Online courses open the opportunity for learning to almost anyone, <br> regardless of thei scheduling commitments.</p>
      <btnRed class="button" btnTxt="READ MORE"/>
    </div>
  </div>
  <!-- /LEARN MORE -->

  <!-- SECOND CARD -->
  <div class="sCard">
    <h1>Recent courses</h1>
    <ul>
      <li class="activeMenu">All Categories</li>
      <li>Business</li>
      <li>Design</li>
      <li>Development</li>
      <li>IT & Softwere</li>
      <li>Lifestyle</li>
      <li>Marketing</li>
      <li>Office Productivity</li>
    </ul>
    <cardCompSecond/>
    <btnRed class="button" btnTxt="SHOW ALL"/>
  </div>
  <!-- /SECOND CARD -->

  <!-- NEWSLETTER -->
  <div class="newsletter">
    <div class="newsSub">
      <div class="textNews">
        <h6>Subscibe our newsletter</h6>
        <p>There are many variations of passages of Lorem Ipsum avalible, but the majority have suffered alteration in some form, by injected humor, or randomised words</p>
      </div>
      <div class="mailNews">
        <p>YOUR E-MAIL ADDRESS</p>
        <input type="email" placeholder="Enter your E-mail">
        <span>SUBSCRIBE</span>
      </div>
    </div>
  </div>
  <!-- /NEWSLETTER -->

  <!-- THIRD CARD -->
  <div class="tCard">
    <h1>Popular courses</h1>
    <p>Dicover our most popular courses for self learning</p>
    <cardCompThird/>
    <div class="tArrows d-flex justify-content-center">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </div>
  <!-- /THIRD CARD -->

  </div>
  <!-- PLANS -->
  <div class="container plans">

    <div class="planOne">
      <img src="../assets/img/image_box_1-221x231.png" alt="">
      <div>
        <h3>Become an Instructor</h3>
        <p>Teach What you love. Masterstudy gives you the tools to create a course</p>
        <btnRed class="button" btnTxt="START TEACHING"/>
      </div>
    </div>

    <div class="planTwo">
      <img src="../assets/img/image_box_2-234x231.png" alt="">
      <div>
        <h3>Become an Instructor</h3>
        <p>Teach What you love. Masterstudy gives you the tools to create a course</p>
        <btnRed class="button" btnTxt="DOING BUSINESS"/>
      </div>
    </div>

  </div>
  <!-- /PLANS -->

  <!-- TESTIMONIAL -->
  <div class="testimonial">
    <div class="txtTesti">
      <h3>Investing for Your Future</h3>
      <p class="speach">
        It is no exaggeration to say this MasterStudy experice was transformative-both professionally and personally. This workshop will long remain a high point of my life. Thanks again.... Iam feeling energized and eager to start teaching my next week. I can't wait to use all of my new teaching tools. I will absolutely raccomend this workshop to other educators!
      </p>
      <p class="nameTesti">Linda Green</p>
      <span>Product Manager, Apple Inc</span>

    </div>
  </div>
  <!-- /TESTIMONIAL -->
</div>
</template>

<script>
import cardComp from './cardComp.vue'
import cardCompSecond from './cardCompSecond.vue'
import cardCompThird from './cardCompThird.vue'
import btnRed from './btnRed.vue'
export default {
  name:'mainComp',

  components:{
    cardComp,
    cardCompSecond,
    cardCompThird,
    btnRed
  },
  
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';
  .fCard{
    margin-top: 60px;
    margin-bottom: 50px;
  }

  .learn{
    background-image: url('../assets/img/bg.png');
    background-size: cover;
    height: 446px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 100px;
    .lInfo{
      width: 60%;
      align-self: center;
      p{
        font-size: 14px;
        padding: 20px 0 30px;
      }
    }
  }

  .sCard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 90px;
    li{
      display: inline-block;
      margin: 15px;
      font-size: 14px;
      color: #adadad;
      cursor: pointer;
    }
    .activeMenu{
      background-color: #F0F4FA;
      padding: 5px 10px;
      border-radius: 50px;
    }
    .button{
      margin-top: 30px;
    }
  }

  .newsletter{
    background-color: $red;
    padding: 30px 0;
    color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    .newsSub{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60%;
      .textNews{
        width: 60%;
        display: inline-block;
        p{
          font-size: 12px;
        }
      }
      .mailNews{
        display: inline-block;
        font-size: 10px;
        width: 57%;
        p{
          margin-left: 10px;
        }
        input{
          width: 50%;
          padding: 10px 7px 11.7px;
          background-color: #F0F2F5;
          border: none;
          margin-left: 10px;
        }
        span{
            font-size: 12px;
            background-color: $search;
            color: white;
            padding: 11px;
            vertical-align: middle;
            margin-bottom: 2px;
        }
      }
    }
  }

  .tCard{
    margin: 0 0 50px;
    background-color: #F0F4FA;
    padding-top: 100px;
    h1, p{
      text-align: center;
    }
    .tArrows{
      margin-top: 40px;
        .fa-chevron-left, .fa-chevron-right{
          background-color: white;
          border: 1px solid #E0E0E0;
          color: #E0E0E0;
          font-size: 12px;
          padding: 9px;
          width: 12px;
          margin-bottom: 50px;
          cursor: pointer;
        }
        .fa-chevron-left:active, .fa-chevron-right:active{
          color: white;
          background-color: #c7c5c5;
        }
    }
  }

  .plans{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    .planOne, .planTwo{
      border: 1px solid $lgrey;
      display: flex;
      width: 49%;
      align-items: center;
      padding: 50px 30px;
      p{
        font-size: 14px;
        font-weight: 100;
      }
      img{
        width: 30%;
        margin-right: 30px;
      }

    }
  }
  
  .testimonial{
    height: 500px;
    background-image: url('../assets/img/testimonial-1-1917x640-1-1914x639.jpg');
    background-size: cover;
    display: flex;
    position: relative;
    .txtTesti{
      top: 90px;
      left: 20%;
      position:absolute;
      width: 550px;
      clip-path: polygon(0 0, 89% 0, 89% 45%, 91% 48%, 89% 51%, 89% 100%, 0 100%);
      background-color: white;
      padding: 50px 110px 50px 60px;
      h3{
        margin-bottom: 30px;
      }
      .speach{
        font-size: 14px;
        font-weight: 100;
        margin-bottom: 30px;
      }
      .nameTesti{
        margin-bottom: 0px;
        font-size: 12px;
        margin-bottom: -10px;
      }
      span{
        font-weight: 100;
        font-size: 12px;

      }

    }
  }
</style>