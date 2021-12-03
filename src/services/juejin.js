import request from '@/utils/request';
import { HOST, JUEJIN } from '@/utils/constant';

export default class Juejin {
    static fetch(data) {
        return request({
            url: `${HOST}/api/v1/articles?platform=${JUEJIN}`,
            data: data
        });
    }
}
