export const jsonData = {
    type: 'view',
    props: {
        style: 'padding: 10rpx; width: 100%; box-sizing: border-box; background-color: rgba(0,0,0,0.2);'
    },
    children: [
        {
            type: 'button', // 这里写简写形式，组件内部会转换为u-button
            props: {
                text: 'Submit',
                type: 'primary'
            },
            events: {
                click: 'handleSubmit' // 对应父组件的方法名
            }
        },
        {
            type: 'input',
            props: {
                value: 'my-input-value',
                type: 'text',
                style: 'margin-top: 50rpx'
            },
            events: {
                input: 'handleInput'
            }
        },
        {
            type: 'button',
            props: {
                text: 'Done',
                type: 'default'
            },
            events: {
                click: 'handleSubmit2'
            }
        }
    ]
};

export const version = '1.1.0';
