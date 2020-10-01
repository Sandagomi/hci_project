import React from 'react';
import MCardView from './MemberCardView';
import faker from 'faker';
import '../css/Members.css';


const Members = () => {



    return (
        <div className="main_member_container">
            <MCardView img={faker.image.avatar()} name={faker.name.firstName()} year="2011" f_count="32" sentence={faker.lorem.sentence()}/>
            <MCardView img={faker.image.avatar()} name={faker.name.firstName()} year="2012" f_count="42" sentence={faker.lorem.sentence()}/>
            <MCardView img={faker.image.avatar()} name={faker.name.firstName()} year="2013" f_count="30" sentence={faker.lorem.sentence()}/>
            <MCardView img={faker.image.avatar()} name={faker.name.firstName()} year="2014" f_count="52" sentence={faker.lorem.sentence()}/>
            <MCardView img={faker.image.avatar()} name={faker.name.firstName()} year="2015" f_count="62" sentence={faker.lorem.sentence()}/>
            <MCardView img={faker.image.avatar()} name={faker.name.firstName()} year="2016" f_count="22" sentence={faker.lorem.sentence()}/>
        </div>
    )

}
export default Members;