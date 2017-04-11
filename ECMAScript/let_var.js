/**
 * Created by liumapp on 4/11/17.
 * email:liumapp.com@gmail.com
 * homepage:http://www.liumapp.com
 *
 * 为什么要使用let而不是var
 */

//var的第一个弊端
var arr=[];
for (var i=0;i<10;i++){
    arr[i]=function(){
        console.log(i);
    };
}
for (var j=0 ; j < 10 ; j++) {
    arr[j]();
}
//以上代码将会循环输出10
var arr=[];
for (let i=0;i<10;i++){
    arr[i]=function(){
        console.log(i);
    };
}
for (var j=0 ; j < 10 ; j++) {
    arr[j]();
}
//以上代码将会输出0-9，因为let定义的i能够识别块级作用域｛｝，而var定义的i不能


//var的第二个弊端
var a=1;
(function(){
    console.log(a);
    var a=2;
})();
//将会打印undefined，这其实是是属于变量提升

var a=1;
(function(){
    console.log(a);
    let a=2;
})();
//将会报错，let定义的不存在变量提升，而且必须先定义后使用

