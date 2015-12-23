 
  /* 
 bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location. I have added a github link 
 */ 

  var bio={
	 "name":"kahina Mouelouel",
	 "role":"Front-End Web Developer",
	 "contacts":{
		"mobile":"925-705-1175",
		"email":"mouelouel@gmail.com",
		"github":"kmouelouel",
		"location":"Concord,ca, US"	 
		        },
	"welcomeMessage":"work in your dream while everyone else is sleeping.In order to succeed, we must first believe that we can.",
	"skills":["C/C#","Training ArcGIS","Consulting Navision ","Java","Dynamic","motivated"],
	"bioPic":"images/kahina.jpg"
 };
   /* 
 education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course. 
 */ 

var education={
	 "schools":[
	    {
	     "name":"Diablo Valley College",
		 "location":"pleasant Hill,ca, US",
		 "degree":"Associate degree",
		 "date":"2013-2016",
		 "url":"www.dvc.edu",
		 "major":"Computer Science"
		 },
		  {   
	     "name":"School of Computer Science,ESI ",
		 "location":"Oran,Algeria",
		 "degree":"Bachelor degree",
		 "date":"2002-2008",
		 "url":"www.esi.dz",
		 "major":"Software Engineer" 
		 }
		 ],
		 "onlineCourses":[
		 {
			 "title" :"Front-End Developer nanodegree",
			 "school" :"Udacity",
			 "date" :"2015",
			 "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		 }
		 ]
		 
 };  
 var work={
	 "jobs":[
	 {
		 "employer":"OXIA Algeria",
		 "location" : "Tizi Ouzou, Algeria",
		 "title":"Developer Consultant",
		 "date":"April 2012 -October 2012",
		 "description":"Trained 15 CFAO Automotive users on how to adapt to the new Navision software by increasing the user productivity and the traceability of activities by the administrators.Implemented a new specific component-oriented language using C/SIDE environment and C/Al language in order to reduce the over buying of the items and to tri the inventory.Consulted Icosnet.Inc administrators to the best configuration of user account related to the roles and tasks that augmented the security of data.Developed and delivered technical support for the administrators  "
	 },
	 {
		 "employer":"GISmed,the distibutor and integrator of ESRI product in Algeria",
		 "location" : "Algiers, Algeria",
		 "title":"Software Engineer",
		 "date":"Ferbruary 2010- March 2012",
		 "description":"Assisted different groups of customers on how to work with ArcGIS.Designed, developed and implemented the GISMed website by using PHP and MySQ to allow to customers to check the catalog of training, the schedules of the formations and to register more easily.Consulted the new customers to purchase the ArcGIS products by showing them the quality of products ", 
	}
	,
	 {
		 "employer":"LigSoft",
		 "location" : "Algiers, Algeria",
		 "title":"computer science Engineer",
		 "date":"January 2009- January 2010",
		 "description":"Redesigned a new version of ANBT mobile application by adding more options by users, which increased the number of users.Designed, developed, and implemented a chart module to present the data by using C# and Microsoft SQL Server in order to help the users to take decisions in the exploitation of water.",
	}
	 ]
 };
 var projects={
	"projects":	[
	{  
	    "title":"ANBT Chart Graphic",
		"date":"2010",
		"description":" Worked with ANBT to create a dynamic software to manage the data and to show them as table or in the map. ",
		  "images":[
		  "images/project1.jpg",
		   "images/project2.jpg",
		  ]
	}
	]

}	;
 
 
 bio.display= function(){ 
 var formattedName=HTMLheaderName.replace("%data%",bio.name);
  var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
var formattedmobile= HTMLmobile.replace("%data%",bio.contacts.mobile); 
var formattedemail= HTMLemail.replace("%data%",bio.contacts.email); 
 var formattedgithub= HTMLgithub.replace("%data%",bio.contacts.github); 
var formattedlocation=HTMLlocation.replace("%data%",bio.contacts.location); 
var formattedImg= HTMLbioPic.replace("%data%",bio.bioPic); 
var formattedmsg= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);  

$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);
 $("#header").append(formattedImg);
 $("#header").append(formattedmsg);
 if(bio.skills.length>0)
 { 
$("#header").append(HTMLskillsStart);
	 for(skill in bio.skills ){
	
	 var formattedskill=HTMLskills.replace("%data%",bio.skills[skill]); 
	  $("#skills").append(formattedskill);
	 }  
 }
};
 
work.display= function() {
	for(job in work.jobs){ 
	$("#workExperience").append(HTMLworkStart); 
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);	
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);	
	var formattedEmployerTitle=formattedEmployer+formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].date);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

	}
};

education.display = function(){
  	 for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedschoolname= HTMLschoolName.replace("%data%",education.schools[school].name);
		var formatteddegree= HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedschooldegree=formattedschoolname+formatteddegree;
		$(".education-entry:last").append(formattedschooldegree);
		var formattedshooldate= HTMLschoolDates.replace("%data%",education.schools[school].date);
		$(".education-entry:last").append(formattedshooldate);
		var  formattedschoollocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedschoollocation);
		var formattedmajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedmajor);
	}
	if(education.onlineCourses.length>0){
		$(".education-entry:last").append(HTMLonlineClasses);
		for(cource in education.onlineCourses){
		var  formattedtitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[cource].title);
		var  formattedschool= HTMLonlineSchool.replace("%data%",education.onlineCourses[cource].school);
		var formattedtitleschool=formattedtitle+formattedschool;
		var  formatteddates=HTMLonlineDates.replace("%data%",education.onlineCourses[cource].date);
		var  formattedUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[cource].url);
		$(".education-entry:last").append(formattedtitleschool);
		 $(".education-entry:last").append(formatteddates);
		$(".education-entry:last").append(formattedUrl);	
		}
		
	}


 };
projects.display = function(){
 
	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formatteddate=HTMLprojectDates.replace("%data%",projects.projects[project].date);
		$(".project-entry:last").append(formatteddate);
		var formatteddescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formatteddescription);
	  if(projects.projects[project].images.length>0){	
      for(image in projects.projects[project].images ){ 
			var formattedimage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedimage);	
	 }
	 }
	}
	
};

function footerdisplay(){ 
	var formattedmobile= HTMLmobile.replace("%data%",bio.contacts.mobile); 
var formattedemail= HTMLemail.replace("%data%",bio.contacts.email); 
 var formattedgithub= HTMLgithub.replace("%data%",bio.contacts.github); 
var formattedlocation=HTMLlocation.replace("%data%",bio.contacts.mylocation);   

$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
$("#footerContacts").append(formattedgithub);
$("#footerContacts").append(formattedlocation);
 
 }
function inName(name){ 
	console.log(name); 
	var newName = name; 
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();   
 
	return newName; 
	}; 

function locationizer(work_obj){
	var locationArray=[];
	for(job in work_obj.jobs){
		var newlocation=work_obj.jobs[job].location;
		locationArray.push(newlocation);
		}
		return locationArray;
}
 
 
 // calling the functions::
 bio.display();
 work.display();
 projects.display();
 education.display();
 footerdisplay();
 $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


 
 