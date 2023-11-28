<template>
	<div  class="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #153e32;
	margin-top: 20px;
}

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
	&__btns {
		display: flex;
		justify-content: space-between;
		margin-top: 15px;
		margin-bottom: 15px;
	}
}
</style>