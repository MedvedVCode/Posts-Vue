<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'my-button',
};
</script>

<style lang="scss" scoped>
.btn {
	border: 1px solid teal;
	padding: 10px 15px;
	border-radius: 10px;
	background: none;
	color: teal;
	&:hover {
		cursor: pointer;
		background-color: teal;
		color: white
	}
}
</style>
