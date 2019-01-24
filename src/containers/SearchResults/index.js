import React from 'react';
import {Table} from 'reactstrap';

function RenderLoadHead() {
    return (<thead>
        <tr>
            <th>Ticket#</th>
            <th>Product</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Status</th>
        </tr>
    </thead>)
}

function RenderLoadBodyItems({
    item = {}
}) {
    return (<tr>
        <td>{item.id}</td>
        <td>{item.checkNo}</td>
        <td>{item.account}</td>
        <td>{item.amount}</td>
        <td>{item.eob}</td>
    </tr>)
}

class SearchResults extends React.Component {
    render() {
        return (<Table responsive="responsive" style={{
            marginTop: 10,
            marginLeft: 0
        }}>
            <RenderLoadHead/>
            <tbody>
                {this.props.items && this.props.items.map((item, i) => <RenderLoadBodyItems key={i} item={item}/>)}
            </tbody>
        </Table>)
    }
}

export default SearchResults;
