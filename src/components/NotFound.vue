<template>
  <div class="page page-404">
    <div class="wrapper">
      <h1>404!</h1>
      <p class="summary">页面，我找不到你，我找不到你啊～</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 5
    };
  },
  mounted() {
    //this.autoBack();
    //this.$router.push('/');
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    autoBack() {
      clearInterval(timer);
      let timer = setInterval(() => {
        this.num = this.num - 1;
        if (this.num == 0) {
          clearInterval(timer);
          this.goBack();
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
}
.wrapper {
  padding-right: 378px;
  background-size: 278px;
  background-position: right;
  background-repeat: no-repeat;
}

.page-404 .wrapper {
  background-image: url(https://dn-coding-net-production-static.qbox.me/static/47b05c7cffd4d5e77ef99275abaf9017.png);
}

.page-500 .wrapper {
  background-image: url(https://dn-coding-net-production-static.qbox.me/static/528d7710668c5fd6e6dfb4f61c2f9b65.png);
}
h1 {
  margin: 0;
  color: #4f565f;
  font-size: 120px;
  font-weight: bold;
}
a {
  text-decoration: none;
}
.summary {
  margin-top: 0;
  margin-bottom: 40px;
  color: #76808e;
  font-size: 24px;
}
.button {
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
  border: 1px solid #323a45;
  background-color: #323a45;
  color: #fff;
  font-size: 18px;
  padding: 0 30px;
  height: 48px;
  line-height: 46px;
}
.button:hover {
  background-color: #425063;
  border: 1px solid #425063;
}
</style>
