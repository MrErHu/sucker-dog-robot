import request from 'request';
import sendMsg from '../utils/send';
import {URL} from '../config/weather.config';

const url = 'https://api.seniverse.com/v3/weather/daily.json?key=SasizPJ3UGsBzoumk&location=nanjing&language=zh-Hans&unit=c&start=0&days=1';

const getWeather = (callback = () => {}) => {
    request({
        method: 'GET',
        json: true,
        url: url
    }, (err, res, data) => {
        if(err) {
            callback('天气信息获取失败，请联系管理员');
        }else {
            const daily = data.results[0].daily[0];
            const message =
                `防范疫情勿侥幸，人人有责当重视。\n`+
                `戴口罩、勤洗手，勤消毒、勤通风。\n`+
                `辽河雪融，富山花开；同气连枝，共盼春来。\n`+
                `今日南京天气: ${daily.text_day}\n`+
                `最高气温: ${daily.high}度\n`+
                `最低气温: ${daily.low}度\n`+
                `${daily.wind_direction}风${daily.wind_scale}级\n`+
                '祝大家工作愉快!'
            callback(message);
        }
    });
}

const weather = () => {
    getWeather((message) => {
        sendMsg({
            url: URL,
            body: {
                'msgtype': 'text',
                'text': {
                    'content': message
                }
            }
        });
    });
};

weather();
