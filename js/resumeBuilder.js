/*
Code to build the resume will go here.
 */

//
// All the Resume Sections
//

// Work in JSON format
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

// Project in JSON format
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

// Biography in object
var bio = {
    "name" : "Anilkumar P",
    "role" : "Full Stack Software Engineer & Lead",
    "welcomeMessage" : "Welcome to Anilkumar Biography",
    "bioPic" : "images/pic.jpg",
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

// Education in JSON format
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