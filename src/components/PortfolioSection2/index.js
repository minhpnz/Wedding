import React from 'react'
import SectionTitle from '../SectionTitle'
import pImg1 from '../../images/couple/couple-1.jpeg'
import pImg2 from '../../images/couple/couple-1.jpeg'
import pImg3 from '../../images/couple/couple-1.jpeg'
import pImg4 from '../../images/couple/couple-1.jpeg'
import pImg5 from '../../images/couple/couple-1.jpeg'
import pImg6 from '../../images/couple/couple-1.jpeg'
import pImg7 from '../../images/couple/couple-1.jpeg'
import pImg8 from '../../images/couple/couple-1.jpeg'
import pImg9 from '../../images/couple/couple-1.jpeg'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


const Portfolios = [
    {
        Pimg:pImg1,
    },
    {
        Pimg:pImg2,
    },
    {
        Pimg:pImg3,
    },
    {
        Pimg:pImg4,
    },
    {
        Pimg:pImg5,
    },
    {
        Pimg:pImg6,
    },
    {
        Pimg:pImg7,
    },
    {
        Pimg:pImg8,
    },
    {
        Pimg:pImg9,
    },
] 

const PortfolioSection2 = (props) => {
    return(
        <section className={`wpo-portfolio-section section-padding ${props.pClass}`} id="gallery">
            <div className="container">
                <SectionTitle MainTitle={'Captured Moments'}/>
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Portfolios.map((portfolio, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <img src={portfolio.Pimg}></img>
                                            {/* <ReactFancyBox
                                                thumbnail={portfolio.Pimg}
                                                image={portfolio.Pimg}
                                                /> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection2;