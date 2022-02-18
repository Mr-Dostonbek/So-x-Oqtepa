import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

const MarkaziyApparat = () => {
    return (
        <div>
            <section className='text-section rah-section'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='title-name'>
                                <h3>Markaziy aparat</h3>
                                <div className='text-title-line'></div>
                            </div>
                        </div>
                    </div>
                    <div className='row pl-3 pr-3'>
                        <div className='col rah-card'>

                            <Card style={{ width: '100%', marginTop: "20px" }}>
                                <Row className='no-gutters'>
                                    <Col md={3} lg={3} className="text-center" >
                                        <Card.Img variant="top" width="100%" src="/img/rah1.png" />
                                        <Card.Title className='mt-2 mb-2'>Xamrayev Shavkat Raximovich</Card.Title>
                                    </Col>
                                    <Col>
                                        <Card.Body style={{ paddingBottom: "50px" }}>
                                            <div>
                                                <Table striped bordered hover>
                                                    <tbody>
                                                        <tr>
                                                            <td>Lavozimi:</td>
                                                            <td>Vazir</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Qo’l tel:</td>
                                                            <td>+998 90 000 00 00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>E-mail:</td>
                                                            <td>Vazir@mail.com</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <TabsUnstyled>
                                                <TabsListUnstyled defaultValue={0} className='w-100 text-center mt-5 pt-5'>
                                                    <TabUnstyled className="btn btn-primary w-25 mr-5 d-none">Biografiya</TabUnstyled>
                                                    <TabUnstyled className="btn btn-primary w-25 mr-5">Biografiya</TabUnstyled>
                                                    <TabUnstyled className="btn btn-primary w-25">Nizom</TabUnstyled>
                                                </TabsListUnstyled>
                                                <TabPanelUnstyled value={0}> </TabPanelUnstyled>
                                                <TabPanelUnstyled className='rah-text' value={1}>
                                                    <h5>Biografiya</h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium in turpis imperdiet ut tortor et consectetur a pellentesque. Ut fermentum ultricies amet volutpat dignissim dignissim semper dignissim. Quis hendrerit tempus velit interdum tincidunt nulla nec. Viverra pretium convallis massa gravida tellus malesuada. Ut ac nunc
                                                    </p>
                                                </TabPanelUnstyled>
                                                <TabPanelUnstyled className='rah-text' value={2}>
                                                    <h5>Nizom</h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium in turpis imperdiet ut tortor et consectetur a pellentesque. Ut fermentum ultricies amet volutpat dignissim dignissim semper dignissim. Quis hendrerit tempus velit interdum tincidunt nulla nec. Viverra pretium convallis massa gravida tellus malesuada. Ut ac nunc
                                                    </p>
                                                </TabPanelUnstyled>
                                            </TabsUnstyled>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card style={{ width: '100%', marginTop: "20px" }}>
                                <Row className='no-gutters'>
                                    <Col md={3} lg={3} className="text-center" >
                                        <Card.Img variant="top" width="100%" src="/img/rah1.png" />
                                        <Card.Title className='mt-2 mb-2'>Xamrayev Shavkat Raximovich</Card.Title>
                                    </Col>
                                    <Col>
                                        <Card.Body style={{ paddingBottom: "50px" }}>
                                            <div>
                                                <Table striped bordered hover>
                                                    <tbody>
                                                        <tr>
                                                            <td>Lavozimi:</td>
                                                            <td>Vazir</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Qo’l tel:</td>
                                                            <td>+998 90 000 00 00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>E-mail:</td>
                                                            <td>Vazir@mail.com</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <TabsUnstyled>
                                                <TabsListUnstyled defaultValue={0} className='w-100 text-center mt-5 pt-5'>
                                                    <TabUnstyled className="btn btn-primary w-25 mr-5 d-none">Biografiya</TabUnstyled>
                                                    <TabUnstyled className="btn btn-primary w-25 mr-5">Biografiya</TabUnstyled>
                                                    <TabUnstyled className="btn btn-primary w-25">Nizom</TabUnstyled>
                                                </TabsListUnstyled>
                                                <TabPanelUnstyled value={0}> </TabPanelUnstyled>
                                                <TabPanelUnstyled className='rah-text' value={1}>
                                                    <h5>Biografiya</h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium in turpis imperdiet ut tortor et consectetur a pellentesque. Ut fermentum ultricies amet volutpat dignissim dignissim semper dignissim. Quis hendrerit tempus velit interdum tincidunt nulla nec. Viverra pretium convallis massa gravida tellus malesuada. Ut ac nunc
                                                    </p>
                                                </TabPanelUnstyled>
                                                <TabPanelUnstyled className='rah-text' value={2}>
                                                    <h5>Nizom</h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium in turpis imperdiet ut tortor et consectetur a pellentesque. Ut fermentum ultricies amet volutpat dignissim dignissim semper dignissim. Quis hendrerit tempus velit interdum tincidunt nulla nec. Viverra pretium convallis massa gravida tellus malesuada. Ut ac nunc
                                                    </p>
                                                </TabPanelUnstyled>
                                            </TabsUnstyled>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card style={{ width: '100%', marginTop: "20px" }}>
                                <Row className='no-gutters'>
                                    <Col md={3} lg={3} className="text-center" >
                                        <Card.Img variant="top" width="100%" src="/img/rah1.png" />
                                        <Card.Title className='mt-2 mb-2'>Xamrayev Shavkat Raximovich</Card.Title>
                                    </Col>
                                    <Col>
                                        <Card.Body style={{ paddingBottom: "50px" }}>
                                            <div>
                                                <Table striped bordered hover>
                                                    <tbody>
                                                        <tr>
                                                            <td>Lavozimi:</td>
                                                            <td>Vazir</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Qo’l tel:</td>
                                                            <td>+998 90 000 00 00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>E-mail:</td>
                                                            <td>Vazir@mail.com</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <TabsUnstyled>
                                                <TabsListUnstyled defaultValue={0} className='w-100 text-center mt-5 pt-5'>
                                                    <TabUnstyled className="btn btn-primary w-25 mr-5 d-none">Biografiya</TabUnstyled>
                                                    <TabUnstyled className="btn btn-primary w-25 mr-5">Biografiya</TabUnstyled>
                                                    <TabUnstyled className="btn btn-primary w-25">Nizom</TabUnstyled>
                                                </TabsListUnstyled>
                                                <TabPanelUnstyled value={0}> </TabPanelUnstyled>
                                                <TabPanelUnstyled className='rah-text' value={1}>
                                                    <h5>Biografiya</h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium in turpis imperdiet ut tortor et consectetur a pellentesque. Ut fermentum ultricies amet volutpat dignissim dignissim semper dignissim. Quis hendrerit tempus velit interdum tincidunt nulla nec. Viverra pretium convallis massa gravida tellus malesuada. Ut ac nunc
                                                    </p>
                                                </TabPanelUnstyled>
                                                <TabPanelUnstyled className='rah-text' value={2}>
                                                    <h5>Nizom</h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium in turpis imperdiet ut tortor et consectetur a pellentesque. Ut fermentum ultricies amet volutpat dignissim dignissim semper dignissim. Quis hendrerit tempus velit interdum tincidunt nulla nec. Viverra pretium convallis massa gravida tellus malesuada. Ut ac nunc
                                                    </p>
                                                </TabPanelUnstyled>
                                            </TabsUnstyled>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card style={{ width: '100%', marginTop: "20px" }}>
                                <Row className='no-gutters'>
                                    <Col md={3} lg={3} className="text-center" >
                                        <Card.Img variant="top" width="100%" src="/img/rah1.png" />
                                        <Card.Title className='mt-2 mb-2'>Xamrayev Shavkat Raximovich</Card.Title>
                                    </Col>
                                    <Col>
                                        <Card.Body style={{ paddingBottom: "50px" }}>
                                            <div>
                                                <Table striped bordered hover>
                                                    <tbody>
                                                        <tr>
                                                            <td>Lavozimi:</td>
                                                            <td>Vazir</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Qo’l tel:</td>
                                                            <td>+998 90 000 00 00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>E-mail:</td>
                                                            <td>Vazir@mail.com</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <TabsUnstyled>
                                                <TabsListUnstyled defaultValue={0} className='w-100 text-center mt-5 pt-5'>
                                                    <TabUnstyled className="btn btn-primary w-25 mr-5 d-none">Biografiya</TabUnstyled>
                                                    <TabUnstyled className="btn btn-primary w-25 mr-5">Biografiya</TabUnstyled>
                                                    <TabUnstyled className="btn btn-primary w-25">Nizom</TabUnstyled>
                                                </TabsListUnstyled>
                                                <TabPanelUnstyled value={0}> </TabPanelUnstyled>
                                                <TabPanelUnstyled className='rah-text' value={1}>
                                                    <h5>Biografiya</h5>
                                                    <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium in turpis imperdiet ut tortor et consectetur a pellentesque. Ut fermentum ultricies amet volutpat dignissim dignissim semper dignissim. Quis hendrerit tempus velit interdum tincidunt nulla nec. Viverra pretium convallis massa gravida tellus malesuada. Ut ac nunc
                                                    </p>
                                                </TabPanelUnstyled>
                                                <TabPanelUnstyled className='rah-text' value={2}>
                                                <h5>Nizom</h5>
                                                    <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium in turpis imperdiet ut tortor et consectetur a pellentesque. Ut fermentum ultricies amet volutpat dignissim dignissim semper dignissim. Quis hendrerit tempus velit interdum tincidunt nulla nec. Viverra pretium convallis massa gravida tellus malesuada. Ut ac nunc
                                                    </p>
                                                </TabPanelUnstyled>
                                            </TabsUnstyled>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MarkaziyApparat;
