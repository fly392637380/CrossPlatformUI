<template>
    <component :is="componentType" v-bind="processedProps" v-on="processedEvents">
        <template v-if="hasChildren">
            <dynamic-renderer v-for="(child, index) in node.children" :key="index" :node="child" @event="$emit('event', $event)" />
        </template>
    </component>
</template>

<script>
export default {
    name: 'dynamic-renderer',
    props: {
        node: Object
    },
    computed: {
        componentType() {
            const map = {
                button: 'my-button', // 确保映射到正确的组件名
                input: 'my-input',
                view: 'uni-view'
            };
            return map[this.node.type] || this.node.type;
        },
        processedProps() {
            const props = { ...this.node.props };
            if (this.node.text) props.text = this.node.text;
            return props;
        },
        processedEvents() {
            if (!this.node.events) return {};

            return Object.keys(this.node.events).reduce((acc, eventName) => {
                acc[eventName] = (...args) => {
                    this.$emit('event', {
                        name: this.node.events[eventName],
                        data: this.node,
                        args
                    });
                };
                return acc;
            }, {});
        },
        hasChildren() {
            return this.node.children?.length > 0;
        }
    }
};
</script>
