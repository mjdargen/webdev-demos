window.addEventListener("load", main);

const teams = [{
    "title": "My Little Pony Trivia",
    "members": ["Shreeya", "Lita"],
    "period": "E",
    "overview": "A fun, short quiz to test your knowledge of the hit 2010's show, My Little Pony.",
    "website": "https://My-Little-Pony-Trivia-Quiz.shreeyashabari1.repl.co"
}, {
    "title": "To-Do List",
    "members": ["Rehan", "Sabrina"],
    "period": "E",
    "overview": "A to-do list where you can add, remove, and edit different items, and set dates and times.",
    "website": "https://To-do-List.sabrinayeh.repl.co"
}, {
    "title": "WebDevFlix.com",
    "members": ["Ava", "Elaine"],
    "period": "E",
    "overview": "Our project will take Netflix as an inspiration that will play clips of video scenes we will recreate.",
    "website": "https://WebdevFlix.elainedj.repl.co"
}, {
    "title": "Slep",
    "members": ["Victoria", "Keyan"],
    "period": "E",
    "overview": "A website for users to input the time they've slept and generating a visual graph to easily track their sleep history.",
    "website": "https://slep.victoriachoi2.repl.co"
}, {
    "title": "Perplexing Hexes",
    "members": ["Matthew", "Grace"],
    "period": "E",
    "overview": "A matching game where the website generates a random Hex code and 4 different options where the user has to choose the correct option.",
    "website": "https://CS4020-webdev-Final-Project.matthewsun13.repl.co"
}, {
    "title": "Black Country New Road SuperFan Fun",
    "members": ["Carlie", "Max"],
    "period": "E",
    "overview": "A page detailing information about the band Black Country New Road, their members, as well as a playable game allowing users to guess Black Country New Road songs based on small audio snippets.",
    "website": "https://Black-Country-New-Road-SuperFan-Fun.carliekirk.repl.co"
}, {
    "title": "Fun Quizzes",
    "members": ["Sam", "Evan"],
    "period": "E",
    "overview": "A website to take different fun quizzes to test their knowledge.",
    "website": ""
}, {
    "title": "Very Accurate And Amazing Survey Website to Find Out Which Ecuadorian President You Are",
    "members": ["William", "Zeta"],
    "period": "E",
    "overview": "A multi-question survey website to find out which Ecuadorian president you align with.",
    "website": "https://ecuador-survey-1.zetaknight.repl.co/"
}, {
    "title": "Color-By-Number",
    "members": ["Cage", "Charise"],
    "period": "E",
    "overview": "Color-by-number will be an interactive game where the user tries to create an image given a 5x5 grid.",
    "website": "https://Color-By-Number.micajahbullard.repl.co"
}, {
    "title": "",
    "members": ["Merry", "Yadira"],
    "period": "E",
    "overview": "",
    "website": ""
}, {
    "title": "Storefront Shopping",
    "members": ["AJ", "Laiken"],
    "period": "F",
    "overview": "A website with a storefront graphic of 3 different stores allowing you to purchase items from the store.",
    "website": "https://Storefront-Shopping.laikenharvey.repl.co"
}, {
    "title": "North Carolina School of Science and Math Website for Students",
    "members": ["Anna", "Zoe"],
    "period": "F",
    "overview": "A store website for NCSSM students featuring products and merchandise that students commonly buy.",
    "website": "https://Final-Project.tang24z.repl.co"
}, {
    "title": "Take a Seat! Or a Chair?",
    "members": ["Anna", "Katie"],
    "period": "F",
    "overview": "An interactive website to share information about unique chairs and the design principles behind them.",
    "website": "https://FinalProject.annazhong1.repl.co"
}, {
    "title": "Shoe-Mart Shoephoria Shopping Site",
    "members": ["Siddharth", "Karl", "Isaiah"],
    "period": "F",
    "overview": "A website providing a one stop for all of your shoe shopping needs.",
    "website": "https://WeSellShoes.siddharthmaruv1.repl.co"
}, {
    "title": "Yet Another Zoom On the Mandelbrot Set",
    "members": ["Ashley", "Cole"],
    "period": "F",
    "overview": "A webpage depicting the Mandelbrot Set on a large HTML canvas with explanations.",
    "website": "https://WebdevFinalMandelbrotEdition.awohlford.repl.co"
}, {
    "title": "The Final Test",
    "members": ["Lauryn", "Phoenix", "Grant"],
    "period": "F",
    "overview": "A online quiz website that asks questions about Mr. D'Argenio, much to his chagrin.",
    "website": "https://quiz.lauryncooper.repl.co"
}, {
    "title": "",
    "members": ["Riziki", "Kimberly"],
    "period": "F",
    "overview": "",
    "website": ""
}, {
    "title": "Cipher Creator/Translator",
    "members": ["Claire", "Emberleigh", "Nicholas"],
    "period": "F",
    "overview": "A website in which you can provide/create a shift and encode/decode words with the Caesar Cipher to share with your friends.",
    "website": "https://webdev-final-project.nicholascope.repl.co/"
}];


function main() {
    shuffle(teams);
    let container = document.getElementsByTagName("main")[0];
    let navbar = document.getElementById("navbarlist");
    navbar.innerHTML = `
    <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#overview">Overview&nbsp;</a>
    </li>`

    for (let i = 0; i < teams.length; i++) {
        let section = document.createElement("section");
        section.id = teams[i]["title"].toLowerCase().replaceAll(/[^a-z0-9]/gi, "");
        if (i % 2 === 0) section.classList.add("bg-light");
        else section.classList.add("bg-light-alt");
        section.innerHTML = `
        <div class="container">
            <div class="col-lg-12 mx-auto">
                <h2 class="font-weight-bold">${teams[i]["title"]}</h2>
                <p><span class="underline">Team Members</span>: ${teams[i]["members"].join(", ")}</p>
                <p><span class="underline">Website</span>: <a href="${teams[i]["website"]}">${teams[i]["website"]}</a></p>
                <p><span class="underline">Overview</span>: ${teams[i]["overview"]}</p>
            </div>
        </div>`
        container.append(section);
        navbar.innerHTML += `
        <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#${section.id}">${teams[i]["title"]}&nbsp;</a>
        </li>`
    }


    // scrolling stuff
    (function ($) {
        "use strict"; // Start of use strict

        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 56)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function () {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 56
        });

    })(jQuery); // End of use strict

}


function shuffle() {
    let currentIndex = teams.length;
    let randomIndex = 0;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [teams[currentIndex], teams[randomIndex]] = [teams[randomIndex], teams[currentIndex]];
    }
}
