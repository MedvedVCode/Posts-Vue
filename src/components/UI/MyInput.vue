<template>
	<input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<script>
	export default {
		name: 'my-input',
		props:{
			modelValue:[String, Number]
		},
		methods:{
			updateInput(event){
				this.$emit('update:modelValue', event.target.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
.input {
	width: 100%;
	border: 1px solid teal;
	padding: 10px 15px;
	box-shadow: 5px 5px 3px rgba(teal, 0.1);
	margin-top: 15px;
}
</style>