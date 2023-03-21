<template>
  <div class="login">
    <div class="even-column">
        <div class="left-side">
            <img src="../assets/images/vue.png">
            <div class="text-container">
                <h1>Welcome</h1>
                <h4>Autentication App</h4>
                <div class="action">
                    <p><RouterLink to="/login" style="color:black; text-decoration:none">Login</RouterLink></p>
                    <p><RouterLink to="/register" style="color:black; text-decoration:none; color:rgb(68, 119, 68); cursor: pointer">Register</RouterLink></p>
                </div>
            </div>
        </div>
        <div class="right-side">
            <div class="container">
                <div class="image-container">
                    <img src="../assets/images/user.png">
                </div>
                <div class="input-field">
                    <div class="input">
                        <label for="email">Username</label>
                        <input v-model="username" type="text" placeholder="Enter email">
                    </div>
                    <div class="input">
                        <label for="password">Password</label>
                        <input v-model="password" type="password" placeholder="Enter password">
                    </div>
                    <button @click="login">Login</button>
                </div>
            </div>
            <div class="last-part" style="width: 100%; height: 30px; background:#c1c1c1"></div>
            <div class="register" style="align-self: flex-end">
                <span>Forgot </span>
                <span style="color:rgb(68, 119, 68); cursor:pointer">password?</span>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
        *{
            margin: 0;
            box-sizing: border-box;
        }
        .even-column{
            display: flex;
            width: 100vw;
            height: 100vh;
            gap: 10px;
        }
        .even-column > *{
            flex-basis: 100%;
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 0 20px;
        }
        .even-column img{
            width: 80px;
            height: 80px;
        }
        .text-container{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .text-container h1{
            font-weight: 600;
            font-size: 40px;
            white-space: 5px;
            color: rgb(68, 119, 68);
        }
        .text-container h4{
            font-size: 400;
            white-space: 2px;
            font-size: 18px;
        }
        .text-container .action{
            display: flex;
            gap: 20px;
        }
        .right-side{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0;
        }
        .right-side .container{
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80%;
            width: 100%;
            padding: 20px 10px;
            flex-direction: column;
            border: 1px solid #c1c1c1;
        }
        .right-side .container .image-container{
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }
        .right-side .container .image-container img{
            width: 100%;
            border-radius: 50%;
            height: 100%;
        }
        .right-side .container .input-field{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .right-side .container .input{
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
        }
        .right-side .container .input input{
            width: 100%;
            height: 30px;
            padding: 0 10px;
        }
        .right-side .container button{
            width: 100%;
            height: 30px;
            color: #fff;
            background: rgb(68, 119, 68);
            border: none;
        }
    </style>

<script>

import axios from 'axios'
import router from '../router/index.js'
export default {
  name: 'SignUp',
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login(){
      try {
        let result = await axios.post("http://localhost:3000/login",{
            email: this.username,
            username: this.username,
            password: this.password
        })

        if (result.status === 200){
            alert(result.data.message)
            router.push('/home')
        }else{
            alert(result.data.message)
        }

      } catch (error) {
          console.error(error.message)
      }
    }
  }
}

</script>
