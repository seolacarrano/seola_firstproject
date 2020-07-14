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

//project 
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

   /*
   //hamburger
   $( document ).ready(function() {
       
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    });

       
   //hamburger
   $( document ).ready(function() {
       
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    });

     
    

/*    
//hamburger 
const $hamburger = ('.hamburger');
const $menu = ('.menu');
let show = false;

const showMenu = (e) => {
    if (show){
        $menu.each(function(index){
            $(this).css('display','block')
        })
        show = false
    }else{
        $menu.each(function(index){
            $(this).css('display','none')
        })
        show = true}
    }
    $hamburger.on('click', showMenu)*/