db.createUser(
    {
        user  : "localhost",
        pwd   : "localpassword",
        roles : [
            {
                role : "readWrite",
                db   : "dofusPlannerio"
            }
        ]
    }
);