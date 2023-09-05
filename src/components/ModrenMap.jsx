import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Teamcard } from './Ifcondition'

const ModrenMap = () => {
    return (
        <>
            <Container>
                <Row>
                    {Teamcard.map((data) => {
                        return (
                            <Col lg={4} md={6} className='mt-lg-0 mt-5'>
                                <div className='teamCard'>
                                    <div>
                                        <img className='w-100' src={data.img} alt="" />
                                    </div>
                                    <div className='d-flex align-items-center pt-3 ps-3'>
                                        <img src={data.imgg} alt="" />
                                        <h1 className='m-0 ps-3 ff_poppins fs_md fw-bold'>{data.heading}</h1>
                                    </div>
                                        <p className='m-0 px-3 ff_poppins fs_sm fw-semibold pt-3'>{data.peragraph}</p>
                                    <button className='m-0 ms-3 btn my-3'>
                                        <p className='m-0 ff_poppins fs_xsm fw-normal'>{data.link}</p>
                                    </button>
                                </div>
                            </Col>
                        )
                    }
                    )}
                </Row>
            </Container>
        </>
    )
}

export default ModrenMap