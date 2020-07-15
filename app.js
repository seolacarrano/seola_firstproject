//project
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
                url: entry.gsx$url.$t
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
        $div.append($('<a>').addClass("linktoproject").attr('href', project.url).text('LINK >>>'))
        return $div
    }

    data.forEach( project => {
       const $projectDiv = createProjectElement(project)
       $('#projectpreview').append($projectDiv)
   })
   }

//hamburger icon
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


//contact form
$(document).ready(function(){
    $('#iframe').attr('src', 'https://docs.google.com/forms/d/e/1FAIpQLSdhwDdBjrDuEXa71NfC7cCNWqkQfqv3JfoZjZrHEYHVxeihoA/viewform?embedded=true');
 });

 