/* eslint react/jsx-filename-extension:0 */
import React from 'react';
import { Button } from '@material-ui/core';

var listcat = []; //to store list of categories
var lists = [];
class CategoryCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category_list: []
        }
        this.showCollection=this.showCollection.bind(this);
    }

    componentDidMount() {
        listcat = [];
        for (var i = 0; i < localStorage.length; i++) {
            let v = i;
            listcat.push(
                <Button key={v} onClick={() => this.showCollection(localStorage.key(v))}>
                    {localStorage.key(v)}
                </Button>
            )
        }
        this.setState({ // to re-render the component

        });
    }
    showCollection = (keyValue) => {
        lists = [];
        this.state.category_list = [];
        this.state.category_list.push(localStorage.getItem(keyValue).split(','));
        for (var i = 0; i < this.state.category_list[0].length; i++) {
            let v = i;
            if (localStorage.key(i) != "loglevel:webpack-dev-server") {
                lists.push(
                    <div key={v}>{this.state.category_list[0][v]}</div>
                );
            }
        }

        this.setState({ // to re-render the component

        });
    }

    render() {
        const category_list = this.state.category_list;
        return (
            <div>
                <div>{listcat.map(data => data)}</div>
                <div>{lists.map(data => data)}</div>
            </div>
        )
    }
}

export default CategoryCollection;