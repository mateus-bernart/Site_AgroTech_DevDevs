@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
/*Responsividade*/
@media (max-width:1040px) {
    header{
        padding: 12px 20px;
    }
    section{
        padding: 100px 20px;
    }
    header {
        padding: 30px 10%;
    }
}


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}
body{
    background-color: #24252A;

}

li, a, button{
    font-weight: 500;
    font-size: 20px;
    color: #EDf0f1;
    text-decoration: none;

}


header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 150px;
}
header h1{
color: #fff;
}
header span{
  font-size:1.6rem;
  font-weight: 500;
  color: lightgreen;
}
header .btn{
  padding-left: 90px;
}
.text{
    font-weight: 500;
    font-size: 16px;
    color: #EDf0f1;
    text-decoration: none;
    
}

.logo {
    cursor: pointer;
}

.nav_links{
    list-style: none;
}

.nav_links li{
    display: inline-block;
    padding: 0px 20px ;
}
/* 
Position relative to make a block and paring it to the element (text)
*/
.nav_links li a{
    transform: all 0.3s ease 0s;
    position: relative;

}

.nav_links li a:hover{
color:#00ff11 ;

}

.nav_links li a:hover::after{
    color:#00ff11 ;
    width: 100%;
    }

.nav_links li a:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #00ff11;
    transition: width 0.3s ease-in-out;
}

button{
    padding: 9px 25px;
    background-color: rgb(20, 149, 0);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;

}

button:hover{
    background-color: rgb(32, 190, 0);

}

section{
    padding: 100px 100px;
}

.inicio{
    position: relative;
    width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
}

.inicio video{
    z-index: 000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.inicio::before{
    z-index: 777;
    content: "";
    position: absolute;
    background-color: rgba(3, 94, 251, 0.223);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.inicio .content{
    z-index: 888;
    color: #fff;
    width: 70%;
    margin-top: 0px;
    display: none;
}

.inicio .content.active{
    display: block;
}

.inicio .content h1{
    font-size: 4em;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 75px;
    margin-bottom: 40px;
}

.inicio .content h1 span{
    font-size: 1.2em;
    font-weight: 600;
}

.inicio .content p{
    margin-bottom: 65px;
}

.inicio .content a{
background-color: #fff;
padding: 15px 35px;
color: #1680AC;
font-size: 1.1em;
font-weight: 500;
text-decoration: none;
border-radius: 2px;
}

.slider-navigation{
    z-index: 888;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(80px);
    margin-bottom: 12px;
}

.slider-navigation .nav-btn{
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
    transition: 0.2      ease;
}

.slider-navigation .nav-btn.active{
    background-color: rgb(32, 190, 0);
} 

.slider-navigation .nav-btn:not(:last-child){
    margin-right: 20px;
}

.slider-navigation .nav-btn:hover{
    transform: scale(1.2);
}

.video-slide{
    position: absolute;
    width: 100%;
    clip-path: circle(0% at 0 50%);

}

.video-slide.active{
    clip-path: circle(150% at 0 50%);
    transition: 2s ease;
    transition-property: clip-path;
}
