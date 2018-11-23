# ViNABFrontendAngular

# TODO:
## Backend
  - LOGIN
    - POST /user/login (use session cookie)
        Body: {email, password}
        Response: Yay: {session-cookie} Nay: {error??}

  - CRUD
    - Create:
        - POST /user/create
            Body: {email, name, password}
            Response: 	Yay: {"user created"}
                    Nay: {"error message??"}

        - POST /account/create
            Body: {user-session-cookie}
            Response: 	Yay: {JSON with created account?}
                    Nay: {null or error?}

    - Read:
        - GET /account/readall/
            Body: {user-session-cookie}
            Response: 	Yay: {JSON with accounts?}
                    Nay: {null or error?}
        - GET /user/readall/
            Body: {user-session-cookie}
            Response: 	Yay: {JSON with users}
                    Nay: {null or error?}
    - Update:
        - POST /account/update/
            Body: {account object}, {user-session-cookie}
            Response: 	Yay: {JSON with updated account?}
                    Nay: {null or error?}
        - POST /user/update/
            Body: {account object}, {user-session-cookie}
            Response: 	Yay: {JSON with user?}
                    Nay: {null or error?}

    - Delete:
        - DELETE /account/delete/
            Body: {account object}, {user-session-cookie}
            Response: 	Yay: {JSON with accounts?}
                    Nay: {null or error?}
        - DELETE /user/delete/


- Frontend
  - Admin-page:
    - An Interface/module with
        - a list of users
        - an edit user button for each user
        - a delete button for each user
    - Injection of Userservice for showing, editing and deletion of users: getAllUsers(), editUser(user: User), deleteUser(user: User)

  - Userservice should be hooked up to following URLS: GET "/user/readall/"









# Standard message:
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
