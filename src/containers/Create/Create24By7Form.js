import React from 'react';
import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
    Input,
    Alert
} from 'reactstrap';
import {  FormGroup, Label} from 'reactstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import ReduxInput from '../../components/ReduxInput';
import ReduxSelect from '../../components/ReduxSelect';
import _get from 'lodash/get';
import {createTwentyFourSeven} from '../../actions/searchActions';

class Create24By7Form extends React.Component {

    state = {
        success: false
    }

    handleClick = async (e) => {
        e.preventDefault();
        const payload = this.props.createSibelForm
        const response = await this.props.createTwentyFourSeven(payload);
        console.log('response :::: ', response);
        if (response.id) {
            this.setState({success: true})
        }
    }
    render() {
        const eobList = [
            {
                name: 'Yes',
                id: 'yes'
            }, {
                name: 'No',
                id: 'no'
            }
        ]
        return (<div >
            <Card>
                <CardBody>
                    <h2 className={'text-center'}>Complete Ticket and Submit to Change Health Care Support</h2>
                    <Col sm={4}></Col>
                    <Row>
                        {
                            this.state.success
                                ? <Col sm={12} style={{
                                            marginTop: 25,
                                            marginLeft:300
                                        }}>
                                        <Alert color="success">
                                            Case is submitted successfully
                                        </Alert>
                                    </Col>
                                : <Col sm={4} style={{
                                    marginTop: 25,
                                    marginLeft:300
                                }}>
                                        <Row>
                                        <ReduxSelect size={12} name={'Product'} items={eobList} placeholder={'Product'} label={'Product'}/>
                                        <ReduxSelect size={12} name={'Category'} items={eobList} placeholder={'Category'} label={'Category'}/>
                                        <ReduxSelect size={12} name={'SubCategory'} items={eobList} placeholder={'SubCategory'} label={'SubCategory'}/>
                                        <ReduxInput type= "text" size={12} name={'comment'} label={'Description'}/>
                                            <Col sm={12} style={{
                                                    paddingRight: 5,
                                                    paddingLeft: 5
                                                }}>
                                                <Input style={{
                                                    }} type="file" name={'accountId'} label={'Account Id'}/>
                                            </Col>

                                            <Col sm={12}>
                                                <Button disabled={this.props.appBusy} block={true} color={'primary'} style={{
                                                        marginTop: 15,
                                                        maxWidth: 200,
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto'
                                                    }} onClick={this.handleClick}>
                                                    {
                                                        this.props.appBusy
                                                            ? 'Creating...'
                                                            : 'CREATE'
                                                    }
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                        }
                    </Row>
                </CardBody>
            </Card>
        </div>)
    }
}
Create24By7Form = reduxForm({form: 'create24By7Form'})(Create24By7Form)
const mapStateToProps = state => {
    return {
        createSibelForm: _get(state, 'form.create24By7Form.values', {}),
        appBusy: _get(state, 'app.appBusy', false)
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({
    createTwentyFourSeven
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Create24By7Form);
