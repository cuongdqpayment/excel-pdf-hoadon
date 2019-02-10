
import { Injectable } from '@angular/core';
import * as exif from 'exif-js';

@Injectable()
export class ApiImageService {
    constructor() { }
    
    //dua vao doi tuong file image
    //tra ve doi tuong file image co kich co nho hon
    resizeImage(filename: string, file: any, newSize: number) {
        return new Promise((resolve, reject) => {

            if (file){

                let allMetaData;
                let originOrientation;
                exif.getData(file, function () {
                    allMetaData = exif.getAllTags(this);
                    originOrientation = allMetaData.Orientation;
                    //console.log("get Tags Orientation",allMetaData);
                });


                try {
                    let canvas = document.createElement('canvas');
                    let context = canvas.getContext('2d');
                    let img = document.createElement('img');
                    let maxW = newSize;
                    let maxH = newSize;
                    img.src = URL.createObjectURL(file);
                    
                    img.onload = () => {
                        let iw = img.width;
                        let ih = img.height;
                        let scale = Math.min((maxW / iw), (maxH / ih));
                        let iwScaled = iw * scale;
                        let ihScaled = ih * scale;
                        
                        //giam kich thuoc
                        canvas.width = iwScaled;
                        canvas.height = ihScaled;
                        context.drawImage(img, 0, 0, iwScaled, ihScaled);
                        
                        //quay
                        let imageNew = document.createElement('img');
                        imageNew.src = canvas.toDataURL();
                        
                        imageNew.onload = () => {
                            
                            if (originOrientation>2&&originOrientation<=4){
                                //console.log('rotate 180');
                                canvas.width = imageNew.width;
                                canvas.height = imageNew.height;
                                context.rotate(180 * Math.PI / 180);
                                context.drawImage(imageNew, -imageNew.width, -imageNew.height);
                                
                            } else if (originOrientation>4&&originOrientation<=6){
                                //rotate 90
                                //console.log('rotate 90');
                                canvas.width = imageNew.height;
                                canvas.height = imageNew.width;
                                context.rotate(90 * Math.PI / 180);
                                context.drawImage(imageNew, 0 , -imageNew.height);
                                
                            } else if (originOrientation>6&&originOrientation<=8){
                                //rotate 270
                                //console.log('rotate 270');
                                canvas.width = imageNew.height;
                                canvas.height = imageNew.width;
                                context.rotate(270 * Math.PI / 180);
                                context.drawImage(imageNew, -imageNew.width, 0);
    
                            }
                            
                            canvas.toBlob((blob) => {
                                let reader = new FileReader();
                                reader.readAsArrayBuffer(blob);
                                reader.onload = () => { 
                                    let newFile = new Blob([reader.result], { type: 'image/jpeg' });
                                    resolve({
                                        image: canvas.toDataURL(), //base64 for view and json post
                                        file: newFile //formData post
                                        ,title: filename
                                        ,last_modified: file.lastModifiedDate
                                        ,subtitle: file.lastModifiedDate + "("+ originOrientation +")"
                                        ,width: canvas.width //cho biet anh nam doc hay nam ngang
                                        ,height: canvas.height 
                                        ,orientation_old: originOrientation
                                        ,size_old: file.size
                                        ,type_old: file.type
                                        ,size: newFile.size
                                        ,type: newFile.type
                                    });
                                }
                            });
                        }
                        
                    }
                } catch (err) { reject(err);}
            }else{
                reject("No file!");
            }

        });
    }
}