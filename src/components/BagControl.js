import React from 'react';
import NewBagForm from './NewBagForm';
import BagList from './BagList';
import BagDetail from './BagDetail';
import EditBagForm from './EditBagForm'
import './BagControl.css';

class BagControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBagList: [],
      selectedBag: null,
      editing: false 
    };
  }

  handleClick = () => {
    if (this.state.selectedBag != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBag: null,
        editing: false
      });

    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
    }
  }

  handleAddingNewBagToList = (newBag) => {
    const newMainBagList = this.state.mainBagList.concat(newBag);
    this.setState({mainBagList: newMainBagList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedBag = (id) => {
    const selectedBag = this.state.mainBagList.find(bag => bag.id === id);
    this.setState({selectedBag: selectedBag});
  }

  handleUpdateBagInList = (updatedBag) => {
    const updatedMainBagList = this.state.mainBagList.map(bag => {
      if (bag.id === updatedBag.id) {
        return updatedBag;
      } else {
        return bag;
      }
    });
    this.setState({mainBagList: updatedMainBagList});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingBagInList = (bagToEdit) => {
    const editMainBagList = this.state.mainBagList
      .filter(bag => bag.id !== this.state.selectedBag.id)
      .concat(bagToEdit);
    this.setState({
      mainBagList: editMainBagList,
      editing: false,
      selectedBag: null
    });

  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditBagForm bag = { this.state.selectedBag} onEditBag = {this.handleEditingBagInList} />
      buttonText = "Return to Bag List";
    }
   else if (this.state.selectedBag != null) {
      currentlyVisibleState = <BagDetail 
      bag = {this.state.selectedBag} 
      onUpdateBag={this.handleUpdateBagInList}
      onClickingEdit = {this.handleEditClick} />
      buttonText= "Return to Bag List"
    }
     else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBagForm onNewBagCreation={this.handleAddingNewBagToList} />
      buttonText= "Return to Bag List"
    } else {
      currentlyVisibleState = <BagList bagList={this.state.mainBagList} onBagSelection={this.handleChangingSelectedBag} />;
      buttonText= "Add New Bag"
    }
    return (
      <div className='bagControl'>

      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
      </div>

    );
  }

}

export default BagControl;