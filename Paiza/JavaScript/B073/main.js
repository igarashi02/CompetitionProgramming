process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const n = parseInt(lines[0].split(" ")[0])
  const m = parseInt(lines[0].split(" ")[1])

  const trees_s = lines[1].split(" ")
  const trees = trees_s.map(v => parseInt(v));

  const check = parseInt(lines[2])

  lines.slice(check).forEach(v => {
    const start_end = v.split(" ")
    const start = parseInt(start_end[0])-1
    const end = parseInt(start_end[1])

    const target = trees.slice(start, end)

    const sum = target.reduce((prev, current) => {
      return prev+current
    })

    const up = m - Math.floor(sum/target.length)

    const target_arr = [...Array(end-start).keys()].map(i => i+start)
    target_arr.forEach(v => {
      if(up > 0){
        trees[v] = trees[v] + up
      }
    })
  })

  let str = "";
  trees.forEach(v => {
    str = str + v + " "
  })

  console.log(str);
});
