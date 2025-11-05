# npm-> node packet manager ❌ it is not the full form of npm
# npm doesn't have a full form, it handles packages
every package is hosted on npm
# package.json is configuration file for the npm
# what is a bundler?
* vite, webpack, parcel are example of bundlers. These bundle our project to make it push to production

# dev dependencies- needed for dev purpose `-D`
# normal dependencies- used in production

`^`: minor version patch- minor version update is ok because it doesn't have very major changes
`~`: major version patch- this can break our app    
# package.json? 
* what version of package installed in system
# package-lock.json?
* keeps track of exact version installed and record it. 
* package-lock.json has a sha512-hash to verify if the same code is running on local and published on production
# node modules folder?
* all the code that npm fetched and this is very large because packages have `transitive dependencies`.
- every package has its own package.json and package-lock.json
- if we have package and package-lock file we can generate node modules so we don't need    to  push it on the github.
# npx-> is for executing a package
# npm-> for managing a package

# works or parcel:
* dev, build and HMR=(Hot Module Replacement)
* it is so fast because it uses `File Watching Algorithm-C++`
* provides faster builds due to caching.
* Does Image optimization
* minification and bundling during production build
* Consistent Hashing?
* Diffrential Bundling?- to suppport older browsers
* Background Diagnostics
* Error Handling
* Tree Shaking Algo ?
* clap for parcel 👏
# browserlist.dev to know the website support of browsers.