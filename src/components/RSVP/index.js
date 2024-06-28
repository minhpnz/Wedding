import React, { Component,useRef } from 'react'
import SectionTitle from '../../components/SectionTitle'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import vec1 from '../../images/contact/1.png'
import vec2 from '../../images/contact/2.png'
import emailjs from '@emailjs/browser';
class RSVP extends Component {
    

    state = {
        name: '',
        email: '',
        address: '',
        meal: '',
        service: '',
        guest: '',
        cango: '',
        error: {},
        show:false,
        click:false,
        showerr:false
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
        // if (guest === '') {
        //     error.guest = "Hãy chọn số người đi cùng";
        // }
        if (cango === '' || cango === 'Xác nhận tham dự') {
            error.cango = "Vui lòng xác nhận có tham dự hay không";
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
        if (name !== '' && email !== '' && cango !== '') {
            if (cango === 'Không thể tham gia'){
                emailjs
                .send('service_5afkz74', 'template_7m7fqzc',{
                    name: name,
                    email: email,
                    guest: 0,
                    cango:cango
                }
                ,{publicKey: '8MLY0451tzcETr5fS'})
                .then(
                    () => {
                        this.setState({show:true})
                    },
                    (error) => {
                        this.setState({showerr:true})
                    },
                );
            }
            else{
                emailjs
                .send('service_5afkz74', 'template_7m7fqzc',{
                    name: name,
                    email: email,
                    guest: guest,
                    cango:cango
                }
                ,{publicKey: '8MLY0451tzcETr5fS'})
                .then(
                    () => {
                        this.setState({show:true})
                    },
                    (error) => {
                        this.setState({showerr:true})
                    },
                );
            }
            
            this.setState({
            click:true})

            
            
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
                                            <option>Số người (Không điền nếu không đi)</option>
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
                                            <button type="submit" className="theme-btn-s3" disabled={this.state.click}>Send Message</button>
                                        </div>
                                    </div>
                                    {/* <Button variant="primary" onClick={() => this.setState({ show: true })}>
                                        Launch demo modal 
                                    </Button> */}
                                    <Modal show={this.state.show} onHide={() => this.setState({ show:false })} style={{top: "35%"}}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cảm ơn bạn</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Hẹn gặp lại bạn</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => this.setState({ show: !this.state.show, click: false })} >
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <Modal show={this.state.showerr} onHide={() => this.setState({ showerr:false })} style={{top: "35%"}}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Có lỗi rồi</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Liên hệ với cô dâu để sửa</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => this.setState({ showerr: !this.state.showerr, click: false })} >
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
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