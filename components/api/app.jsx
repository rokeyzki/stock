import React from "react";
import ReactDOM from "react-dom";

import ApiComp from './api.jsx';

import CitySelect from '../city/citySelect.jsx';
import 'antd/dist/antd.less';

ReactDOM.render(
  <div>
    <CitySelect />
    <div style={{height: 300}}></div>
    <ApiComp setCity="福州" />
  </div>,
  document.querySelector("#app")
);