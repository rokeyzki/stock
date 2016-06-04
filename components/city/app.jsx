import React from 'react';
import ReactDOM from 'react-dom';
import CitySelect from './citySelect.jsx';

import 'antd/dist/antd.less';

ReactDOM.render(<CitySelect />, document.getElementById('app'), function(){
    console.log('渲染完成');
});