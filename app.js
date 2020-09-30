// -----------sticky nav bar------------------
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// ---------hamburger icon----------
const $hamburger = $('.hamburger');
const $links = $('.link');
let show = false;
  
const showMenu = (event) => {
 if (show){
 $links.each(function(index){
  $(this).css('display','none')
  })
  show = false
  }else{
   $links.each(function(index){
   $(this).css('display','block')
   })
  show = true
  }
}
$hamburger.on('click', showMenu)


// ---------project---------
console.log($)

const url = 'https://spreadsheets.google.com/feeds/list/1AoWEvjhyYWiYHNnYgOZ1R7Z-vJkL-je64IhKlZzsOOs/od6/public/values?alt=json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        const projects = data.feed.entry.map(entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t,
                github: entry.gsx$github.$t
             }
        })
        app(projects)
    })


   const app = (data) => {
   const createProjectElement = (project) => {
        const $div = $('<div>').addClass("preview")
        $div.append($('<h2>').addClass("nameofproject").text(project.title))
        $div.append($('<img>').addClass("imageofproject").attr('src', project.image))
        $div.append($('<p>').addClass("description").text(project.description))
        $div.append($('<a>').addClass("linktoproject").attr('href', project.url).html('<i class="fas fa-home"></i>'))
        $('.linktoproject').attr('target', '_blank')  
        $div.append($('<a>').addClass("linktogithub").attr('href', project.github).html('<i class="fab fa-github"></i>'))
        $('.linktogithub').attr('target', '_blank')  
        // $div.append($('<a>').addClass("linktoproject").attr('href', project.url).text('live server >>'))
        // $('.linktoproject').attr('target', '_blank') 
        return $div
    }

    data.forEach( project => {
       const $projectDiv = createProjectElement(project)
       $('#project-container').append($projectDiv)
   })
   }







 