import React from 'react';
import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    Form
} from 'reactstrap';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import _get from 'lodash/get';
import {bindActionCreators} from 'redux';
import ReduxInput from '../../components/ReduxInput';
import {searchItems, updateSearchResult} from '../../actions/searchActions';
import SearchResults from '../SearchResults';
import queryString from 'query-string';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'


class Search extends React.Component {

    componentDidMount = () => {
        let params = queryString.parse(this.props.location.search)
        if (params.all) {
            this.props.searchItems()
        } else {
            this.props.updateSearchResult()
        }
    }

    handleClick = async (e) => {
        e.preventDefault();

        const search = this.props.searchForm.search;

        await this.props.searchItems(search)
    }

    createTicket = () => {
        this.props.history.push('/create')
    }

    render() {
        let searchResults = this.props.searchResults;
        searchResults =  [
            {
                id: '232',
                checkNo: 'Check# 1111213',
                account: '637846598230',
                amount: '$10.00',
                eob: 'Yes',
                date: '4 Dec 2018'
            }, {
                id: '452',
                checkNo: 'Check# 3278964',
                account: '637846598230',
                amount: '$790.00',
                eob: 'No',
                date: '8 Dec 2018'
            }
        ]
        return (<Card>
            <CardBody>
                <Form>
                <Row>
                </Row>

                    <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>


                        <Col style={{
                            marginTop: 10,
                            marginLeft: 0

                        }}>
                            <Button color={'primary'} onClick={this.createTicket}>Create Ticket</Button>
                        </Col>
                    </Row>

                </Form>
                {searchResults && <SearchResults items={searchResults}/>}
            </CardBody>
        </Card>)
    }
}

Search = reduxForm({form: 'searchForm'})(Search)

const mapStateToProps = state => {
    return {
        searchForm: _get(state, 'form.searchForm.values', {}),
        searchResults: _get(state, 'search.searchResults'),
        appBusy: _get(state, 'app.appBusy', false)
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    searchItems,
    updateSearchResult
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
