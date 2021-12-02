import request from '@/utils/request';
import { HOST } from '@/utils/constant';

export default class Juejin {
    static fetch() {
        return request({
            url: `${HOST}/api/v1/juejin/articles`,
        });
    }
}
