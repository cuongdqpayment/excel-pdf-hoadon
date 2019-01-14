
var array = [{"x":"8/11/2009","y":12},{"x":"8/12/2009","y":0.725057454},{"x":"8/13/2009","y":0.024530916},{"x":"8/14/2009","y":0.031004457}]

//tao mang chua gia tri y thoi
var objYArray = array.map((o)=>{ return o.y});
console.log('objYArray',objYArray);

//lay gia tri lon nhan cua mang gia tri y
var max_y = Math.max.apply(Math, array.map((o)=>{ return o.y}));
console.log('max_y',max_y);

var min_y = Math.min.apply(Math, array.map((o)=>{ return o.y}));
console.log('min_y',min_y);

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
var arr1 = [
           {id:0,name:'Group 1', type:null}, 
           {id:1,name:'Group 2',type:null}, 
           {id:124,name:'qqq',type:1}, 
           {id:589,name:'www',type:0}, 
           {id:45,name:'eee',type:0},
           {id:567,name:'rrr',type:1}
        ]


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

//sap xep trat tu theo cay (khong khai bao theo children)
var createOrder = (arrIn,parentName,orderName,idName)=>{

    return arrIn.sort((a,b)=>{
    
        if (a[parentName]<b[parentName]) return -3
        if (a[parentName]>b[parentName]) return 3
    
        if (a[orderName]<b[orderName]) return -2
        if (a[orderName]>b[orderName]) return 2
    

        if (a[idName]<b[idName]) return -1
        if (a[idName]>b[idName]) return 1
        return 0
    })
}

console.log('createTreeSiblings',createOrder(arr1,'type','id','id'));



var arr3 = [
    {id:5,name:'Root 1', }, 
    {id:10,name:'Root 2',}, 
    {id:0,name:'Group 1.1', parentId:10}, 
    {id:1,name:'Group 2',parentId:5}, 
    {id:124,name:'qqq',parentId:1}, 
    {id:589,name:'branch 1.1.1',parentId:0}, 
    {id:45,name:'branch 1.1.1.1',parentId:589},
    {id:46,name:'branch 1.1.1.1.1',parentId:45},
    {id:47,name:'branch 1.1.1.1.1.1',parentId:46},
    {id:48,name:'branch 1.1.1.1.1.1.1',parentId:47},
    {id:100000,name:'branch xxxx',parentId:10000},
    {id:567,name:'rrr',parentId:1}
 ]

//tao cay theo children 
var createTree = (arrIn,option,level)=>{
    var myLevl = level?level:0;
    var myOption = option?option:{id:'id',parentId:'parentId',startWith:null}

    var roots = arrIn.filter(x=>x[option.parentId]!=x[option.id]&&x[option.parentId]==option.startWith);
    console.log('roots',roots);
    if (roots.length>0){
        myLevl++;
        roots.forEach(el => {
            console.log('myId',el[option.id], myLevl);
            el.$level= myLevl;
            el.$children= arrIn.filter(x=>x[option.parentId]!=x[option.id]&&x[option.parentId]==el[option.id]);
            if (el.$children.length>0){
                el.$children.forEach(ch=>{
                    ch.$level = myLevl + 1;
                    console.log('myId child',ch[option.id], ch.$level);
                    myOption.startWith = ch[option.id];
                    ch.$children=createTree(arrIn,myOption,ch.$level)
                })
            }else{
                el.$isleaf=1;
                el.$children=undefined;
            }
        });
        return roots;
    }else {
        arrIn.forEach(el => {
            el.$level= myLevl;
            el.$isleaf=1;
        });
        return arrIn //khong tao duoc cay vi khong tim thay
    }
}

var par1 = [
        {id: 0, type:0, description: "Mô tả các tham số"}
        ,{id: 1, type: 0, description: "Mô tả hệ thống"}
        ,{id: 2, type: 0, description: "Vai trò"}
        ,{id: 3, type: 0, description: "User"}
        ,{id: 4, type: 0, name: "staff_id", description: "Nhân viên"}
        ,{id: 5, type: 0, name: "type_id", description: "Kiểu khách hàng"}
        ,{id: 6, type: 0, name: "area_id", description: "Vùng quản lý"}
        ,{id: 7, type: 1, description: "Hệ thống quản lý hóa đơn"}
        ,{id: 8, type: 3, code: 1, name: "BON", description: "bon"}
        ,{id: 9, type: 3, code: 2, name: "DONG", description: "dong"}
        , {id: 10, type: 3, code: 3, name: "DUC", description: "duc"}
        , {id: 11, type: 3, code: 4, name: "LY", description: "ly"}
        , {id: 12, type: 3, code: 5, name: "QUY", description: "quy"}
        , {id: 13, type: 3, code: 6, name: "THANG", description: "thang"}
        , {id: 14, type: 3, code: 7, name: "VU", description: "vu"}
        , {id: 15, parent: 8, type: 4, code: 1, name: "Bốn"}
        , {id: 16, parent: 9, type: 4, code: 2, name: "Đồng"}
        , {id: 17, parent: 10, type: 4, code: 3, name: "Đức"}
        , {id: 18, parent: 11, type: 4, code: 4, name: "Ly"}
        , {id: 19, parent: 12, type: 4, code: 5, name: "Quý"}
        , {id: 20, parent: 13, type: 4, code: 6, name: "Thắng"}
        , {id: 21, parent: 14, type: 4, code: 7, name: "Vũ"}
        , {id: 22, type: 5, code: 1, name: "KH", description: "Hộ KH Bình Thường"}
        , {id: 23, type: 5, code: 2, name: "KD1", description: "Hộ KD Nhóm 1"}
        , {id: 24, type: 5, code: 3, name: "KD2", description: "Hộ KD Nhóm 2"}
        , {id: 25, type: 5, code: 4, name: "CQ", description: "CQ, TC, DN Nhóm 1"}
        , {id: 26, type: 6, code: 1, name: "LV", description: "Thôn Lương Viện"}
        , {id: 27, type: 6, code: 2, name: "DT1", description: "Thôn Diêm Trường 1"}
        , {id: 28, type: 6, code: 3, name: "DT2", description: "Thôn Diêm Trường 2"}
        , {id: 29, type: 6, code: 4, name: "PC1", description: "Thôn Phụng Chánh 1"}
        , {id: 30, type: 6, code: 5, name: "PC2", description: "Thôn Phụng Chánh 2"}
        , {id: 31, type: 6, code: 6, name: "TH", description: "Thôn Trung Hưng"}
    ]


    console.log('createTree:', createTree(par1,{
        id:'id',
        parentId:'type',
        startWith:0})
    );

/* var str = JSON.stringify(createTree(par1,{
    id:'id',
    parentId:'type',
    startWith:0})); */

   



//console.log('random' ,Math.random().toString(36).substring(2,8));



