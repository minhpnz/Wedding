import React from 'react'
import {Link} from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle'
import blogs from '../../api/blogs'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className={`wpo-blog-section section-padding ${props.blogClass}`}>
            <div className="container">
                <SectionTitle topTitle={'News'} MainTitle={'Sự hiện diện của bạn là vinh hạnh của chúng tôi'}/>
            </div> 
        </section>
    )
}

export default BlogSection;