<script>
import { version } from '@/mock/jsonData.js';
export default {
    onLaunch: function () {
        console.log('App Launch');
        // 检查UI更新
        this.checkUpdate();

        // 监听全局事件
        uni.$on('refresh-ui', () => {
            this.refreshAllPages();
        });
    },
    onShow: function () {
        console.log('App Show');
    },
    onHide: function () {
        console.log('App Hide');
    },
    methods: {
        async checkUpdate() {
            const lastUpdate = uni.getStorageSync('ui_last_update');
            const newVersion = version;

            if (newVersion !== lastUpdate) {
                uni.$emit('refresh-ui');
                uni.setStorageSync('ui_last_update', newVersion);
            }
        },
        refreshAllPages() {
            // 获取当前页面栈
            const pages = getCurrentPages();
            pages.forEach((page) => {
                if (page.$vm && page.$vm.loadUIData) {
                    page.$vm.loadUIData();
                }
            });
        }
    }
};
</script>

<style lang="scss">
.uni-view {
    display: block;
    box-sizing: border-box;
}
</style>
