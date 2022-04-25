# enum-manager
enum管理器

## demo

```javascript
// Fruits => EnumSource
import EnumManager from 'enum-manager';

const Fruits = {
  // A => 前端自定义的枚举条目的key
  A: {
    label: "苹果", // 前端页面展示的值
    value: "APPLE", // 后端服务器需要的值
    price: 6, // 其它prop
  },
  B: {
    label: "香蕉",
    value: "BANANA",
    price: 3,
  },
};

const fruitManager = new EnumManager(Fruits);

console.log(fruitManager.getEntryByKey('A')); // { label: "苹果", value: "APPLE",  price: 6},
console.log(fruitManager.getLabelByValue('APPLE')); // 苹果
console.log(fruitManager.getValueByLabel('香蕉')); // BANANA
```
# enum-manager
