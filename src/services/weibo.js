import request from '@/utils/request';
import { HOST, WEIBO } from '@/utils/constant';

export default class Weibo {
    static fetch(data) {
        return request({
            url: `${HOST}/api/v1/hot-news?platform=${WEIBO}`,
            data: data
        });
    }
}
