## Phone book

Write a phone book contact storage application.

## Step 1

The application should consist of a form and a list of contacts. At the current
step, implement add a contact name and display the contact list. The application
must not save contacts between different sessions (page refresh). Every contact
must be an object with name and id properties. To generate IDs use any suitable
package.

## Step 2

Expand the functionality of the application by allowing users to add numbers
phones. To do this, add <input type="tel"> to the form, and a property to store
its values are in the state.

## Step 3

Add a search field that can be used to filter your contact list by name.

- The search field is an input without a form, the value of which is written to
  the state (controlled element).
- Filtering logic must be case insensitive.

## Step 4

If your application is implemented in a single <App> component, refactor
separating the appropriate parts into separate components. In root state the
<App> component will retain only the contacts and filter properties. Enough
highlight four components: a form for adding contacts, a list of contacts,
contact list element and search filter.

## Step 5

Prevent the user from adding contacts whose names are already in phone book.
When you try to perform such an action, display an alert with warning.

## Step 6

Expand the functionality of the application by allowing the user to delete
previously saved contacts.
