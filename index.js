import _ from 'lodash'

export default function solution(content){
  // BEGIN
  const splitContent = content.split('\n').slice(1,-1)
  let arrayTest2 =[] 
  let arrayTest3 = []
  let arrayTest4 = []
  let objTest5 = {}
  splitContent.map((elem)=>{
    // console.log(splitContent.length)
    elem = elem.trim().split(',')
    arrayTest2.push(elem[7])
    arrayTest3.push(elem[3])
    arrayTest4.push(elem[1])
  })
  splitContent.map((elem)=>{
    elem = elem.split(',')
    // if(_.max(arrayTest4) === elem[1])console.log(elem[0],elem[7])
    objTest5[elem[7]] === undefined ? objTest5[elem[7]] = Number(elem[1]) : objTest5[elem[7]] += Number(elem[1])
  })
  // console.log(_.uniq(arrayTest2))
  // console.log(_.max(arrayTest3),_.min(arrayTest3))
  console.log(Object.entries(objTest5).sort((a,b)=>b[1]-a[1])[0][0])

}