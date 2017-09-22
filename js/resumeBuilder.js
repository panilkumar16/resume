/*
Code to build the resume will go here.
 */

var name = "Anilkumar P";
var role = "Full Stack Software Engineer & Lead";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
// Using prepend to have text at the top
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// var skills = ["HTML", "CSS", "JavaScript", "Python", "Django"];
// $("#main").append(skills);
// $("#main").append(skills[3]);
// $("#main").append(skills.length);