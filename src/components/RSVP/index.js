import React, { Component } from 'react'
import SectionTitle from '../../components/SectionTitle'

import vec1 from '../../images/contact/1.png'
import vec2 from '../../images/contact/2.png'

class RSVP extends Component {


    state = {
        name: '',
        email: '',
        address: '',
        meal: '',
        service: '',
        guest: '',
        cango: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            address,
            service,
            cango,
            guest, error } = this.state;

        if (name === '') {
            error.name = "Hãy điền tên";
        }
        if (email === '') {
            error.email = "Hãy điền lời chúc";
        }
        if (guest === '') {
            error.guest = "Hãy chọn số người đi cùng";
        }
        if (cango === '') {
            error.cango = "Vui lòng xác nhận tham dự";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.service === '' && error.address === '' && error.meal === '' && error.guest === '') {
            this.setState({
                name: '',
                email: '',
                address: '',
                meal: '',
                guest: '',
                cango: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            address,
            service,
            guest,
            meal,
            cango,
            error } = this.state;

        return(
            <section className={`wpo-contact-section ${this.props.pt}`} id="RSVP">
                <div className="container">
                    <div className="wpo-contact-section-wrapper">
                        <div className="wpo-contact-form-area">
                            <SectionTitle MainTitle={'Mời bạn chung vui'}/>
                            <form onSubmit={this.subimtHandler} className="form">
                                <div className="row">
                                    <div>
                                        <div className="form-field">
                                            <input value={name} onChange={this.changeHandler} className="form-control" type="text" name="name" placeholder="Họ và Tên"/>
                                            <p>{error.name ? error.name : ''}</p>
                                        </div>
                                    </div>
            
                                    <div>
                                        <div className="form-field">
                                            <input onChange={this.changeHandler} value={email} type="text" className="form-control" name="email" placeholder="Lời chúc cho Cô Dâu/Chú Rễ"/>
                                            <p>{error.email ? error.email : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <select name="guest" className="form-control" value={guest} onChange={this.changeHandler}>
                                            <option>Số người</option>
                                            <option>0</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </select>
                                        <p>{error.guest ? error.guest : ''}</p>
                                    </div>
                                    <div>
                                        <select name="cango" className="form-control" value={cango} onChange={this.changeHandler}>
                                            <option>Xác nhận tham dự</option>
                                            <option>Tham dự ở Hướng Hóa</option>
                                            <option>Tham dự ở Quy Nhơn</option>
                                            <option>Không thể tham gia</option>
                                        </select>
                                        <p>{error.cango ? error.cango : ''}</p>
                                    </div>
                                    <div className="submit-area">
                                        <div className="form-submit">
                                            <button type="submit" className="theme-btn-s3">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="border-style"></div>
                        </div>
                        <div className="vector-1">
                            <img src={vec1} alt=""/>
                        </div>
                        <div className="vector-2">
                            <img src={vec2} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default  RSVP;