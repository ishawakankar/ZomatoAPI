/* eslint react/jsx-filename-extension:0 */
/*global localStorage: true*/
/* eslint react/jsx-filename-extension: 0 */
import React from 'react';

var listcat = []; //to store list of categories
var lists = [];
class CategoryCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: []
        }
        this.ShowCollection=this.ShowCollection.bind(this);
    }

    componentDidMount() {
        listcat = [];
        for (var i = 0; i < localStorage.length; i+=1) {
            let v = i;
            listcat.push(
                <button type="submit" 
                className="btn btn-primary"
                key={v} onClick={() => this.ShowCollection(localStorage.key(v))}>
                    {localStorage.key(v)}
                </button>
            )
        }
        this.setState({ // to re-render the component

        });
    }
    ShowCollection (keyValue) {
        lists = [];
        this.state.categoryList = [];
        this.state.categoryList.push(localStorage.getItem(keyValue).split(','));
        for (var i = 0; i < this.state.categoryList[0].length; i+=1) {
            let v = i;
            if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                lists.push(
                    <div key={v}>{this.state.categoryList[0][v]}</div>
                );
            }
        }

        this.setState({ // to re-render the component

        });
    }

    render() {
        //const categoryList = this.state.categoryList;
        return (
            <div>
                <div>{listcat.map(data => data)}</div>
                <div>{lists.map(data => data)}</div>
            </div>
        )
    }
}

export default CategoryCollection;