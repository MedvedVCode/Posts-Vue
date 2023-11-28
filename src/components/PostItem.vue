<template>
	<div class="post">
		<div>
			<p><strong>ID:</strong> {{ post.id }}</p>
			<p><strong>Название:</strong> {{ post.title }}</p>
			<p><strong>Описание:</strong> {{ post.body }}</p>
		</div>
		<div class="post__btn">
			<my-button @click="$emit('remove', post)">Удалить</my-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.post {
	padding: 15px;
	border: 1px solid teal;
	margin-top: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	&__btn {
		margin: 10px;
	}
}
</style>
