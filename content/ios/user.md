TODO: Only logged in user can do write operation on databases

## Signing up

```obj-c
[container signupWithUsername:@"john.doe"
                     password:@"verysecurepasswd"
completionHandler:^(SKYUserRecordID *user, NSError *error) {
    if (error) {
        NSLog(@"error signing up user: %@", error);
        return;
    }

    NSLog(@"sign up successful");
    // do something else
}];
```

TODO: It checks for uniqueness username
TODO: Remind developer to use email as username when necessary

## Logging in

```obj-c
[container loginWithUsername:@"john.doe"
                    password:@"verysecurepasswd"
completionHandler:^(SKYUserRecordID *user, NSError *error) {
    if (error) {
        NSLog(@"error loggin user in: %@", error);
        return;
    }

    NSLog(@"login successful");
    // do something else
}];
```

## Signup and login with email

We allow signup and login by email too.

```obj-c
[container signupWithEmail:@"john.doe@example.com"
                  password:@"verysecurepasswd"
         completionHandler:^(SKYUserRecordID *user, NSError *error) {
    if (error) {
        NSLog(@"error signing up user: %@", error);
        return;
    }

    NSLog(@"sign up successful");
    // do something else
}];
```

```obj-c
[container loginWithEmail:@"john.doe@example.com"
                 password:@"verysecurepasswd"
        completionHandler:^(SKYUserRecordID *user, NSError *error) {
    if (error) {
        NSLog(@"error loggin user in: %@", error);
        return;
    }

    NSLog(@"login successful");
    // do something else
}];
```

## Getting current user id

```obj-c
if (container.currentUserRecordID) {
    // user is logged in, proceed
} else {
    // ask user to sign up / login
}
```

## Logging out

```obj-c
[container logoutWithCompletionHandler:nil];
```

## Changing user password

```obj-c
[container changePassword:@"oldPassword"
                 password:@"newPassword"
        completionHandler:^(SKYUserRecordID *user, NSError *error) {
    if (error) {
        NSLog(@"Can't change password: %@", error);
        // Can be old password not matched?
        return;
    }

    NSLog(@"Password change successfully");
}]
```

## Disocver users by emails

```obj-c
SKYQueryUsersOperation *operation = [SKYQueryUsersOperation discoverUsersOperationByEmails:@[@"john.doe@example.com", @"jane.doe@example.com"]];
operation.queryUserCompletionBlock = ^(NSArray /* SKYUser */ *users, NSError *operationError) {
    for (SKYUser *user in users) {
        // do something with the user
    }
};
operation.container = [SKYContainer defaultContainer];
[[[NSOperationQueue alloc] init] addOperation:operation];
```

## User Relations

See [Friends and Followers]({{< relref "relation.md" >}}).
