import MyButton from './MyButton.vue';
import MyInput from './MyInput.vue';

const components = {
    MyButton,
    MyInput
};

export default {
    install(Vue) {
        Object.keys(components).forEach((key) => {
            Vue.component(key, components[key]);
        });
    }
};
