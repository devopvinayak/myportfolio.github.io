const btn = document.querySelector("button");
const icon = document.querySelector(".icons");
const icon1 = document.getElementById("#linkdein");

const skills = document.querySelector(".skills");

document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript interactivity here
    console.log('Welcome to my portfolio website!');
});

btn.addEventListener('click' , function(){
    alert("Downloading CV please wait");
    const link = document.createElement('a');
    link.href = 'Resume.docx';
    document.body.appendChild(link);
    link.click();
    
});

icon.addEventListener('click', function (){
    const link = document.createElement('a');
    link.href = 'https://www.instagram.com/__vinayak__desai__96k?igsh=cGVxaGNzOWV4NXZw';
    document.body.appendChild(link);
    link.click();
});

icon1.addEventListener('click', function (){
    const link = document.createElement('a');
    link.href = 'https://www.linkedin.com/in/vinayak-desai-77153729a/';
    document.body.appendChild(link);
    link.click();
});

skills.addEventListener('click', function(){
    document.createElement('p');
    document.parentElement.innerText="HTML , CSS, JavaScript , ReactJs";
    console.log("Here are the skills");
});
