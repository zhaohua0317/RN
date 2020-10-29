import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  var names=[
    <Text>1</Text>,
    <Text>2</Text>,
    <Text>3</Text>,
    <Text>42</Text>,
  ];
  let { log, sin, cos } = Math;
  if (1) {
    console.log('HI')
  }
  
    const map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');
    
    for (let [key, value] of map) {
      console.log(key + " is " + value);
    }
    for (let codePoint of 'HELLO,China!') {
      console.log(codePoint)
    }
    let text=String.fromCodePoint(0x20BB7);
    for (const i of text) {
      console.log(i)
    }
    console.log(`\`Yo\` World!`);
    tag`First line\nSecond line`

function tag(strings) {
  console.log(strings.raw[0]);
  // strings.raw[0] 为 "First line\\nSecond line"
  // 打印输出 "First line\nSecond line"
}
    //console.log(`First line\nSecond line`.raw[0])
    console.log(/^(\d+)(\d+)$/.exec('1053'))
    let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
set = new Set(['red', 'green', 'blue']);

for (let x of set) {
  console.log(x);
}
console.log('.......................................')
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
console.log([...myMap])
var proxy = new Proxy({}, {
  get: function(target, propKey) {
    return 35;
  }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
// red
// green
// blue
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31
  return (
    <View style={styles.container}>
      {
      names.map(function (name,index) {
      return <Text key={index} style={styles.item}>{name},sin{index}={sin(index)}</Text>
      })
 
    }

    </View>
  );
}

export default FlatListBasics;
