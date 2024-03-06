
var to = 'bé Jun';
var gift_url = 'https://www.thelist.com/img/gallery/signs-you-should-not-say-i-love-you/l-intro-1611601999.jpg';
var gift_image_url = 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.15752-9/423455084_380986164776445_3877256745123044575_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGWviZWrveTE1H_8P4RmMT1jmz2VO7Q6r-ObPZU7tDqv7SGPQhREHFVbIYU7fqYA8BQYk0fr1EkhmEO3TBrzmCv&_nc_ohc=xVM9fi89PR0AX9L4vJZ&_nc_ht=scontent.fsgn5-11.fna&cb_e2o_trans=t&oh=03_AdTZwohFjpe72WhIn6BNo3VhLOjsoW3ihJ0bksLoGtQFQQ&oe=661042B6';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
        document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

