import React, { Component } from 'react';
import PropTypes from 'prop-types';


class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: null
        }
    }

    doSomething(i){
        this.setState({value: i})
    }

    render(){
        const { data } = this.props    
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>                    
                    {data.map(({_id, title, author}) => {
                        return <tr key={_id}>
                            <td>{_id}</td>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td></td>
                        </tr>
                    })}                    
                </tbody>
            </table>         
        )
    }
}
export default List;