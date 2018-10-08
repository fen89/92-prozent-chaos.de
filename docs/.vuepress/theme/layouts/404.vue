<template>
  <div class="notfound">
    <div id="background-wrap" class="not-found">
        <div class="x1">
        <div class="cloud"></div>
        </div>

        <div class="x2">
        <div class="cloud"></div>
        </div>

        <div class="x3">
        <div class="cloud"></div>
        </div>

        <div class="x4">
        <div class="cloud"></div>
        </div>

        <div class="x5">
        <div class="cloud"></div>
        </div>
    </div>

    <div class='c'>
        <div class='_404'>404</div>
        <hr>
        <div class='_1'>DIE SEITE</div>
        <div class='_2'>WURDE NICHT GEFUNDEN</div>
        <v-btn class="btn" color="primary" to="/" flat>
           ZURÜCK ZUM MARS
        </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDemo: false
    };
  },
};
</script>

<style scoped>

.not-found {
    font-family:  'Roboto', sans-serif;
    background:#33cc99; 
    color:#fff;
    height:100vh;
    overflow: hidden;
}
.c {
    text-align: center;
    display: block;
    position: relative;
    width:80%;
    margin:100px auto;
}
._404{
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
}
._1{
    text-align:center;
    display:block;
    position:relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
}
._2{
    text-align:center;
    display:block;
    position: relative;
    font-size: 20px;
}
.text{
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
}


.btn{
    background-color: rgb( 255, 255, 255 );
    position: relative;
    display: inline-block;
    width: 358px;
    padding: 5px;
    z-index: 5;
    font-size: 25px;
    margin:0 auto;
    color: $background_color;
    text-decoration: none;
    margin-right: 10px
}
.right{
    float:right;
    width:60%;
}

hr{
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height:10px;
    z-index: -10;
}


/* Clouds */

#background-wrap {
    bottom: 0;
	left: 0;
	padding-top: 50px;
	position: fixed;
	right: 0;
	top: 0;
	z-index: -1;
}

/* KEYFRAMES */

@-webkit-keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
}

@-moz-keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
}

@keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
}

/* ANIMATIONS */

.x1 {
	-webkit-animation: animateCloud 35s linear infinite;
	-moz-animation: animateCloud 35s linear infinite;
	animation: animateCloud 35s linear infinite;
	
	-webkit-transform: scale(0.65);
	-moz-transform: scale(0.65);
    transform: scale(0.65);
    margin-top: 25vh;    
}

.x2 {
	-webkit-animation: animateCloud 20s linear infinite;
	-moz-animation: animateCloud 20s linear infinite;
	animation: animateCloud 20s linear infinite;
	
	-webkit-transform: scale(0.3);
	-moz-transform: scale(0.3);
	transform: scale(0.3);
}

.x3 {
	-webkit-animation: animateCloud 30s linear infinite;
	-moz-animation: animateCloud 30s linear infinite;
	animation: animateCloud 30s linear infinite;
	
	-webkit-transform: scale(0.5);
	-moz-transform: scale(0.5);
	transform: scale(0.5);
}

.x4 {
	-webkit-animation: animateCloud 18s linear infinite;
	-moz-animation: animateCloud 18s linear infinite;
	animation: animateCloud 18s linear infinite;
	
	-webkit-transform: scale(0.4);
	-moz-transform: scale(0.4);
	transform: scale(0.4);
}

.x5 {
	-webkit-animation: animateCloud 25s linear infinite;
	-moz-animation: animateCloud 25s linear infinite;
	animation: animateCloud 25s linear infinite;
	
	-webkit-transform: scale(0.55);
	-moz-transform: scale(0.55);
	transform: scale(0.55);
}

/* OBJECTS */

.cloud {
	background: #fff;
	background: -moz-linear-gradient(top,  #fff 5%, #f1f1f1 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(5%,#fff), color-stop(100%,#f1f1f1));
	background: -webkit-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
	background: -o-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
	background: -ms-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
	
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	border-radius: 100px;
	
	-webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
	box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

	height: 120px;
	position: relative;
	width: 350px;
}

.cloud:after, .cloud:before {
    background: #fff;
	content: '';
	position: absolute;
	z-indeX: -1;
}

.cloud:after {
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	border-radius: 100px;

	height: 100px;
	left: 50px;
	top: -50px;
	width: 100px;
}

.cloud:before {
	-webkit-border-radius: 200px;
	-moz-border-radius: 200px;
	border-radius: 200px;

	width: 180px;
	height: 180px;
	right: 50px;
	top: -90px;
}
</style>

<style src="../styles/theme.styl" lang="stylus"></style>