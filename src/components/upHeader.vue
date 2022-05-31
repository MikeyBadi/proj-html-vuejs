<template>
  <div id="upH">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <span>English</span>
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </div>
      <div>
        <ul class="d-flex">
          <li>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Pages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Course Formats</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Course</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Demos</span>
            </a>
          </li>
          <li class="social">
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </a>

            <a href="#">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>

            <a href="#">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>

            <a href="#">
              <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </a>

            <a href="#">
              <font-awesome-icon icon="fa-brands fa-google-plus" />
            </a>

            <a href="#">
              <font-awesome-icon icon="fa-brands fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upHeader'
}
</script>

<style lang="scss" scoped>
#upH{
  border-bottom: 1px solid #C5C7DA;
  padding: 10px 0;
}
  *{
    color: #C5C7DA;
    font-size: 12px;
  }
  div{
    .fa-chevron-down{
      font-size: 10px;
    }
    span{
      margin-right: 5px;
    }
  }
  ul{
    margin-bottom: 0;
  }
  li span{
    margin:5px 10px;
  }
  .social{
    a{
      margin: 5px;
    }
  }
</style>