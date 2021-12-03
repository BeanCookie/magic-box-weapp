import request from '@/utils/request';
import { HOST, CSDN } from '@/utils/constant';

export default class Csdn {
    static fetch(data) {
        return request({
            url: `${HOST}/api/v1/articles?platform=${CSDN}`,
            data: data
        });
    }
}
