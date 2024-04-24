Tech task Products App

Overview
Simple product management app. Each product has the following properties:
1. ID (number, unique
2. Name (string, up to 30 characters, mandatory)
3. Description (string, up to 200 characters, optional)
4. Price (number, larger than zero, mandatory)
5. Creation Date (Date, mandatory)

The app displays the store’s list of products.
The user can view the product list, add new products and edit and delete existing products.
The user can also search the product list and sort it in various ways.
All changes to the list are automatically saved to the browser’s local storage (bonus).

The app is build according to the following steps:
1. The product list can be maintained as a simple array in memory and isn’t required to be persisted across page loads.
  a. Initialize the array with a couple of product items as a starting point
  b. There’s a bonus task below that changes this behavior if you get to it
2. Display an existing product list.
3. For each item display the product name, description and image. The image is static; you can pick any image you’d like. Refer to the mockup to see the item’s layout.
4. When clicking on an item, display a ‘details’ view of the product on the right side of the screen.
5. Add a “Delete” button on each product item. Clicking it will delete the product from the list.
6. Add a “Save” button on the details pane that saves the product after the user edits its properties. The product item in the list should reflect the changes only after the save succeeds.
7. Add an “Add” button that adds a new empty product item to the details pane. After the user fills the required data and clicks the “Save” button, the new product is added to the list.
8. Add validation to the details pane. The save button should only be enabled if the properties contain valid values (for example, name is not empty, price is greater than zero, etc.) Refer to the product properties in the overview section for the exact validation rules of each property.
9. Add the ability to sort the list by product name or creation date, by using a dropdown control.
10. Apply basic CSS to the app, nothing fancy but the layout should look similar to the mockup.
