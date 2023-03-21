<template>
  <div class="home">
    <header>
        <div class="flex-box">
            <img src="../assets/images/logo.png">
        </div>
        <div class="flex-box">
            <ul>
                <li>ABOUT US</li>
                <li>ACADEMICS</li>
                <li>WHY GIC</li>
                <li>LIFESTYLE</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div class="flex-box">
            <i>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>    
                <div></div>              
            </i>
            <p style="cursor: pointer;">Logout</p>
        </div>
    </header>
    <main>
        <div class="left-side">
            <h1>Deep Learning Through Deep Connections.</h1>
            <p>Taking a deep dive.</p>
            <span>The hero's journey starts here. Become a learning legend.</span>
            <button>GET STARTED</button>
            <span>Elevate your experience. Empower the next generation.</span>
            <a href="#">JOIN OUR TEAM</a>
        </div>
        <div class="right-side">
            <img src="../assets/images/pic.png" style="width: 100%">
        </div>
    </main>
  </div>
</template>

    <style>
        *{
            font-size: inherit;
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
        body{
            width: 100vw;
            height: 100vh;
        }
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 10vh;
            padding: 0 40px;
            margin-bottom: 20px;
        }
        header ul{
            display: flex;
            gap: 30px;
        }

        header ul li{
            text-decoration: none;
            list-style: none;
            font-weight: 700;
        }
        header .flex-box:nth-child(3){
            display: flex;
            align-items: center;
            gap: 40px;
        }
        header .flex-box:nth-child(3) i{
            width: 20px;
            height: 20px;
            position: relative;
        }
        header .flex-box:nth-child(3) i div{
            position: absolute;
            left: 40px;
            height: 20px;
            width: 2px;
            background: #000;
            display: inline;
        }
        header .flex-box:nth-child(3) p{
            color: rgb(224, 158, 169);
            font-size: 24px;
            font-weight: 600;
        }
        main{
            height: 90vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 80px;
        }
        main .left-side{
            display: flex;
            flex-direction: column;
            max-width: 400px;
        }
        main .left-side h1{
            font-size: 40px;
            margin-bottom: 10px;
        }
        main .left-side p{
            font-size: 20px;
            margin-bottom: 20px;
        }
        main .left-side span{
            font-size: 14px;
            margin-bottom: 20px;
            margin-top: 10px;
        }
        main .left-side button{
            height: 40px;
            width: 200px;
            background: rgb(224, 158, 169);
            color: #fff;
            border: none;
            margin-bottom: 40px;
            cursor: pointer;
        }
        main .left-side a{
            color: #000;
        }
    </style>
