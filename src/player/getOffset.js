export default function (obj,direction){
        //将top,left首字母大写,并拼接成offsetTop,offsetLeft
    var offsetDir = 'offset'+ direction[0].toUpperCase()+direction.substring(1);
        
    var realNum = obj[offsetDir];
    var positionParent = obj.offsetParent;  //获取上一级定位元素对象
        
    while(positionParent != null){
        realNum += positionParent[offsetDir];
        positionParent = positionParent.offsetParent;
    }
    return realNum;
}
