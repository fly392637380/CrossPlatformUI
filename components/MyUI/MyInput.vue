<template>
    <div class="my-input-container">
        <input class="my-input" :type="type" :placeholder="placeholder" :value="value" @input="handleInput" />
    </div>
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            default: ''
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        }
    }
};
</script>

<style scoped>
.my-input-container {
    margin: 8rpx 8rpx;
}
.my-input {
    width: 100%;
    height: 2rem;
    padding: 2rpx 15rpx;
    border: 1rpx solid #dcdfe6;
    border-radius: 4rpx;
    font-size: 20rpx;
    box-sizing: border-box;
}
.my-input:focus {
    outline: none;
    border-color: #409eff;
}
</style>
