//Blog Section start

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
});
$("#prevButton").click(function () {
var activeCard = $(".option.active");
var prevCard = activeCard.prev(".option");

if (prevCard.length === 0) {
    prevCard = $(".option:last");
}

activeCard.removeClass("active");
prevCard.addClass("active");
});

$("#nextButton").click(function () {
var activeCard = $(".option.active");
var nextCard = activeCard.next(".option");

if (nextCard.length === 0) {
    nextCard = $(".option:first");
}

activeCard.removeClass("active");
nextCard.addClass("active");
});




//Blog Section end


// Home Section
var words = document.getElementsByClassName('hword');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 2000);


let sideMenu = document.getElementById("sideMenu");
let hmenu = document.getElementById("menuIcon");
hmenu.onclick = function () {
  sideMenu.classList.toggle("open-menu");
}
let menuElt = document.getElementsByClassName("menu-elt");
for (let x=0;x<menuElt.length;x++){
    menuElt[x].onclick= function () {
    sideMenu.classList.toggle("open-menu");
  }
}

// Home Section end

// Board Section start
var tabs = $(".tabs");
var selector = $(".tabs").find("a").length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find(".active");
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  left: activeItem.position.left + "px",
  width: activeWidth + "px"
});

$(".tabs").on("click", "a", function (e) {
  e.preventDefault();
  $(".tabs a").removeClass("active");
  $(this).addClass("active")
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
    // document.getElementById(this.dataset.id).className = 'active-year';
    // $(this.dataset.id).addClass("active-year");
  $(".selector").css({
    left: itemPos.left + "px",
    width: activeWidth + "px"
  });
});

let board2023 = document.getElementById('Board-switch-2023');
let board2024 = document.getElementById('Board-switch-2024');
let board2024Content = document.getElementById('Board2024');
let board2023Content = document.getElementById('Board2023');

board2023.addEventListener('click', function(){
    board2024Content.classList.remove('active-year-board');
    board2023Content.classList.add('active-year-board');
})
board2024.addEventListener('click', function(){
    board2023Content.classList.remove('active-year-board');
    board2024Content.classList.add('active-year-board');
})



// Board Section end


//Events Section start
var tabs = $(".tabs");
var selector = $(".tabs").find("a").length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find(".active");
var activeWidth = activeItem.innerWidth();
$(".selector").css({
    left: activeItem.position.left + "px",
    width: activeWidth + "px"
});

$(".tabs").on("click", "a", function (e) {
    e.preventDefault();
    $(".tabs a").removeClass("active");
    $(this).addClass("active")
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".2023").removeClass("active-year");
    $(".2022").removeClass("active-year");
    // document.getElementById(this.dataset.id).className = 'active-year';
    // $(this.dataset.id).addClass("active-year");
    $(".selector").css({
        left: itemPos.left + "px",
        width: activeWidth + "px"
    });
});

let events2022 = document.getElementById('2022');
let events2023 = document.getElementById('2023');
let events2023Content = document.getElementById('2023events');
let events2022Content = document.getElementById('2022events');
let active2023 = document.getElementById("2023active");
let active2022 = document.getElementById("2022active");

events2022.addEventListener('click', function(){
    events2023Content.classList.remove('active-year');
    events2022Content.classList.add('active-year');
    handelChange(8)
    
})
events2023.addEventListener('click', function(){
    events2022Content.classList.remove('active-year');
    events2023Content.classList.add('active-year');
    handelChange(0)
})

function handelChange(i){
    for(let i=0; i<contentBx.length; i++){
        contentBx[i].className = 'contentBx';
    }
    for (let j = 0; j < descriptionBx.length; j++) {
        descriptionBx[j].className = 'descriptionBx';
    }
    document.getElementById(imgBx[i].dataset.id).className = 'contentBx active';
    // console.log(this.dataset.id + '_description');
    document.getElementById(imgBx[i].dataset.id + '_description').className = 'descriptionBx event-active';

    for(let i=0; i<imgBx.length; i++){
        imgBx[i].className = 'imgBx';
    }
    imgBx[i].className = 'imgBx active';
}

let imgBx = document.querySelectorAll('.imgBx')
let contentBx = document.querySelectorAll('.contentBx')
let descriptionBx = document.querySelectorAll('.descriptionBx');

for(let i=0; i < imgBx.length; i++){
    imgBx[i].addEventListener('mouseover', function(){
        for(let i=0; i<contentBx.length; i++){
            contentBx[i].className = 'contentBx';
        }
        for (let j = 0; j < descriptionBx.length; j++) {
            descriptionBx[j].className = 'descriptionBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';
        // console.log(this.dataset.id + '_description');
        document.getElementById(this.dataset.id + '_description').className = 'descriptionBx event-active';

        for(let i=0; i<imgBx.length; i++){
            imgBx[i].className = 'imgBx';
        }
        this.className = 'imgBx active';
    })
}

//Events Section end

/* Domain seciton start*/
document.getElementById("webdev-section").querySelector(".nav-link").focus();
function showContent(section) {
    var contentArea = document.getElementById("contentArea");
    var content = '';
    if (section === 'webdev') {
        content = '<h2 style="text-align: center; margin-top: 25px; "><span class="text-success">W</span>eb <span class="text-success">D</span>evelopment</h2><p class=" domaintext text-left lh-lg word-spacing-4 mt-4">IEEE TEMS specializes in Web Development. We are dedicated to fostering creativity and honing technical skills within our community. Our initiatives include hosting coding competitions that challenge members to push their programming limits, organizing web design workshops that provide hands-on experience in crafting stunning digital interfaces, and conducting intensive coding bootcamps to empower our members with the ability to create responsive websites and dynamic web applications. Through these endeavors, we enable our members to explore and master the latest web technologies, ensuring that they stay at the forefront of the ever-evolving digital landscape.</p>';
    } else if (section === 'ml') {
        content = '<h2 style="text-align: center; margin-top: 25px; "><span class="text-success">M</span>achine <span class="text-success">L</span>earning</h2><p class=" domaintext text-left lh-lg word-spacing-4 mt-4">In the realm of Machine Learning, IEEE TEMS is the go-to hub for enthusiasts seeking to dive into the world of cutting-edge algorithms, advanced data analysis techniques, and practical AI applications. Our vibrant community of members actively engages in workshops, hackathons, and seminars to stay consistently updated with the latest advancements in Machine Learning.Through our interactive events, we aim to foster a culture of innovation and collaboration in this ever-evolving field. Our seminars feature industry experts and thought leaders, providing invaluable insights into the exciting developments in Machine Learning.</p>';
    } else if (section === 'iot') {
        content = '<h2 style="text-align: center; margin-top: 25px; "><span class="text-success">I</span>nternet <span class="text-success">O</span>f <span class="text-success">T</span>hings</h2><p class=" domaintext text-left lh-lg word-spacing-4 mt-4"">IEEE TEMS plays a pivotal role in bridging the physical and digital realms. Our array of activities includes hosting IoT hackathons, sensor development workshops, and thought-provoking discussions on the societal impact of the Internet of Things (IoT). Within our vibrant community, members come together to collaborate, brainstorm, and create innovative IoT solutions. This collective effort not only enhances the interconnectedness of our world but also contributes to the broader conversation about the evolving role of IoT in our daily lives and society at large. Our commitment to pushing the boundaries of IoT technology further enriches the landscape of innovation and connectivity.</p>';
    }
    else if (section === 'devops') {
        content = '<h2 style="text-align: center; margin-top: 25px; "><span class="text-success">D</span>evops</h2><p class=" domaintext text-left lh-lg word-spacing-4 mt-4">IEEE TEMS serves as a dynamic platform that actively bridges the gap between development and operations, emphasizing the principles of automation, collaboration, and continuous improvement. Our comprehensive approach encompasses a wide range of activities, including the hosting of engaging DevOps workshops, hackathons, and insightful discussions on industry best practices.Within our vibrant community, members embark on a journey of discovery and skill enhancement, learning to streamline software development and deployment processes. This not only promotes efficiency and reliability but also fosters a culture of innovation in the rapidly evolving tech landscape.</p>';
    }
    else if (section === 'design') {
        content = '<h2 style="text-align: center; margin-top: 25px; "><span class="text-success">D</span>esign</h2><p class=" domaintext text-left lh-lg word-spacing-4 mt-4">In the dynamic realm of design, IEEE TEMS is a passionate advocate for the harmonious fusion of technology and aesthetics. We take pride in offering a diverse array of opportunities that empower our members to explore, innovate, and excel in the design domain.At the heart of our design-focused initiatives are UI/UX design challenges that challenge our members to craft engaging and user-friendly digital interfaces. Our graphic design workshops provide hands-on experiences that enhance their artistic and creative skills, enabling them to create visually stunning and effective design solutions.</p>';
    }
    else if (section === 'editorial') {
        content = '<h2 style="text-align: center; margin-top: 25px; "><span class="text-success">B</span>logging & <span class="text-success">V</span>logging</h2><p class=" domaintext text-left lh-lg word-spacing-4 mt-4">IEEE TEMS extends its reach into the realm of effective communication within the technical domain by providing a dedicated platform for blogging and vlogging. Our mission is to empower individuals to articulate their expertise and insights in a compelling and accessible manner. Through this specialized domain, we offer comprehensive training in content creation, video editing, and the nuances of effective social media marketing. Our aim is to equip members with the skills and tools they need to convey complex technical knowledge in a clear and engaging manner, bridging the gap between experts and enthusiasts.</p>';
    }
    contentArea.innerHTML = content;
}
/* Domain seciton end */