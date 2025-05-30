const content = {
    overview: `
      <h1>Overview</h1>
      <hr>
      <ul style="list-style-type: '🔹 '; padding-left: 1em;">
        <li>I'm a High School Student with over 3 years of experience in various coding and web development technologies.</li>
        <li>Currently going into The College of New Jersey to acquire my Bachelor Computer Science Degree, I'm all about learning code and software to make a difference.</li>
        <li>I have worked in many team situations before and worked on websites that have real use within my school community.</li>
        <li>I enjoy automating workflows, optimizing code, and turning complex challenges into real results.</li>
        <li>I'm always curious and constantly excited to continue learning.</li>
      </ul>
    `,
    education: `
      <h1>Education</h1>
      <hr>
      <ul style="list-style-type: '🔹 '; padding-left: 1em;">
        <li>Graduated from Marlboro High School in 2025.</li>
        <li>Attending The College of New Jersey (Class of 2029) majoring in Computer Science.</li>
        <li>Completed multiple AP courses in STEM areas and participated in coding web design based internship.</li>
        <li>Educated in HTML, CSS, JavaScript, and Java through courses in High School.</li>
      </ul>
    `,
    goals: `
      <h1>Goals</h1>
      <hr>
      <ul style="list-style-type: '🔹 '; padding-left: 1em;">
        <li>Graduate with a strong GPA and real-world coding experience.</li>
        <li>Intern at a top tech company to learn professional software development practices.</li>
        <li>Contribute to open-source projects and grow my GitHub portfolio.</li>
        <li>Build applications that solve real problems in my community and beyond.</li>
        <li>Never stop learning and improving as a programmer and problem solver.</li>
      </ul>
    `
};

document.querySelectorAll('input[name="btnradio"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        const contentBox = document.getElementById('infoContent');
        if (radio.id === 'btnradio1') {
            contentBox.innerHTML = content.overview;
        } else if (radio.id === 'btnradio2') {
            contentBox.innerHTML = content.education;
        } else if (radio.id === 'btnradio3') {
            contentBox.innerHTML = content.goals;
        }
    });
});