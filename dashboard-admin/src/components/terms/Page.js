import PageInfo from './PageInfo';
import Post from './Post';
import React from 'react';
import styled from 'styled-components';

const Pag = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;
    @media (min-width: 992px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const Page = () => {
    return (
        <Pag>
            <Post />
            <PageInfo />
        </Pag>
    );
};

export default Page;