const { createApp } = Vue;

// const authURL = "https://vue3-course-api.hexschool.io/v2";
// const path = "hao-ye";

const app = createApp({
  data() {
    return {
      authURL: "https://vue3-course-api.hexschool.io/v2",
      path: "hao-ye",
      user: {
        uername: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const res = await axios.post(`${this.authURL}/admin/signin`, this.user);
        console.log(res);
        const { token, expired } = res.data;
        document.cookie = `hexToken=${token};expires=${new Date(
          expired
        )};path=/`;
        window.location = "product.html";
        
      } catch (err) {

        console.log(err);
        alert(err.response.data.message + "請確認 Email 跟密碼是否正確");
      }
    },
  },
  mounted() {},
});

app.mount("#app");
