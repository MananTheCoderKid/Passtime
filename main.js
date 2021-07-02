Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src=" ' + data_uri + ' " /> ';
    });
}

console.log("ml5 Test  |  ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/y7v_ht0Ko/model.json", modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}

function check() {
    image = document.getElementById("captured_image");
    classifier.classify(image, gotResult);
    console.log("checking if the check function works");
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}