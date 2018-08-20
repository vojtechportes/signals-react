# Signals Test

[Production build is deployed here](http://signals.justart.org).

## Installation

```bash
$ npm install
```

### Development build

```bash
$ npm run dev
```

[Development build is accessible on port :8080](http://localhost:8080).

### Production build

```bash
$ npm run build 
```

Production build is compiled to folder ./dist. Part of the build is .htaccess file that contains deflate/g-zip configuration and rewrite rules