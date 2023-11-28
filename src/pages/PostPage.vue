<template>
	<div>
		<h1>Страница с постами</h1>
		<my-navbar></my-navbar>
		<my-input
			v-model="searchQuery"
			placeholder="Поиск по названию ..."
		/>
		<div class="app__btns">
			<my-button @click="showDialog">Создать пост</my-button>
			<my-select
				v-model="selectedSort"
				:options="sortOptions"
			/>
		</div>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<post-list
			:posts="sortedAndSearchPosts"
			@remove="removePost"
			v-if="!isPostsLoading"
		/>
		<div v-else>Идет загрузка ...</div>
		<!-- <div class="page__wrapper">
			<div
				v-for="pageNum in totalPages"
				:key="pageNum"
				class="page"
				:class="{
					page__current: page === pageNum,
				}"
				@click="changePage(pageNum)"
			>
				{{ pageNum }}
			</div>
		</div> -->
		<div
			ref="observer"
			class="observer"
		></div>
	</div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import axios from 'axios';
export default {
	name: 'App',
	data() {
		return {
			posts: [],
			page: 1,
			limit: 10,
			totalPages: 0,
			dialogVisible: false,
			isPostsLoading: false,
			selectedSort: '',
			sortOptions: [
				{ value: 'title', name: 'По названию' },
				{ value: 'body', name: 'По описанию' },
			],
			searchQuery: '',
		};
	},
	methods: {
		createPost(post) {
			this.posts.push({
				id: Date.now(),
				...post,
			});
			this.dialogVisible = false;
		},
		removePost(post) {
			this.posts = this.posts.filter((item) => item.id !== post.id);
		},
		showDialog() {
			this.dialogVisible = true;
		},
		async fetchPosts() {
			try {
				this.isPostsLoading = true;
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts',
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					}
				);
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				);
				this.posts = response.data;
			} catch (error) {
				alert('Ошибка запроса');
			} finally {
				this.isPostsLoading = false;
			}
		},
		async loadMorePosts() {
			try {
				this.page += 1;
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts',
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					}
				);
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				);
				this.posts = [...this.posts, ...response.data];
			} catch (error) {
				alert('Ошибка запроса');
			}
		},
		// changePage(pageNumber) {
		// 	this.page = pageNumber;
		// },
	},
	components: { PostForm, PostList },
	mounted() {
		this.fetchPosts();
		console.log('Refs: ', this.$refs.observer);
		let options = {
			// root: document.querySelector('#scrollArea'),
			rootMargin: '0px',
			threshold: 1.0,
		};

		let callback = (entries) => {
			if (entries[0].isIntersecting && this.page < this.totalPages) {
				this.loadMorePosts();
			}
		};

		let observer = new IntersectionObserver(callback, options);
		observer.observe(this.$refs.observer);
	},
	computed: {
		sortedPosts() {
			return [...this.posts].sort((a, b) =>
				a[this.selectedSort]?.localeCompare(b[this.selectedSort])
			);
		},
		sortedAndSearchPosts() {
			return this.sortedPosts.filter((post) =>
				post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			);
		},
	},
	watch: {
		// page() {
		// 	this.fetchPosts();
		// },
		// 	selectedSort(newValue){
		// 		console.log('newValue from watch:', newValue)
		// 		this.posts.sort((post1,post2)=>{
		// 			return post1[newValue]?.localeCompare(post2[newValue])
		// 		})
		// 	}
	},
};
</script>

<style lang="scss">
.page {
	border: 1px solid teal;
	padding: 10px;
	&__wrapper {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-top: 15px;
	}
	&:hover {
		cursor: pointer;
		color: tomato;
	}
	&__current {
		background-color: teal;
		color: white;
	}
}

.observer {
	height: 30px;
	background-color: tomato;
}
</style>
