import request from 'request';
import {MAX_TIMES, TIME_GAP} from '../config/config';

const sendMsg = (url, body, callback) => {
    request({
        json: true,
        method: 'POST',
        url: url,
        body: body
    }, (err, res, body) => {
        typeof callback === 'function' && callback(err, res, body)
    });
};

const send = ({url, body, maxTimes = MAX_TIMES, timeGap = TIME_GAP}, callback) => {
    let counter = 0;

    const postMsg = () => {
        sendMsg(url, body, function (err, res) {
            counter ++;
            if(err) {
                if (counter <= maxTimes) {
                    console.log('suck failed \n auto retry...');
                    setTimeout(postMsg, timeGap);
                } else {
                    console.log('suck faied 10 times, please check your network and retry later.')
                }
            }
            typeof callback === 'function' && callback(err, res);
        });
    };

    postMsg();
};

export default send;
