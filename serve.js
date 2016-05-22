var app    = require('koa')(), // 框架内核
    staticServer = require('koa-static'), // 静态资源服务器
    router = require('koa-router')(), // 路由中间件
    render = require('koa-views'); // 模板引擎选择器

app.use(staticServer('static'));

app.use(render('static', {
  map: {
    html: 'nunjucks' // 使用 nunjucks 模板引擎，sudo npm install nunjucks -save
  }
}));

router.get('/',
  function *(next) {
    yield this.render('templates/index', { title:'Stock 股票历史数据平台', info: '点击下方链接' });
  }
);

router.get('/api',
  function *(next) {
    // yield this.render('templates/other', { title: 'Hello', someText: 'Add some todos form KOA' });
    
    /*var request = require('request'); // 后端发起http请求
    
    request('http://web.juhe.cn:8080/finance/stock/hk?num=00799&key=60bd29533d9517cd6f91c64ccf558d35', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var stockInfo = JSON.parse(body);
        if(stockInfo.resultcode == 200){
          console.log(stockInfo.result);
        }
      }
    });*/

　　this.body = '聚合数据 API请求测试';
  }
);

app.use(router.routes());

// app.listen(80);
app.listen(8080);
console.log('koa serve start');