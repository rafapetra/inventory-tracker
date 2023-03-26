# Local Business Inventory Tracker

This is a React application that tracks inventory for a local business. It allows the user to pick one inventory item and track how much of it is remaining as it gets sold or given away. The theme for this particular application is a coffee shop that sells coffee beans.

## Component Tree

| App           |
| -----------   |
| Header        |
| Menu          |
| BagControl    |
| ├── BagList   |
| ├── Bag       |
| ├── BagDetail |
| └── BagForm   |


## Functionality

The application has the following functionality:

- As a user, I can see a list/menu of all available types of coffee beans.
- For each item, I can see its name, origin, price, and roast (light, medium, or dark).
- As a user, I can submit a form to add a new burlap sack of coffee to the inventory.
- As a user, I can click on a burlap sack to see its detail page.
- On the detail page, I can see how many pounds of coffee beans are left in the burlap sack.
- As a user, I can click a button to sell a pound of coffee beans. This should decrease the number of pounds left by 1. The number of pounds in a sack of coffee beans should not be able to go below 0.

## Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.

## Technologies Used

- React
- PropTypes
- CSS

## Future Enhancements

- Add DELETE functionality.
- Implement authentication and authorization for user accounts.
- Allow for the tracking of multiple types of inventory items, not just coffee beans.

## Acknowledgements

This project was inspired by the Epicodus curriculum.
