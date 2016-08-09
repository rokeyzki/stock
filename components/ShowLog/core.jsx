import React from 'react';
import { Calendar } from 'antd';

import './style.css';

function getListData(value) {
  let listData;
  switch (value.getDayOfMonth()) {
    case 3:
      listData = [
        { type: 'warning', content: '这里是警告事项.' },
        { type: 'normal', content: '这里是普通事项.' },
      ]; break;
    case 7:
      listData = [
        { type: 'warning', content: '这里是警告事项.' },
        { type: 'normal', content: '这里是普通事项.' },
        { type: 'error', content: '这里是错误事项.' },
      ]; break;
    case 8:
      listData = [
        { type: 'warning', content: '这里是警告事项.' },
        { type: 'normal', content: '这里是普通事项.' },
        { type: 'error', content: '这里是错误事项.' },
      ]; break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {
        listData.map((item, index) =>
          <li key={index}>
            <span className={`event-${item.type}`}>●</span>
            {item.content}
          </li>
        )
      }
    </ul>
  );
}

function getMonthData(value) {
  if (value.getMonth() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  let num = getMonthData(value);
  return num ? <div className="notes-month">
    <section>{num}</section>
    <span>待办事项数</span>
  </div> : null;
}

const ShowLog = React.createClass({
  render() {
    return (
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    );
  },
});

export default ShowLog;