<template>
  <div class="container">
    <div class="row">
        <div class="col-2"
        v-for="(card, index) in courses"
        :key="`index-${index}`">
          <img :src="require(`../assets/img/thumb/${card.img}`)" alt="">
          <div class="container">
            <span class="description">{{card.type}}</span>
            <p>{{card.desc}}</p>
            <hr>
            <div class="d-flex justify-content-between">
              <StarRating
                :increment="0.1"
                :rating="card.starRate"
                :read-only="true"
                :star-size="10"
                :show-rating="false"
                :inline="true"
                inactive-color="#ffff"
                border-color="#ffd055"
                :border-width="1"
                :rounded-corners="true"
              />
              <div class="price">
                <span class="orPr">{{card.origPrice}}</span>
                <span class="pr">{{card.price}}</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name:'cardCompSecond',
  components:{
    StarRating,
  },

  data() {
    return {
      courses:[
        {
          img:'895786_7b4b_2-544x322.jpg',
          type:'Development >',
          desc:'The Complete iOS 10 & Swift 3 Developer Course',
          starRate: 4.2,
          origPrice:'$199.99',
          price:'$100'
        },
        {
          img:'1561458_7f3b-544x322.jpg',
          type:'Design >',
          desc:'CSS - The Complete Guide 2020 (incl. Flexbox,Grid & Sass)',
          starRate: 5,
          origPrice:'$199.99',
          price:'$100'
        },
        {
          img:'246154_d8b0_3-544x322.jpg',
          type:'Development >',
          desc:'Web Design for Beginners: Real World Coding in HTML & CSS',
          starRate: 4.6,
          origPrice:'$129.99',
          price:'$65'
        },
        {
          img:'1208228_d61c_4-544x322.jpg',
          type:'Design >',
          desc:'Digitally Painting Light and Color: Amateur to Master',
          starRate: 4.3,
          origPrice:'$139.99',
          price:'$70'
        },
        {
          img:'186792_41e4_4-544x322.jpg',
          type:'Arts & Crafts >',
          desc:'Become an Arabic Calligraphy Artist from Scratch',
          starRate: 4.7,
          origPrice:'',
          price:'$100'
        },
        {
          img:'1776542_30b1-544x322.jpg',
          type:'Google >',
          desc:'Google Searching Ninja!',
          starRate: 3.9,
          origPrice:'$89.99',
          price:'$45'
        },
        {
          img:'949316_2a64_11-544x322.jpg',
          type:'Arts & Crafts >',
          desc:'Foundations for Mastering Watercolor Painting',
          starRate: 4.7,
          origPrice:'$19.99',
          price:'$10'
        },
        {
          img:'366802_6fcc-544x322.jpg',
          type:'Food & Beverage >',
          desc:'Get Wine-Smart',
          starRate: 4.3,
          origPrice:'$49.99',
          price:'$25'
        },
        {
          img:'381588_2e6d_4-544x322.jpg',
          type:'Arts & Crafts >',
          desc:'The Colored Pencil Drawing Course',
          starRate: 4.3,
          origPrice:'$34.99',
          price:'$18'
        },
        {
          img:'838056_611a_3-544x322.jpg',
          type:'Arts & Crafts >',
          desc:'Paint Realistic Watercolor and Botanicals - STUDIO BASICS',
          starRate: 4.3,
          origPrice:'$69.99',
          price:'$35'
        },
        {
          img:'1414956_d944_15-544x322.jpg',
          type:'Arts & Crafts >',
          desc:'Mastering Brushstrokes - Part 1',
          starRate: 4.7,
          origPrice:'$19.99',
          price:'$10'
        },
        {
          img:'1109398_4c13-544x322.jpg',
          type:'Arts & Crafts >',
          desc:'Paint Realistic Watercolor and Botanicals - MAGNOLIAS',
          starRate: 4.7,
          origPrice:'$69.99',
          price:'$35'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

  img{
    width: 100%;
  }
.col-2{
  border: 1px solid $lgrey;
  padding: 0;
  margin-right: 10px;
  margin-bottom: 35px;
  flex-basis: calc(100% / 6.3);
  .description, .orPr{
    font-size: 10px;
    color: #cecece;
  }
  p, .pr{
    font-size: 11px;
    display: block;
  }
  .price{
    text-align: end;
    .orPr{
      text-decoration: line-through;
      display: block;
      margin-bottom: -5px;
    }
  }
}
</style>