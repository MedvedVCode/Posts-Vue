<template>
	<form @submit.prevent>
		<h3>Создание поста:</h3>
		<my-input
			placeholder="Название"
			v-model="post.title"
		/>
		<my-input
			placeholder="Описание"
			v-model="post.body"
		/>
		<my-button
			style="align-self: flex-end; margin-top: 15px"
			@click="createPost"
		>
			Создать
		</my-button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			post: {
				title: '',
				body: '',
			},
		};
	},
	methods: {
		createPost() {
			this.$emit('create', this.post);
			this.post.title = '';
			this.post.body = '';
		},
	},
};
</script>

<style lang="scss" scoped>
form {
	display: flex;
	flex-direction: column;
}

.form__btn {
	margin-top: 15px;
}
</style>
