import React from 'react';
import NewBagForm from './NewBagForm';
import BagList from './BagList';
import BagDetail from './BagDetail';

class BagControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBagList: [],
      selectedBag: null
    };
  }

  handleClick = () => {
    if (this.state.selectedBag != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBag: null
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
    const selectedBag = this.state.mainBagList.filter(bag => bag.id === id)[0];
    this.setState({selectedBag: selectedBag});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedBag != null) {
      currentlyVisibleState = <BagDetail bag = {this.state.selectedBag} />
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
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default BagControl;