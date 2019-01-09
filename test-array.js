var array = [{"x":"8/11/2009","y":12},{"x":"8/12/2009","y":0.725057454},{"x":"8/13/2009","y":0.024530916},{"x":"8/14/2009","y":0.031004457}]

//tao mang chua gia tri y thoi
var objYArray = array.map((o)=>{ return o.y});
console.log('objYArray',objYArray);

//lay gia tri lon nhan cua mang gia tri y
var max_y = Math.max.apply(Math, array.map((o)=>{ return o.y}));
console.log('max_y',max_y);

//tinh tong ?????
var sumY =0;
var total=array.reduce((sumY,el,idx,array)=>{return sumY++});
console.log('total',sumY,total);



//loc thanh mang du lieu moi
var filters = array.filter(el=>el.y!=12);
console.log('filters',filters);

var find1 = array.find(el=>el.y!=12);
console.log('find1st',find1);


//thay the doi tuong co id giong nhau
var arr1 = [{id:124,name:'qqq',type:1}, 
           {id:589,name:'www',type:0}, 
           {id:45,name:'eee',type:0},
           {id:567,name:'rrr',type:1}]

var arr2 = [{id:124,name:'ttt',type:1}, 
           {id:45,name:'yyy',type:0}]


var newArr = arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
console.log('newArr',newArr);

//sap xep doi tuong theo thuoc tinh nao do
newArr = newArr.sort((a,b)=>{
    if (a.type<b.type) return -2;
    if (a.type>b.type) return 2;
    if (a.id<b.id) return -1;
    if (a.id>b.id) return 1;
    return 0;
    
})

console.log('newArr Sort(cb)',newArr);





