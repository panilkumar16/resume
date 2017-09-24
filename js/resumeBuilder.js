/*
Code to build the resume will go here.
 */

//
// All the Resume Sections
//


// Biography Section in object
var bio = {
    "name" : "Anilkumar P",
    "role" : "Full Stack Software Engineer & Lead",
    "welcomeMsg" : "Welcome to Anilkumar Biography",
    "bioPic" : "images/fry.jpg",
    "contacts" : {
        "mobile" : "510-640-6156",
        "email" : "panilkumar16@gmail.com",
        "github" : "panilkumar16",
        "location" : "San Francisco Bay Area"
    },
    "skills" : [
        "HTML", "CSS", "JavaScript", "Python", "Django"
    ]
};


// Work Section in JSON format
var work = {
    "jobs" : [
        {
            "employer" : "Guidewire",
            "title" : "Sr. Systems/Software Engineer",
            "location" : "Foster City, CA",
            "dates" : "2015 - 2017",
            "description" : "Developed App from scratch for automatic VMs creation on demand, managing, and deleting after use to save resources. Worked on Self-Service Web App that helps users to Create/Deploy VMs on their own."
        },
        {
            "employer" : "Pro Unlimited",
            "title" : "Sr. Systems/Software Engineer",
            "location" : "Burlingame, CA",
            "dates" : "2012 - 2015",
            "description" : "Worked on resolving Data Center challenges. Researched and presented to management the solutions by Virtualization and Cloud. The solutions reduced cost, saved time in deploying, and easy management."
        },
        {
            "employer" : "Riverbed",
            "title" : "Sr. Systems/Software Engineer",
            "location" : "San Francisco, CA",
            "dates" : "2010 - 2012",
            "description" : "Architected a new design and development that was much easier to interface using Web Application and was understood by all teams. Lead to 30% reduction in time and higher quality of systems."
        },
        {
            "employer" : "GridNet",
            "title" : "Sr. Software Engineer",
            "location" : "San Francisco, CA",
            "dates" : "2010",
            "description" : "Worked on Smart Meters Systems and Software to improve quality & performance. This led to greater throughput (up 35%) and fewer bug escapes (down 58%), with much higher customer satisfaction (up 38%)."
        },
        {
            "employer" : "Sun Microsystems",
            "title" : "Member of Technical Staff",
            "location" : "Menlo Park/Newark/Santa Clara, CA",
            "dates" : "2001 - 2010",
            "description" : "Worked on Sun’s Enterprise Server and Software (ESS) which was a critical component of a new offering. Released with high quality which led to became company’s top revenue-generating product."
        },
    ]
};

// Work Section Display Function
work.display = function () {
    // For loop to iterate through all jobs and display each job details
    for (job in work.jobs) {
        // Employer - Title
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        // Dates
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        // Description
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

// Project Section in JSON format
var projects = {
    "projects" : [
        {
            "title" : "Neighborhood Map",
            "dates" : "2017",
            "description" : "Goal of the project is to develop a Single-page, Responsive Web Application that loads highlighted locations in a neighborhood, so Users can know about them.",
            "images" : ["https://github.com/panilkumar16/neighborhood-map"]
        },
        {
            "title" : "Item Catalog App",
            "dates" : "2017",
            "description" : "Purpose of the Web Application is Users around the World can securely login to contribute to an organized list of Categories and its Items.",
            "images" : ["https://github.com/panilkumar16/item-catalog"]
        }
    ]
};

// Projects Section Display Function
projects.display = function () {
    // For loop to iterate through all projects and display each project details
    for (project in projects.projects) {
        
        $("#projects").append(HTMLprojectStart);
        
        // Project - Title
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        // Project - Dates
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        // Project - Description
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        // Project - Images
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}


// Education Section in JSON format
var education = {
    "schools" : [
        {
            "name" : "Udacity",
            "location" : "Palo Alto, CA",
            "degree_dates" : 2017,
            "url" : "https://www.udacity.com/",
            "majors" : ["Full Stack Web Developer"]
        },
        {
            "name" : "Cal State East Bay",
            "location" : "Hayward, CA",
            "degree_dates" : 2007,
            "majors" : ["Hi Performance Management"],
            "url" : "http://www.csueastbay.edu/"
        },
        {
            "name" : "San Jose State University",
            "location" : "San Jose, CA",
            "degree_dates" : 2005,
            "majors" : ["Software Engineering"],
            "url" : "http://www.sjsu.edu/"
        },
        {
            "name" : "Dayananda Sagar College of Engineering",
            "location" : "Bangalore, KA",
            "degree_dates" : 1997,
            "majors" : ["Computer Science and Engineering"],
            "url" : "http://dayanandasagar.edu/"
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


// Header Section Display
// Name
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
// Role
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);
// Contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedTopContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
$("#header").append(formattedTopContacts);
// Picture
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
// Welcome Message
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);
// Skills
// Check if biography skills exists, if exists display in header
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    console.log(bio.skills);
}


// Work Section Display
work.display();

// Project Section Display
projects.display();

// Map showing where I've lived and worked
$("#mapDiv").append(googleMap);

// Internationalize Names
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton)
