<template>
    <view>
        <view v-if="JSON.stringify(uiJson) === '{}'">加载数据中...</view>
        <view v-else>
            <dynamic-renderer :node="uiJson" @event="handleDynamicEvent" />
        </view>
    </view>
</template>

<script>
import DynamicRenderer from '@/components/DynamicRenderer.vue';
import { jsonData } from '@/mock/jsonData.js';

export default {
    components: {
        DynamicRenderer
    },
    data() {
        return {
            uiJson: {}
        };
    },
    onLoad() {
        this.loadUIData();
        this.setupEventListeners();
    },
    onUnload() {
        this.removeEventListeners();
    },
    methods: {
        async loadUIData() {
            setTimeout(() => {
                this.uiJson = jsonData;
                uni.showToast({
                    title: '加载UI配置完成',
                    icon: 'none'
                });
            }, 1000);
        },
        setupEventListeners() {
            // 监听全局刷新事件
            this.refreshHandler = () => {
                console.log('收到刷新UI事件');
                this.loadUIData();
            };
            uni.$on('refresh-ui', this.refreshHandler);
        },
        removeEventListeners() {
            uni.$off('refresh-ui', this.refreshHandler);
        },
        handleDynamicEvent({ name, args }) {
            console.log('收到事件:', name, args);

            // 根据事件名调用对应方法
            if (this[name]) {
                this[name](args);
            }
        },

        // 对应 jsonData 中配置的 handleSubmit
        handleSubmit(args) {
            console.log('提交按钮被点击', args);
            uni.showToast({
                title: '按钮点击成功',
                icon: 'none'
            });
        }
    }
};
</script>
