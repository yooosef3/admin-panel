import CompaniesTable from './CompaniesTable';
import DoneProjects from './DoneProjects';
import React from 'react';
import styled from 'styled-components';

const Project = styled.div`
	overflow: auto;
    margin-top: 20px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    @media (min-width: 1450px) {
        overflow: hidden;
    }
`
const Projects = () => {
    return (
        <Project>
            <DoneProjects />
            <CompaniesTable/>
        </Project>
    );
};

export default Projects;