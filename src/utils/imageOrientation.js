const calculateOrientationClass = (width, height) => {
    let orientation = "square";

    let aspectRatio = width / height;
    if(aspectRatio >= 2.25) {
        orientation = "landscape-3";
    }
    else if(aspectRatio >= 1.75 ) {
        orientation = "landscape-2";
    } 
    else if(aspectRatio >= 1.2) {
        orientation = "landscape-1";
    }
    else if(aspectRatio >= 0.9) {
        orientation = "square";
    }
    else if(aspectRatio >= 0.75) {
        orientation = "portrait-1";
    }
    else if(aspectRatio >= 0.6){
        orientation = "portrait-2";
    }
    else {
        orientation = "portrait-3";
    }
    return orientation;
}


const findOrientationClass = (aspectRatio) => {
    let orientation = "square";
    if(aspectRatio >= 2.25) {
        orientation = "landscape-3";
    }
    else if(aspectRatio >= 1.75 ) {
        orientation = "landscape-2";
    } 
    else if(aspectRatio >= 1.2) {
        orientation = "landscape-1";
    }
    else if(aspectRatio >= 0.9) {
        orientation = "square";
    }
    else if(aspectRatio >= 0.75) {
        orientation = "portrait-1";
    }
    else if(aspectRatio >= 0.6){
        orientation = "portrait-2";
    }
    else {
        orientation = "portrait-3";
    }
    return orientation;
}

module.exports = {
    calculateOrientationClass,
    findOrientationClass
}