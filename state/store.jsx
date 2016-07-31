import { createStore } from 'redux';

var defaultState = {
  data: [
    { key: 1, name: '胡彦斌1', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
    { key: 2, name: '吴彦祖2', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbccccccccccccccccccccccccccccccc', test3: 'ccccc' },
    { key: 3, name: '李大嘴3', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
    { key: 4, name: '胡彦斌4', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
    { key: 5, name: '吴彦祖5', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbcccccccccccccccccccccccccccccccccc', test3: 'ccccc' },
    { key: 6, name: '李大嘴6', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
    { key: 7, name: '胡彦斌7', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
    { key: 8, name: '吴彦祖8', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbcccccccccccccccccccccccccccccc', test3: 'ccccc' },
    { key: 9, name: '李大嘴9', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
    { key: 10, name: '胡彦斌10', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
    { key: 11, name: '吴彦祖11', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbccccccccccccccccccccccccccccccccc', test3: 'ccccc' },
    { key: 12, name: '李大嘴12', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
    { key: 13, name: '胡彦斌13', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
    { key: 14, name: '吴彦祖14', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbcccccccccccccccccccccccccccccc', test3: 'ccccc' },
    { key: 15, name: '李大嘴15', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
    { key: 16, name: '胡彦斌16', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
    { key: 17, name: '吴彦祖17', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbcccccccccccccccccccccccccc', test3: 'ccccc' },
    { key: 18, name: '李大嘴18', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
  ]
};

// Reducers
function storeRoot(state, action){
  switch (action.type) {
    case 'Add_Data':
      return Object.assign({}, state, {
        data: [
    { key: 1, name: '胡彦斌1', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
    { key: 2, name: '吴彦祖2', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbccccccccccccccccccccccccccccccc', test3: 'ccccc' },
    { key: 3, name: '李大嘴3', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
    { key: 4, name: '胡彦斌4', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
    { key: 5, name: '吴彦祖5', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbcccccccccccccccccccccccccccccccccc', test3: 'ccccc' },
    { key: 6, name: '李大嘴6', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
    { key: 7, name: '胡彦斌7', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。', test1: 'aaaaa', test2: 'aaaaa', test3: 'aaaaa' },
    { key: 8, name: '吴彦祖8', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。', test1: 'ccccc', test2: 'bbcccccccccccccccccccccccccccccc', test3: 'ccccc' },
    { key: 9, name: '李大嘴9', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。', test1: 'bbb', test2: 'bbb', test3: 'bbb'  },
  ]
      });
      
    default:
      return state;
  }
}

// Store
var store = createStore(storeRoot, defaultState);

export default store;