function speak12(){
    var synthd = window.speechSynthesis;
   var speakren = 'Welcome To Emotion to Emoji.';
    var utterThis = new SpeechSynthesisUtterance(speakren);
    synthd.speak(utterThis);

}

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera = document.getElementById('camera');

Webcam.attach('#camera');

function take_snapshot()
{
     Webcam.snap(function(data_uri){
      document.getElementById('result').innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';

     });
}
console.log('ml5 version: ',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B_pLwNi0t/model.json',modelLoaded);
function modelLoaded()
{
    console.log('ModelLoaded');

}

function check()
{
    img = document.getElementById('capture_image');
    classifier.classify(img,gotResult)
}

function gotResult(error , results)
{
    console.log('Working');
 if(error)
 {
    console.log('ERROR');
    console.error(error);
} else {
    console.log(results);
    document.getElementById('result_emotion_name').innerHTML = results[0].label;
    document.getElementById('result_emotion_name2').innerHTML = results[1].label;

    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();

    if(results[0].label == 'Happy')
    {
        document.getElementById('update_emoji').innerHTML = "&#128522;";

    }
    if(results[0].label == 'Sad')
    {
        document.getElementById('update_emoji').innerHTML = "&#128532;";
        
    }
    if(results[0].label == 'Angry')
    {
        document.getElementById('update_emoji').innerHTML = "&#128545;";
        
    }
    if(results[1].label == 'Happy')
    {
        document.getElementById('update_emoji2').innerHTML = "&#128522;";

    }
    if(results[1].label == 'Sad')
    {
        document.getElementById('update_emoji2').innerHTML = "&#128532;";
        
    }
    if(results[1].label == 'Angry')
    {
        document.getElementById('update_emoji2').innerHTML = "&#128545;";
        
    }
    
}
}


function speak(){
    var synth = window.speechSynthesis;
   var speak1 = 'This is the first perdiction ' + prediction_1;
   var speak2 = 'This is the second perdiction ' + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak1 + speak2);
    synth.speak(utterThis);

}
