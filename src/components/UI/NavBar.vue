<template>
	<div class="navbar">
		<router-link to="/">Домой</router-link>
		<router-link to="/posts">Посты</router-link>
		<router-link to="/about">О сайте</router-link>
	</div>
</template>

<script>
export default {
	name: 'my-navbar'
};
</script>

<style lang="scss" scoped>
.navbar {
	height: 50px;
	background-color: teal;
	box-shadow: 4px 4px 3px rgba(teal, 0.1);
	display: flex;
	justify-content: center;
	gap: 60px;
	align-items: center;
}
</style>
