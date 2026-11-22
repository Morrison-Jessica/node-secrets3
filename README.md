# node-secrets3

This example reads the required `APP_SECRET` value from a local `.env` file.

The `.env` file must contain:
```
APP_SECRET=fake-secret
```

Run the application with:
```
node app.js
```

Node.js loads `.env` using its built-in environment-file support.

- If `.env` is missing, the application stops with an `ENOENT` (file not found) error.
- If `.env` exists but `APP_SECRET` is missing or empty, the application throws `Missing APP_SECRET`.

The leading `.` in `.env` makes it a hidden file by default in macOS and other Unix-like systems. It does not provide security.

`.gitignore` excludes `.env` from Git so the local secret file is not committed to the repository.
