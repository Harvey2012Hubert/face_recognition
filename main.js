//https://teachablemachine.withgoogle.com/models/aSKH9xVWM/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
})

camera = document.getElementById("camera")
Webcam.attach("#camera")

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById(result). innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    })
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aSKH9xVWM/model.json', modelLoaded)

function identify(){
    img=document.getElementById("captured_image")
    classifier.classify(img,get_results)
}
function get_results(error,result){
    if (error){
        console.error(error)
    }
    else{
        console.log(result);
        document.getElementById("result_name").innerHTML=result[0].label;
        document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3)*100+'%';
    }
}