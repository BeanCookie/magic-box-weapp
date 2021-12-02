import request from '@/utils/request';
import { HOST } from '@/utils/constant';

export default class Home {
    static fetch() {
        return request({
            url: `${HOST}/api/v1/juejin/articles`,
        });
    }
}
