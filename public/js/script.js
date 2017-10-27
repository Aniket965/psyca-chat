var divRoot = $("#affdex_elements")[0]

var faceMode = affdex.FaceDetectorMode.LARGE_FACES
// The captured frame's width in pixels
var width = 320;

// The captured frame's height in pixels
var height = 240;

var detector = new affdex.CameraDetector(divRoot, width, height, faceMode)

detector.addEventListener("onImageResultsSuccess", function (faces, image, timestamp) {
    faces.forEach((face) => {
       console.log(face)
       fetch(`http://localhost:3000/log?joy=${face}`)
        .then()
    })
})

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