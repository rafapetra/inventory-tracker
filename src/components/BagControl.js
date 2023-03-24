import React from 'react';
import NewBagForm from './NewBagForm';
import BagList from './BagList';

class BagControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBagList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewBagToList = (newBag) => {
    const newMainBagList = this.state.mainBagList.concat(newBag);
    this.setState({mainBagList: newMainBagList,
                  formVisibleOnPage: false });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBagForm onNewBagCreation={this.handleAddingNewBagToList} />
      buttonText= "Return to Bag List"
    } else {
      currentlyVisibleState = <BagList bagList={this.state.mainBagList} />
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