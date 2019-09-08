#!/bin/bash

if [ -z $1 ]
then
  url='https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=92991272-d3b7-4e2d-b4fa-b257450c7e9a'
else
  url=$1
fi

curl ${url}\
  -H'Content-Type:application\json'\
  -d'
  {
    "msgtype": "text",
    "text": {
      "content": "测试专用"
    }
  }'
