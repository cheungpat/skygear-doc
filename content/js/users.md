<a name="authentication"></a>
# Authentication

## Sign up

If you are not familiar with Promises, please read more [here](https://www.promisejs.org/).

``` javascript
// We can signup using username or email. Both function will return a promise.
let req = skygear.signupWithUsername(username, password);
// Or by email.
req = skygear.signupWithEmail(email, password);

req.then((user) => {
  console.log('user id', user.ID);
  // only after the user successfully signup or login
  // skygear.accessToken can be available
  console.log('access token', skygear.accessToken);
}, (error) => {
  // maybe username or email already exists
  // or the email format is incorrect
  console.error(error);
});
```

## Log in

Logging in is as straight-forward as signing up.

``` javascript
// If you signup with username, you can login by calling `loginWithUsername`.
let req = skygear.loginWithUsername(username, password);
// Or call `loginWithEmail` if you signup with email.
req = skygear.loginWithEmail(username, password);

req.then((user) => {
  console.log(user);
}, (error) => {
  console.error(error);    
})
```

## Log out

``` javascript
skygear.logout().then(() => {
  console.log('logout successfully');
}, (error) => {
  console.error(error);
});
```

## Change password

``` javascript
skygear.changePassword(oldPassword, newPassword).then((user) => {
  console.log('User now have new password', user);
}, (error) => {
  // maybe user has not logged in or old password not match
  console.error(error);
});
```

## Log out all other session (not yet implemented)

``` javascript
skygear.changePassword(oldPassword, newPassword, invalidateTokens=true)
.then((user) => {
  console.log('skygear will got new accessToken automatically', user);
}, (error) => {
  console.error(error);
});
```

<a name="current-user"></a>
# Current User

Skygear provide currentUser object after login.

``` javascript
// if not logged in, it will be null
let user = skygear.currentUser;
```

## Hook currentUser change

When access token is expired, Skygear Server will return `401 Unauthorized`. SDK will
clear the persisted access token and current user info. To handle the forced
logout gracefully at your application, you should register a call back by
`onUserChanged` and do appropriate application logic to alert the user.

``` javascript
let handler = skygear.onUserChanged(function (user) {
  if (user === null) {
    console.log('The user is logged out');
  } else {
    console.log('The user is logged in or changed');
  }
});

handler.cancel(); // The callback is cancelable
```

## Other user lookup

Skygear provide a user discovery method by email

``` javascript
skygear.getUsersByEmail(['ben@skygear.com']).then((users) => {
  console.log(users);
}, (error) => {
  console.error(error);
});
```

User discovery by username is **not yet implemented**.

``` javascript
skygear.discover('chpapa').then((ben) => {
  console.log(ben);
}, (error) => {
  console.error(error);
});
```

## User relations

See [Social](/js/guide/relation) section for more.

## User access control

See [Access Control](/js/guide/access-control/role) section for more.
