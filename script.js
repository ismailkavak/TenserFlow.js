let myModel = null;

const image = document.querySelector("#img")
const button = document.querySelector("#button")
const result = document.querySelector("#result")
image.crossOrigin = "Anonymous";

button.addEventListener("click", async () => {

myModel.detect(img).then(predictions => {
        console.log('Predictions: ', predictions);
        result.innerHTML = `Detected ${predictions[0].class}!`
    });
})

cocoSsd.load().then(model => {
    myModel = model
    result.innerHTML = "The model is loaded!"
});