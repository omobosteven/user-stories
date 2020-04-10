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
  Ensure the backend API server is running. I made some changes to the backend API provided. The changes I made are listed below.
  ```
  Added a status property to each story in the stories.json list (This can be ignored, but all user stories woulb be black by default)
  ```
  
 ###ASSUMPTIONS
 - I assumed that the stories created will not be edited after they've been created. I persisted the redux store and compared it against what is received from the backend. This is to ensure the status update is not lost. 
 - I assumed that when the Admin reviews a story it will be updated in the user's dashboard too, but because the review is not sent to the backend that is not happening.
 - The user of this app will scroll the table list horizontally to view the complete table
 - In an idea situation I will be checking for errors from the backend, I assumed we won't run into getting errors from the backend.
 - I did not include a loader, assuming all data will be fetched instantly
