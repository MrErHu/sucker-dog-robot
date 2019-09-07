exports.config = {
  URL: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=92991272-d3b7-4e2d-b4fa-b257450c7e9a',
  MAX_TIMES: 10, // 重试次数
  TIME_GAP: 1000 * 60 // 重试间隔
}
