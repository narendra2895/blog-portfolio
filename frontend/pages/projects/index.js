// ProjectsPage.js

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const ProjectsPage = () => {
  // Define your projects data here
  const projectsData = [
    { name: 'Calculator', path: '/projects/calculator' }, // Corrected path
    { name: 'Calculator', path: '/projects/calculator' }, // Corrected path
    { name: 'Calculator', path: '/projects/calculator' }, // Corrected path
    { name: 'Calculator', path: '/projects/calculator' }, // Corrected path
    { name: 'Calculator', path: '/projects/calculator' }, // Corrected path
    // { name: 'Project 2', path: '/projects/project2' },
    // Add more projects as needed
  ];

  return (
    <div className="container flex flex-col gap-10 xl:pt-40 items-center xl:items-start pt-0  mx-auto h-full">

      <h1 className='h1'> Here is a list of my <span className='text-accent'>Projects</span></h1>
      <ul className='content'>
        {projectsData.map((project, index) => (
          <li className='' key={index}>
            {/* Use Link component to create navigation */}
            <Link href={project.path}>
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
