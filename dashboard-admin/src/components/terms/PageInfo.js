import Industry from './Industry';
import Meeting from './Meeting';
import React from 'react';
import invision from '../../assets/images/logo-invision.svg'
import slack from '../../assets/images/logo-slack.svg'
import styled from 'styled-components';

const industry = [
    {
        id: 1,
        name: 'دیجیتال مارکتینگ',
        design: 'تیم مارکتینگ'
    },
    {
        id: 2,
        name: 'طراحی',
        design: 'تیم طراحی'
    }
];

const meeting = [
    {
        id: 1,
        logo: slack ,
        name: 'Slack Meet',
        text: 'شما یک جلسه برای برنامه ریزی بازاریابی دارید',
        time: '11:00 AM',
        code: '902-128-281'
    },
    {
        id: 2,
        logo: invision ,
        name: 'Invision',
        text: ' در ساعت 5 بعد از ظهر یک تماس ویدیویی برای طراحی نرم افزار دارید.',
        time: '4:45 PM',
        code: '111-968-981'
    }
]
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 992px) {
        width: 30%;
    }
`

const PageInfo = () => {
    return (
        <Info>
            {
                industry.map(item => 
                    <Industry key={item.id} {...item}/>
                )
            }
            {
                meeting.map(meet => 
                    <Meeting key={meet.id} {...meet}/>
                )
            }
        </Info>
    );
};

export default PageInfo;