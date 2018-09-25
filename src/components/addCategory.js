/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0*/
/*global localStorage alert: true */ 
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let categoryList = [];

class AddTocategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            category_added: ""
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.inputCategoryChange= this.inputCategoryChange.bind(this);
        this.addNewCategory= this.addNewCategory.bind(this);
        this.addRestaurantToExistingCat= this.addRestaurantToExistingCat.bind(this);
        this.existingCategory= this.existingCategory.bind(this);
    }

    handleClickOpen () {
        this.setState({ open: true });
    };

    handleClose () {
        this.setState({ open: false });
    };

    inputCategoryChange (event) {
        this.setState({ category_added: event.target.value });
    }

    addNewCategory () { 
        //console.log(this.state.category_added);
        const restaurantList = [];
        const catName = this.state.category_added;
         // user input category 
        const resName = this.props.match.params.name;
         // restaurant name from route
        if (localStorage.getItem(catName) !== null) {
           // if category exist .. fetch and push new restaurant name
            restaurantList.push(localStorage.getItem(catName));
            restaurantList.push(resName);
            localStorage.setItem(catName, restaurantList);
        } else {
            localStorage.setItem(catName, resName);
             // pushed restaurnt name in new category name 
            alert(resName+" successfully added to "
            +catName +". To see category details check click Show Category");
        }
        this.handleClose();
    }

    addRestaurantToExistingCat (categoryName) { 
        const restaurantList = [];
        const resName = this.props.match.params.name;
         // restaurant name from route
        restaurantList.push(localStorage.getItem(categoryName));
        restaurantList.push(resName);
        localStorage.setItem(categoryName, restaurantList);
        alert(resName+" successfully added to "
        +categoryName +". To see category details check click Show Category");
        
    }

    existingCategory () {
        categoryList = [];
        for (let i = 0; i < localStorage.length; i+=1) {
           //lopp through local storage key value pair
            if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
                let v = i;
                categoryList.push(
                    <button
                    type="submit"
                    className="btn btn-primary"
                     key={v}
                      onClick={() => { 
                        this.addRestaurantToExistingCat(localStorage.key(v)) }}>
                        {localStorage.key(v)}
                    </button> //key has category name 
                );
            }
        }
        this.setState({ //to re-render the component 
        });
    }

    render() {
        return (
            <div className="card">
                <div>Add {this.props.match.params.name} to : </div>
                <div>
                  <br/><br/>
                    <button className="btn btn-danger"
                     type="submit"
                     onClick={this.handleClickOpen}>New Category</button>
                </div>
                <div>
                  <br/><br/>
                    <button type="submit"
                    className="btn btn-danger"
                    onClick={this.existingCategory}>Existing Category</button>
                    <br/><br/>
                    {categoryList.map(data => data)}
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                    Category Details : </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter name of category to add :
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            // label="Enter category name"
                            type="text"
                            fullWidth
                            onChange={this.inputCategoryChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                        <Button onClick={this.addNewCategory} color="primary">
                            Add Category
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddTocategory;