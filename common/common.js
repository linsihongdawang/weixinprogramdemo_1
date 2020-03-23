// 定义一个news常量用来存放所有的新闻
const news = [{
      id: '1',
      title: '法国总统内部讲话流出，令西方世界为之一振!',
      poster: '/images/home/small_new(2).jpeg',
      content: '法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统法国总统',
      add_date: '2020-3-20'
    },
    {
      id: '2',
      title: '贾跃亭破产重组方案4月投票，乐视网债务怎么办?',
      poster: '/images/home/small_new(1).jpeg',
      content: '贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭贾跃亭',
      add_date: '2020-3-21'
    },
    {
      id: '5',
      title: '“马航370”失踪之谜再引热议，这部纪录片无限接近谜底了',
      poster: '/images/detail/poster_image(1).jpeg',
      content: '2014年，马来西亚航空公司的航班MH370在飞行途中突然与地面失联。飞机的不知所踪引发了轩然大波，也留下了迄今为止人类航空史上最大的谜团。6年已过，马航MH370依然下落不明，机上乘客已无生还的可能。但是，仍有很多组织和个人在进行着调查，势要找到答案。不久前，美国国家地理频道推出了纪录片《寻找马航MH370》，详细讲述了调查团队在MH370的搜索过程中所尝试采用的各种方法和新技术，尽可能地还原了MH370的失事过程。2014年3月8日，马航MH370自吉隆坡起飞，预计6小时后，它将会抵达北京。然而，当航班飞到越南上空时，这架载有239名乘客的波音777在雷达系统中突然消失了，没有留下呼救信号。MH370的无故失踪，让上百个家庭支离破碎，也引起了全世界的关注。',
      add_date: '2020-3-16'
    }
  ]
  // 获取新闻列表
  function getNewsList() {
    let newsList = [];
      for (var i = 0; i < news.length; i++) {
        let newsObj = {};
        newsObj.id = news[i].id;
        newsObj.title = news[i].title;
        newsObj.poster = news[i].poster;
        newsObj.content = news[i].content;
        newsObj.add_date = news[i].add_date;
        newsList.push(newsObj)
      }
      return newsList
  }
  //获取新闻的内容
  function getNewsDetail(newsID){
   let message={
     code:'404',
     news:{}
   };
   for(var i=0;i<news.length;i++){
     if(newsID==news[i].id){
       message.code='200',
       message.news=news[i];
       break
     }
   }
   return message;
  }

  module.exports={
    getNewsList:getNewsList,
    getNewsDetail:getNewsDetail
  }