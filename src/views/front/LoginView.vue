<template>
  <form class="form-signin" @submit.prevent="login">
    <!-- v-on 可用@縮寫 -->
    <div class="form-floating mb-3">
      <!-- v-model此處綁定user.username -->
      <input
        v-model="user.username"
        type="email"
        class="form-control"
        id="username"
        placeholder="name@example.com"
        required
        autofocus
      />
      <label for="username">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <!-- v-model 此處綁定user.password -->
      <input
        v-model="user.password"
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        required
      />
      <label for="password">Password</label>
    </div>
    <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
      登入
    </button>
  </form>
</template>

<script>
const { VITE_APP_URL } = import.meta.env;
export default {
  // 資料
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  //方法
  methods: {
    login() {
      this.$http
        .post(`${VITE_APP_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          // console.log(token, expired);
          // 儲存cookie
          // expires是設置有效時間
          document.cookie = `azraelkToken=${token}; expires=${new Date(
            expired
          )};`; //儲存token
          this.$router.push('/admin/products');
        })
        .catch((err) => {
          alert(err.data.massage);
        });
    },
  },
};
</script>