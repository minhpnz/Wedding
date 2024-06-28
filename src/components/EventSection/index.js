import React from 'react'
import SectionTitle from '../SectionTitle'
import sImg1 from '../../images/moments/8.jpg'
import sImg2 from '../../images/moments/9.jpg'
import sImg3 from '../../images/moments/7.jpg'
import LocationMap from '../Modal'


const Events = [
    {
        Simg: sImg1,
        title:'Lễ cưới nhà gái',
        li1:'Thứ 3, Ngày 9 Tháng 7, 2024 11:00 Trưa',
        li2:'132 Lê Duẩn, Khe Sanh, Hướng Hoá - Trung tâm hội nghỉ thiệp cưới Aladdin',
    },
    {
        Simg: sImg2,
        title:'Lễ cưới nhà trai',
        li1:'Thứ 7, Ngày 27 Tháng 7, 2024 05:00 Chiều',
        li2:'489 An Dương Vương, Nguyễn Văn Cừ, Thành phố Quy Nhơn - Nhà hàng tiệc cưới Hải Âu',
    },
    // {
    //     Simg: sImg3,
    //     title:'Wedding Party',
    //     li1:'Monday, 25 Sep, 2022 1:00 PM – 4:30 PM',
    //     li2:'Estern Star Plaza, Road 123, USA',
    // },

]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="events">
            <div className="container">
                <SectionTitle MainTitle={'TIME AND PLACE'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-img" style={{"display":"flex","justify-content":"center","align-item":"center"}}>
                                        <img src={event.Simg} alt=""/>
                                    </div>
                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            {/* <li><LocationMap/></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;