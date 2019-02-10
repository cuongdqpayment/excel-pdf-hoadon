
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
                    let maxW = newSize;
                    let maxH = newSize;
                    let img = document.createElement('img');
                    img.src = URL.createObjectURL(file);
                    img.onload = () => {
                        let iw = img.width;
                        let ih = img.height;
                        let scale = Math.min((maxW / iw), (maxH / ih));
                        let iwScaled = iw * scale;
                        let ihScaled = ih * scale;
                        
                        if (originOrientation>2&&originOrientation<=4){
                            //rotate 180
                            console.log('rotate 180');
                            canvas.width = img.width;
                            canvas.height = img.height;
                            context.rotate(180 * Math.PI / 180);
                            context.drawImage(img, -img.width, -img.height);

                        } else if (originOrientation>4&&originOrientation<=6){
                            //rotate 90
                            console.log('rotate 90');
                            canvas.width = img.height;
                            canvas.height = img.width;
                            context.rotate(90 * Math.PI / 180);
                            context.drawImage(img, 0 , -img.height);

                        } else if (originOrientation>6&&originOrientation<=8){
                            //rotate 270
                            canvas.width = img.height;
                            canvas.height = img.width;
                            context.rotate(270 * Math.PI / 180);
                            context.drawImage(img, -img.width, 0);

                        }else{
                            //rotate 0
                            console.log('no rotate');
                            canvas.width = iwScaled;
                            canvas.height = ihScaled;
                            context.drawImage(img, 0, 0, iwScaled, ihScaled);
                            
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
                                    ,size_old: file.size
                                    ,type_old: file.type
                                    ,size: newFile.size
                                    ,type: newFile.type
                                });
                            }
                        });
                    }
                } catch (err) { reject(err);}
            }else{
                reject("No file!");
            }

        });
    }
}