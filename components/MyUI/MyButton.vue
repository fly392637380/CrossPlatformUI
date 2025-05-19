<template>
    <view class="my-button" :class="[type, { disabled }]" @click="handleClick">
        <slot>{{ text }}</slot>
    </view>
</template>

<script>
export default {
    name: 'my-button',
    props: {
        text: String,
        type: {
            type: String,
            default: 'default' // default/primary/warning/danger
        },
        disabled: Boolean
    },
    methods: {
        handleClick() {
            if (!this.disabled) {
                console.log('handleClick');
                this.$emit('click');
            }
        }
    }
};
</script>

<style scoped>
.my-button {
    width: 100%;
    /* #ifdef MP-WEIXIN */
    padding: 16rpx 32rpx;
    /* #endif */

    /* #ifdef H5 */
    padding: 12px 24px;
    /* #endif */
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    box-sizing: border-box;
}

.my-button.default {
    background-color: #f5f5f5;
    color: #333;
}

.my-button.primary {
    background-color: #007aff;
    color: white;
}

.my-button.disabled {
    opacity: 0.5;
}
</style>
