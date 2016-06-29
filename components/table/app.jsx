import React from "react";
import ReactDOM from "react-dom";

import BigTable from './bigTable.jsx';

import 'antd/dist/antd.less';

ReactDOM.render(
  <div>
    <BigTable />
  </div>,
  document.querySelector("#app")
);