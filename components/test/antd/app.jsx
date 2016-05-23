import React from 'react';
import ReactDOM from 'react-dom';
import FooA from './fooA.jsx';

import 'antd/dist/antd.less';

ReactDOM.render(<FooA />, document.getElementById('app'), function(){
    console.log('渲染完成');
});