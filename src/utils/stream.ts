import logger from './logger';
import moment from 'moment';
import 'moment-timezone';
moment.tz.setDefault('Asia/Seoul'); // 로그 시간대 한국 기준으로 변경
const timeStamp = () => moment().format('YYYY-MM-DD HH:mm:ss');
const stream = {
    write: (message: string) => {
        logger.info(`${timeStamp()} ${message}`);
    },
};
export default stream;
