
/**
 * object nay se doc so thanh tien vnd
 * viet hoa chu cai dau tung word trong string
 * tao tree cho array
 * 
 * De su dung:
 * import Converter from '../utils/converter-2-vietnamese'
 * 
 */
const ChuSo=new Array(" không"," một"," hai"," ba"," bốn"," năm"," sáu"," bảy"," tám"," chín");
const Tien=new Array( "", " nghìn", " triệu", " tỷ", " nghìn tỷ", " triệu tỷ");

//1. Hàm đọc số có ba chữ số;
var StringFrom3Digit = (baso)=>{
    var tram;
    var chuc;
    var donvi;
    var KetQua="";
    tram=parseInt(baso/100);
    chuc=parseInt((baso%100)/10);
    donvi=baso%10;
    if(tram==0 && chuc==0 && donvi==0) return "";
    if(tram!=0)
    {
        KetQua += ChuSo[tram] + " trăm";
        if ((chuc == 0) && (donvi != 0)) KetQua += " linh";
    }
    if ((chuc != 0) && (chuc != 1))
    {
            KetQua += ChuSo[chuc] + " mươi";
            if ((chuc == 0) && (donvi != 0)) KetQua = KetQua + " linh";
    }
    if (chuc == 1) KetQua += " mười";
    switch (donvi)
    {
        case 1:
            if ((chuc != 0) && (chuc != 1))
            {
                KetQua += " mốt";
            }
            else
            {
                KetQua += ChuSo[donvi];
            }
            break;
        case 5:
            if (chuc == 0)
            {
                KetQua += ChuSo[donvi];
            }
            else
            {
                KetQua += " lăm";
            }
            break;
        default:
            if (donvi != 0)
            {
                KetQua += ChuSo[donvi];
            }
            break;
        }
    return KetQua;
}

//2. Hàm đọc số thành chữ (Sử dụng hàm đọc số có ba chữ số)
var StringVietnamDong = (SoTien)=>{
    var lan=0;
    var i=0;
    var so=0;
    var KetQua="";
    var tmp="";
    var ViTri = new Array();
    if(SoTien<0) return "Số tiền âm !";
    if(SoTien==0) return "Không đồng !";
    if(SoTien>0)
    {
        so=SoTien;
    }
    else
    {
        so = -SoTien;
    }
    if (SoTien > 8999999999999999)
    {
        //SoTien = 0;
        return "Số quá lớn!";
    }
    ViTri[5] = Math.floor(so / 1000000000000000);
    if(isNaN(ViTri[5]))
        ViTri[5] = "0";
    so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
    ViTri[4] = Math.floor(so / 1000000000000);
     if(isNaN(ViTri[4]))
        ViTri[4] = "0";
    so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
    ViTri[3] = Math.floor(so / 1000000000);
     if(isNaN(ViTri[3]))
        ViTri[3] = "0";
    so = so - parseFloat(ViTri[3].toString()) * 1000000000;
    ViTri[2] = parseInt(so / 1000000);
     if(isNaN(ViTri[2]))
        ViTri[2] = "0";
    ViTri[1] = parseInt((so % 1000000) / 1000);
     if(isNaN(ViTri[1]))
        ViTri[1] = "0";
    ViTri[0] = parseInt(so % 1000);
  if(isNaN(ViTri[0]))
        ViTri[0] = "0";
    if (ViTri[5] > 0)
    {
        lan = 5;
    }
    else if (ViTri[4] > 0)
    {
        lan = 4;
    }
    else if (ViTri[3] > 0)
    {
        lan = 3;
    }
    else if (ViTri[2] > 0)
    {
        lan = 2;
    }
    else if (ViTri[1] > 0)
    {
        lan = 1;
    }
    else
    {
        lan = 0;
    }
    for (i = lan; i >= 0; i--)
    {
       tmp = StringFrom3Digit(ViTri[i]);
       KetQua += tmp;
       if (ViTri[i] > 0) KetQua += Tien[i];
       if ((i > 0) && (tmp.length > 0)) KetQua += ',';//&& (!string.IsNullOrEmpty(tmp))
    }
   if (KetQua.substring(KetQua.length - 1) == ',')
   {
        KetQua = KetQua.substring(0, KetQua.length - 1);
   }
   KetQua = KetQua.substring(1,2).toUpperCase()+ KetQua.substring(2);
   return KetQua + ' đồng./.';//.substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
}


var InitCapString = (str)=>{
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}


/**
 * Tao cay quan ly nhu oracle
 * No se tu dong tao ra mang
 * $level, $isleaf, $children 
 * @param {*} arrIn 
 * @param {*} option 
 * @param {*} level 
 */
var CreateTree = (arrIn,option,level)=>{
    var myLevl = level?level:0;
    var myOption = option?option:{id:'id',parentId:'parentId',startWith:null}

    var roots = arrIn.filter(x=>x[option.parentId]!=x[option.id]&&x[option.parentId]==option.startWith);
    if (roots.length>0){
        myLevl++;
        roots.forEach(el => {
            el.$level= myLevl;
            el.$children= arrIn.filter(x=>x[option.parentId]!=x[option.id]&&x[option.parentId]==el[option.id]);
            if (el.$children.length>0){
                el.$children.forEach(ch=>{
                    ch.$level = myLevl + 1;
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


const isEquikeylent= (a,b, isSameKey, isSameValue) =>{ //la giong nhau cau truc hoan toan isSame
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    if ((isSameKey||isSameValue)&&aProps.length !== bProps.length)  return false;
    for (let i = 0; i < aProps.length; i++) if (isSameValue&&a[aProps[i]] !== b[aProps[i]]) return false;
    for (let i = 0; i < aProps.length; i++) if (bProps.find(x=>x===aProps[i]) === undefined) return false;
    return true;
}

//const colxrow = {col:0,row:0,width:100,align:'right',color:'red'}; //co the thay doi mat na toa do diem nay them thuoc tinh
const GetMatrix = (maskMatrix, data, point)=>{
    var matrix = [];
    var PrintMatrix = (objPrintMatrix, dataObject)=>{
        for (let key of Object.keys(objPrintMatrix)){
            if (Array.isArray(objPrintMatrix[key])){
                objPrintMatrix[key].forEach((x,idx)=>{
                    if (isEquikeylent(point,x)){
                        x.value = dataObject[key][idx];
                        if (x.value!==undefined&&x.value!==null&&x.value!=='')matrix.push({col: x.col,row: x.row, value: x.value, width: x.width, align: x.align, color:x.color});
                    }else{
                        if (Array.isArray(x)){
                            console.log('ARRAY KHONG XU LY: ', key , idx , x);
                        }else{
                            if (dataObject[key]&&dataObject[key][idx]) PrintMatrix( x, dataObject[key][idx]);
                        }
                    }
                })
            }else{
                if (isEquikeylent(point,objPrintMatrix[key])){
                    let x = objPrintMatrix[key];
                    x.value = dataObject[key];
                    if (x.value!==undefined&&x.value!==null&&x.value!=='')matrix.push({col: x.col,row: x.row, value: x.value, width: x.width, align: x.align, color:x.color});
                }else{
                    if (dataObject[key]) PrintMatrix(objPrintMatrix[key],dataObject[key]);
                }
            }
        }
    
    }
    PrintMatrix(maskMatrix, data);
    return matrix;
}

module.exports = {
    GetMatrix : GetMatrix, //tao ma tran in
    Compare2Objects:isEquikeylent, //so sanh 2 object
    CreateTree: CreateTree,  //tao tree -->children
    StringVietnamDong: StringVietnamDong, //doc so ra chu viet nam dong
    InitCapString: InitCapString //viet chu hoa tat ca chu dau cua word
};

//console.log(StringVietnamDong(13445555));
