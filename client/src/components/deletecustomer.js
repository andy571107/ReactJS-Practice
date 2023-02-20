import React from 'react';

class DeleteCustomer extends React.Component {

    deleteCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, {
           method: 'DELETE' 
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(event) => {this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }
}

export default DeleteCustomer;