import Projects from './Projects';
import React from 'react';
import Review from './Review';
import styled from 'styled-components';

const Prew = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 992px) {
        flex-direction: row;
    }
`
const ProjectReview = () => {
    return (
        <Prew>
            <Projects />
            <Review />
        </Prew>
    );
};

export default ProjectReview;