<script setup>
	import HeaderVue from './Header.vue'
</script>
<template>
	<HeaderVue/>
	<main>
		<form>
			<center><input v-model.number="num" type="number" placeholder="Podaj ilość aukcji w miesiącu"/></center>
		</form>
		<div id="table">
			<div id="first">
				<center>U nas</center>
				<center><span>{{num * 0.25}}</span></center>
			</div>
			<div id="second">
				<center>U Allegro</center>
				<center><span>{{num * 0.5}}</span></center>
			</div>
		</div>
		<center style="margin-left: 60px;">Miesięcznie zaoszczędzisz:</center>
		<span><center style="margin-left: 60px;">{{ (num * 0.5) - (num * 0.25) }}zł </center></span>
		<center style="margin-left: 60px;" >Rocznie zaoszczędzisz:</center>
		<span><center style="margin-left: 60px;">{{ ((num * 0.5) - (num * 0.25) ) * 12}}zł </center></span>
	</main>
</template>

<script>

export default{
	name: 'OfferVue',
	data() {
		return {
			num: null,
		}
	} 
}

</script>

<style>
span{
	font-size: 20px;
}
#table{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width:120%;
}
#first, #second{
	width:100px;
	height:70px;
	border: 2px solid black;
}
main{
	position: absolute;
	transform: translate(-50%, -50%);
	top:50%;
	left:50%;
}
form{
	width:300px;
	height: 400px;

}
input{
	border:0px;
	border-bottom: 2px solid blue;
	width:350px;
	font-size: x-large;
	text-align: center;
}
input:focus{
	outline: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>