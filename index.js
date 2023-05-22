import _ from 'lodash'

export default function solution(content){
  // BEGIN
  const splitContent = content.split('\n').slice(1,-1)
  splitContent.map((elen)=>{
    // console.log(splitContent.length)
    elen = elen.trim().split(',')
    console.log(elen)
  })
  // END

}