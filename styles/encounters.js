<script type="text/javascript">

// function randomImg(){
//     var randomNumber = Math.floor(Math.random() * 12) + 1;
//     var imgName = "img_" + randomNumber;
//     document.getElementById("imageid").src= "YOUR_IMG_PATH" ;
//  }

//  /

//  function getRandomImage() { 
// 	var randomNumber = Math.floor(Math.random()*imgName.length);
// 	var imgName = "img_" + randomNumber;
// 	document.write('<img src="'+imgName[number]+'" />');

 var randomImage = new Array();

randomImage[0] = "photos/encounters/img_1";
randomImage[1] = "photos/encounters/img_2";
randomImage[2] = "photos/encounters/img_3";
randomImage[3] = "photos/encounters/img_4";


function getRandomImage() { 
var number = Math.floor(Math.random()*randomImage.length);
document.write('<img src="'+randomImage[number]+'" />');
}

</script>