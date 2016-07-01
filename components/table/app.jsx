import React from "react";
import ReactDOM from "react-dom";

import ExampleA from './exampleA.jsx';
import ExampleB from './exampleB.jsx';
import ExampleC from './exampleC.jsx';

import 'antd/dist/antd.less';

ReactDOM.render(
  <div>
    <ExampleA />
    <div style={{width: 1000}}>
      <ExampleB />
    </div>
    <ExampleC />
  </div>,
  document.querySelector("#app")
);