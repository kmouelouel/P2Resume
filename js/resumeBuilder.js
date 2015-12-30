 /* 
       bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location. I have added a github link 
       */
 var bio = {
     "name": "kahina mouelouel",
     "role": "Front-End Web Developer",
     "contacts": {
         "mobile": "925-705-1175",
         "email": "mouelouel@gmail.com",
         "github": "kmouelouel",
         "location": "Concord,ca, US"
     },
     "welcomeMessage": "In order to succeed,we must first believe that we can ; work in your dream while everyone else is sleeping.",
     "skills": ["C/C#", "Training ArcGIS", "Consulting Navision ", "SQL Server", "Microsoft office", "HTML & CSS"],
     "bioPic": "images/me.jpg",
 };
 bio.display = function() {
     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
     var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
     var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
     var formattedImg = HTMLbioPic.replace("%data%", bio.bioPic);
     var formattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     $("#header").prepend(formattedRole);
     $("#header").prepend(formattedName);
     $("#topContacts").append(formattedmobile);
     $("#topContacts").append(formattedemail);
     $("#topContacts").append(formattedgithub);
     $("#topContacts").append(formattedlocation);
     $("#header").append(formattedImg);
     $("#header").append(formattedmsg);
     $("#footerContacts").append(formattedmobile);
     $("#footerContacts").append(formattedemail);
     $("#footerContacts").append(formattedgithub);
     $("#footerContacts").append(formattedlocation);
     if (bio.skills.length > 0) {
         $("#header").append(HTMLskillsStart);
         for (var i = 0; i < bio.skills.length; i++) {
             var formattedskill = HTMLskills.replace("%data%", bio.skills[i]);
             $("#skills").append(formattedskill);
         }
     }
 };
 bio.display();
 /* 
 education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course. 
 */

 var education = {
     "schools": [{
         "name": "Diablo Valley College",
         "location": "pleasant Hill,ca, US",
         "degree": "Associate degree",
         "majors": "Computer Science",
         "dates": "2013-2016",
         "url": "www.dvc.edu"
     }, {
         "name": "School of Computer Science,ESI ",
         "location": "Oran,Algeria",
         "degree": "Bachelor degree",
         "majors": "Software Engineer",
         "dates": "2002-2008",
         "url": "www.esi.dz"
     }],
     "onlineCourses": [{
         "title": "Front-End Developer nanodegree",
         "school": "Udacity",
         "date": "2015",
         "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
     }]
 };

 education.display = function() {
     $("#education").append(HTMLschoolStart);
     for (var school = 0; school < education.schools.length; school++) {
         if (education.schools.hasOwnProperty(school)) {
             var formattedschooldegree = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
             $(".education-entry:last").append(formattedschooldegree);
             var formattedshooldate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
             $(".education-entry:last").append(formattedshooldate);
             var formattedschoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
             $(".education-entry:last").append(formattedschoollocation);
             var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
             $(".education-entry:last").append(formattedmajor);
         }
     }
     if (education.onlineCourses.length > 0) {
         $(".education-entry:last").append(HTMLonlineClasses);
         for (var cource = 0; cource < education.onlineCourses.length; cource++) {

             var formattedtitleschool = HTMLonlineTitle.replace("%data%", education.onlineCourses[cource].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[cource].school);
             var formatteddates = HTMLonlineDates.replace("%data%", education.onlineCourses[cource].date);
             var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[cource].url);
             $(".education-entry:last").append(formattedtitleschool);
             $(".education-entry:last").append(formatteddates);
             $(".education-entry:last").append(formattedUrl);
         }
     }
 };
 education.display();
 var work = {
     "jobs": [{
         "employer": "OXIA Algeria",
         "title": "Developer Consultant",
         "location": "Tizi Ouzou, Algeria",
         "dates": "April 2012 -October 2012",
         "description": "•Trained 15 CFAO Automotive users to familiarize with  their new Navision software which added a high value to their productivity that  was increased to  95%  <br>•Reduced the wasted time of 5 days by implementation of a new specific component which was oriented language using C/SIDE environment and C/Al language, and it organized data in order to be easy to analysis and to print the specific data  <br>•Consulted the administrators of Icosnet.Inc for the best configuration the accounts of users by basing in the roles and tasks of each one that augmented the security of data by 90%"
     }, {
         "employer": "GISmed,the distibutor and integrator of ESRI product in Algeria",
         "title": "Software Engineer",
         "location": "Algiers, Algeria",
         "dates": "Ferbruary 2010- March 2012",
         "description": "•Assisted different groups of customers who gave an satisfaction by 97% during their training in the goal to deepen their knowledge using a course material that outlines the concepts theoretical as well as practical examples<br>•Designed, developed and implemented the GISMed website by using CMS Joomla,PHP,  MySQL to allow the customers to check the catalog and the schedules of training and to do registration online which reduced the waiting by an estimated 60% with the first 3 month in effect<br>•Consulted the new customers to purchase the ArcGIS products by showing them  the different tools and suggested them the best license related to their sector of work  in order to  reduce the waste of time by 95%  and to have a satisfaction of 97%<br>"
     }, {
         "employer": "LigSoft",
         "location": "Algiers, Algeria",
         "title": "Computer Science Engineer",
         "date": "January 2009- January 2010",
         "description": "•Redesigned a new version of ANBT mobile application by adding more options to the users by making it more specific and increasing the users from 5 to 48 <br>•Designed, developed, and implemented a chart graphic module in order to present the data by using C# and Microsoft SQL Server, it helps the users to take decisions about  the exploitation of water, and reducing the lost  by 75% <br>"
     }]
 };

 work.display = function() {
     $("#workExperience").append(HTMLworkStart);
     for (var job = 0; job < work.jobs.length; job++) {
         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
         var formattedEmployerTitle = formattedEmployer + formattedTitle;
         $(".work-entry:last").append(formattedEmployerTitle);
         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
         $(".work-entry:last").append(formattedDates);
         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
         $(".work-entry:last").append(formattedDescription);

     }

 };
 work.display();

 var projects = {
     "projects": [{
         "title": "Building a Portfolio Site",
         "dates": "2015",
         "description": "designed mockup with HTML and CSS,I developed a responsive website that displayed images, descriptions and links.",
         "images": [
             "images/project1.jpg",
             "images/project2.jpg",
         ]
     }]

 };

 projects.display = function() {
     $("#projects").append(HTMLprojectStart);
     for (var project = 0; project < projects.projects.length; project++) {
         if (projects.projects.hasOwnProperty(project)) {
             var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
             $(".project-entry:last").append(formattedTitle);
             var formatteddate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
             $(".project-entry:last").append(formatteddate);
             var formatteddescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
             $(".project-entry:last").append(formatteddescription);
             if (projects.projects[project].images.length > 0) {
                 for (var i = 0; i < projects.projects[project].images.length; i++) {
                     var formattedimage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
                     $(".project-entry:last").append(formattedimage);
                 }
             }
         }
     }
 };

 projects.display();

 function inName(name) {
     console.log(name);
     var newName = name;
     newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

     return newName;
 }

 function locationizer(work_obj) {
     var locationArray = [];
     for (var job = 0; job < work_obj.jobs.length; job++) {
         if (work_obj.jobs.hasOwnProperty(job)) {
             var newlocation = work_obj.jobs[job].location;
             locationArray.push(newlocation);
         }
     }
     return locationArray;
 }

 $("#mapDiv").append(googleMap);