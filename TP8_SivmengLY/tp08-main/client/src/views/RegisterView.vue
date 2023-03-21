<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="register">
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
                <div class="text1-container">
                    <h1 style="font-weight: 300;">Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                </div>
                <hr>
                <div class="input-field">
                    <div class="input">
                        <label for="email">Email</label>
                        <input v-model="email" type="email" placeholder="Enter email">
                    </div>
                    <div class="input">
                        <label for="Username">Username</label>
                        <input v-model="username" type="Username" placeholder="Username">
                    </div>
                    <div class="input">
                        <label for="password">Firstname</label>
                        <input v-model="firstname" type="text" placeholder="First Name">
                    </div>
                    <div class="input">
                        <label for="password">Last Name</label>
                        <input v-model="lastname" type="text" placeholder="Last Name">
                    </div>
                    <div class="input">
                        <label for="password">Password</label>
                        <input v-model="password" type="password" placeholder="Create your password">
                    </div>
                    <div class="div" style="display: flex; flex-direction: column; gap: 5px;">
                        <div>
                            <span>By creating an account you agree to our </span>
                        <span style="cursor: pointer; color: rgb(46, 46, 255);">Terms & Privacy.</span>
                        </div>
                        <button @click="signup" style="cursor:pointer">Sign up</button>
                    </div>
                </div>
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
            height: 80%;
            width: 100%;
            padding: 20px 10px;
            flex-direction: column;
            border: 1px solid #c1c1c1;
        }

        .right-side .container .text1-container{
            width: 100%;
        }

        .right-side .container hr{
            margin-bottom: 20px;
            height: 1px;
            opacity: 0.2;
        }

        .right-side .container button{
            height: 30px;
            width: 200px;
            background: rgb(68, 119, 68);
            color: #fff;
            border: none;
        }

        .input-field{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .input{
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
        }
        .input input{
            width: 100%;
            height: 30px;
            padding: 0 10px;
        }
        
    </style>

<script>

import axios from 'axios'
export default {
  name: 'SignUp',
  data(){
    return {
      email: '',
      username: '',
      firstname: '',
      lastname: '',
      password: ''
    }
  },
  methods: {
    async signup(){
      try {
        let result = await axios.post("http://localhost:3000/register",{
            email: this.email,
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            password: this.password
        })

        if (result.status === 200){

        }


      } catch (error) {
          console.error(error.message)
      }
    }
  }
}

</script>
