var divRoot = $("#affdex_elements")[0]

var faceMode = affdex.FaceDetectorMode.LARGE_FACES
// The captured frame's width in pixels
var width = 320;

// The captured frame's height in pixels
var height = 240;

var detector = new affdex.CameraDetector(divRoot, width, height, faceMode)
let running = false
detector.addEventListener("onImageResultsSuccess", function (faces, image, timestamp) {
    faces.forEach((face) => {
        if (!running) {
            running = true
            firebase.database().ref('/codeoff').push(face.emotions);
            console.log(face.emotions)
            setTimeout(_ => {

                running = false
            }, 1000)
        } else {

        }

    })
})
function push(emo) {

}
detector.addEventListener("onImageResultsFailure", function (image, timestamp, err_detail) {
    console.log(image)
})
detector.addEventListener("onWebcamConnectSuccess", function () {
    console.log("I was able to connect to the camera successfully.");
})

detector.addEventListener("onWebcamConnectFailure", function () {
    console.log("I've failed to connect to the camera :(");
})

detector.detectAllExpressions()
detector.detectAllEmotions()
detector.start()

$(document).ready(() => {
    var config = {
        apiKey: "AIzaSyCOmubrc3gEd6LOW5UfRH5LVaL-GFgRCgk",
        authDomain: "not-so-awesome-project-45a2e.firebaseapp.com",
        databaseURL: "https://not-so-awesome-project-45a2e.firebaseio.com",
        projectId: "not-so-awesome-project-45a2e",
        storageBucket: "not-so-awesome-project-45a2e.appspot.com",
        messagingSenderId: "481329884022"
    };
    firebase.initializeApp(config);


})