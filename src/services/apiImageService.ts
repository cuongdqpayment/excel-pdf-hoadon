
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

                var allMetaData;
                exif.getData(file, function() {
                    //console.log(file);
                    allMetaData = exif.getAllTags(this);
                    console.log("get Tags Orientation",allMetaData.Orientation);
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
                        canvas.width = iwScaled;
                        canvas.height = ihScaled;
                        context.drawImage(img, 0, 0, iwScaled, ihScaled);
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
                                    ,subtitle: file.lastModifiedDate + "("+ (allMetaData?allMetaData.Orientation:1) +")"
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