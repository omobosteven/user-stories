# User story App
Create and review user stories

## Development set up

- Ensure Node >= v10 is installed on your system

- Clone the repo and cd into it
    ```
    git clone https://github.com/omobosteven/user-stories.git
    ``` 
 - Install dependencies
    ```
    npm install
    ```
	
- Run application
    ```
    npm run start
    ```
  Ensure the backend API server is running.
  
 ### ASSUMPTIONS
 - I assumed that the stories created will not be edited after they've been created. I persisted the redux store and compared it against what is received from the backend. This is to ensure the status update is preserved during admin review. 
 - I assumed that when the Admin reviews a story it will be updated in the user's dashboard too, but because the review updated on the backend, that is not happening.
 - The user of this app will scroll the table list horizontally to view the complete table
 - I did not include a loader, assuming all data will be fetched instantly.
