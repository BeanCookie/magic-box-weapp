import Taro from '@tarojs/taro';

export default options => {
    return Taro.request({
        url: options.url,
        data: {
            ...options.data,
        },
        header: {
            'Content-Type': 'application/json',
        },
        method: options.method?.toUpperCase() || 'GET',
    }).then(res => res.data);
};
