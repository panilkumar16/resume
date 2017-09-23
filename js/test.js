$("#main").append("Anilkumar P");

var firstName = "Anilkumar";
var age = 32;
console.log(firstName);

var awesomeThoughts = "I am Anilkumar and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);
$("#main").append(funThoughts);

var email = "panilkumar16@hotmail.com";
var newEmail = email.replace("hotmail", "gmail");
console.log(email);
console.log(newEmail);

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = 'U' + s.slice(2);
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    last_index = _array.length - 1
    _array[last_index] += 1
    newArray = _array
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var name = oldName.split(" ");
    name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    finalName = name.join(" ");
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

var name = "Anilkumar P";
var role = "Full Stack Software Engineer & Lead";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
// Using prepend to have text at the top
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["HTML", "CSS", "JavaScript", "Python", "Django"];
$("#main").append(skills);
$("#main").append(skills[3]);
$("#main").append(skills.length);

// Declare and initialize object
var bio = {
    "name" : "Anilkumar P",
    "role" : "Full Stack Software Engineer & Lead",
    "contacts" : {
        "mobile" : "510-640-6156",
        "email" : "panilkumar16@gmail.com",
        "location" : "San Francisco Bay Area"
    }, 
    "welcomeMessage" : "Welcome",
    "skills" : [
        "HTML", "CSS", "JavaScript", "Python", "Django"
    ],
    "bioPic" : "images/pic.jpg"
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts.email);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);


// Dot notation
bio.city = "San Mateo"
// Bracket notation
bio["state"] = "California"

$("#main").append(bio.city);
$("#main").append(bio.state);
$("#main").append(bio["state"]);

// Work detials in dot notation
var work = {};
work.current_job_position = "Sr. Systems/Software Engineer",
work.employer = "Guidewire",
work.years_worked = 2,
work.city = "Foster City"
$("#main").append(work.current_job_position);

// Education detials in bracket notation
var education = {};
education["last_school_name"] = "Udacity";
education["years_attended"] = 1;
education["city"] = "Palo Alto";
$("#main").append(education["last_school_name"]);

// Education in object notation JSON
var edu = {
    "schools" : [
        {
            "name" : "Udacity",
            "location" : "Palo Alto, CA",
            "degree" : "Nanodegree",
            "majors" : ["Full Stack Web Developer"],
            "dates" : 2017,
            "url" : "https://www.udacity.com/"
        },
        {
            "name" : "Cal State East Bay",
            "location" : "Hayward, CA",
            "degree" : "Hi Performance Management Course",
            "majors" : ["Management"],
            "dates" : 2017,
            "url" : "http://www.csueastbay.edu/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "JavaScript Syntax",
            "school" : "Udacity",
            "dates" : 2017,
            "url" : "http://www.udacity.com/course/ud804"
        }
    ]
};