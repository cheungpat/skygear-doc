+++
date = "2015-09-21T19:36:40+08:00"
draft = true
title = "Users"

+++

TODO: Only logged in user can do write operation on databases

## Signing up

```obj-c
[container signupUserWithUsername:@"john.doe@example.com" password:@"verysecurepasswd" completionHandler:^(ODUserRecordID *user, NSError *error) {
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
[container loginUserWithUsername:@"john.doe@example.com" password:@"verysecurepasswd" completionHandler:^(ODUserRecordID *user, NSError *error) {
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
[container logoutUserWithcompletionHandler:nil];
```

## Disocver users by emails

```obj-c
ODQueryUsersOperation *operation = [ODQueryUsersOperation discoverUsersOperationByEmails:@[@"john.doe@example.com", @"jane.doe@example.com"]];
operation.queryUserCompletionBlock = ^(NSArray /* ODUser */ *users, NSError *operationError) {
    for (ODUser *user in users) {
        // do something with the user
    }
};
operation.container = [ODContainer defaultContainer];
[[[NSOperationQueue alloc] init] addOperation:operation];
```

## User Relations

See [Friends and Followers]({{< relref "relation.md" >}}).