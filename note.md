





# Progress
- [x] 完成推荐歌单列表UI 16-7-4
- [x] 完成发现音乐->个性推荐->独家放送模块的UI  16-7-4
- [x] 完成findmusic->个性推荐   UI   16-7-4
- [x] 修复webpack警告  There is another module with a equal name when case is ignored.  大小写混用导致编译两次


# Donfig demo babel  to use async await
.babelrc   file
{
  "plugins": [
    ["transform-runtime", {
      "polyfill": false,
      "regenerator": true
    }]
  ]
}


$ npm install --save-dev babel-plugin-transform-runtime
$ npm install --save babel-runtime

it's need bluebird also