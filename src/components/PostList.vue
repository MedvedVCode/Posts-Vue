<template>
	<div v-if="posts.length > 0">
		<h3>Список постов:</h3>
		<transition-group name="posts-list">
			<post-item
				v-for="post in posts"
				:key="post.id"
				:post="post"
				@remove="$emit('remove', post)"
			/>
		</transition-group>
	</div>
	<h3
		v-else
		style="color: red"
	>
		Список постов пуст!!!!!
	</h3>
</template>

<script>
import PostItem from './PostItem';
export default {
	name: 'post-list',
	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {};
	},
	components: {
		PostItem,
	},
};
</script>

<style lang="scss" scoped>
.posts-list-item {
	display: inline-block;
	margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
	transition: all 0.4s ease;
}
.posts-list-enter-from,
.posts-list-leave-to {
	opacity: 0;
	transform: translateX(130px);
}
.posts-list-move {
  transition: transform 0.4s ease;
}
</style>
