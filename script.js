let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if (inputNumber.Value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber, maxLength);
    };
});


// search job

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();
    const resultsDiv = document.getElementById('results');

    const jobs = [
        { title: 'senior web devloper', company: 'IT Infosys co.', location: 'mumbai, india' },
        { title: 'Project Manager', company: 'Business Inc', location: 'San Francisco', description: 'Manage projects from start to finish.' },
        { title: 'Data Scientist', company: 'Data Solutions', location: 'Chicago', description: 'Analyze and interpret complex data.' },
        { title: 'Web Developer', company: 'WebWorks', location: 'Los Angeles', description: 'Build and maintain websites.' },
        { title: 'UX Designer', company: 'Creative Agency', location: 'New York', description: 'Design user-friendly interfaces.' }
    ];

    const filteredJobs = jobs.filter(job =>
        job.title.toUpperCase().includes(title) && job.location.toLowerCase().includes(location)
    );

    resultsDiv.innerHTML = '';
    if (filteredJobs.length > 0) {
        filteredJobs.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('job');
            jobDiv.innerHTML = `
             <h3>${job.title}</h3>
             <p><span>${job.location}</span></p>
            `
                // <h3>${job.title}</h3>
                // <p>${job.company}</p>
                // <p>${job.location}</p>

                ;
            resultsDiv.appendChild(jobDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No jobs found.</p>';
    }
});





// document.getElementById('searchForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     //get the input value
//     var titleinput = document.getElementById('title').value.toLowerCase();
//     var locationinput = document.getElementById('location').value.toLowerCase();

//     //get all job boxes
//     var jobBoxes = document.querySelectorAll('.jobs-container .box');

//     jobBoxes.forEach(function (box) {
//         var jobTitle = box.querySelector('.job-title').textContent.toLowerCase();
//         var jobLocation = box.querySelector('.location span').textContent.toLowerCase();

//         // check if the job title and location match
//         if (jobTitle.includes(titleinput) && jobLocation.includes(locationinput)) {
//             box.style.display = 'block';  //show the job box
//         } else {
//             box.style.display = 'none';  //hide the job box
//         }

//     });
// });














// function search() {
//     let filter = document.getElementById('searchForm').value.toUpperCase();
//     let jobs = document.querySelectorAll('.jobs-container .box');

//     let t = document.getElementsByTagName('h3');
//     let l = document.getElementsByTagName('p');

//     for (let i = 0; i <= t.length; i++) {
//         let a = item[i].getElementsByTagName('h3', 'p')[0];
//         let value = a[i].textContent || a[i].innerText || a[i].innerHTML;

//         if (value.toUpperCase().indexOf(filter) > -1) {
//             item[i].style.display = "";
//         } else {
//             item[i].style.display = "none";
//         }
//     }

// }
