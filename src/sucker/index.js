import sendMsg from '../utils/send';
import member from './constant/members';
import quotations from './constant/quotations';
import {URL} from '../config/sucker.config';

const lottery = () => {
  let length = member.length
  let lucky_number = Math.floor(Math.random() * length)
  return member[lucky_number]
};

const praise = () => {
  let length = quotations.length
  let lucky_number = Math.floor(Math.random() * length)
  return quotations[lucky_number]
}

const get_text = (lucky_guy) => {
  let desc = praise()
  return `${desc.text}\n${lucky_guy.nick_name}, 你今天真美！大家快一起来夸夸她吧(｡･ω･｡)ﾉ♡`
}

const get_body = () => {
  let lucky_guy = lottery();
  let praise_text = get_text(lucky_guy);

  return {
    'msgtype': 'text',
    'text': {
      'content': praise_text,
      'mentioned_mobile_list': [lucky_guy.phone]
    }
  }
};

const suck = () => {
  sendMsg({
    url: URL,
    body: get_body()
  });
};

export default suck;


