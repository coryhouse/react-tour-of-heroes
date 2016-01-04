#React Tour of Heroes

This is an implementation of Angular 2's [Tour of Heroes](https://angular.io/docs/ts/latest/tutorial/toh-pt1.html) tutorial application, but built in React for comparison. This project uses [React Slingshot](https://github.com/coryhouse/react-slingshot) as a quick framework for getting started, so check out [React Slingshot's docs](https://github.com/coryhouse/react-slingshot) for a full overview of the React stack involved.

I built this as part of my research for this post: [Angular 2 versus React: There Will Be Blood](https://medium.com/@housecor/angular-2-versus-react-there-will-be-blood-66595faafd51#.p1ucoabov)

For comparison, check out the [Angular 2 version](https://github.com/coryhouse/angular-2-tour-of-heroes).

##Get Started
1. `npm install`
2. `npm start`

##To Build
`npm run build`

#How does this differ from the Angular 2 version?
1. I used ES6 with Babel instead of TypeScript since that's included in the starter kit I selected. TypeScript isn't very popular in the React community anyway.
2. I used Sass instead of embedding the styles in the component. Of course, I could have [embedded the styles in the component via JSON](https://facebook.github.io/react/tips/inline-styles.html) if desired.  
3. The dev experience supports hot reloading via Redux and react-transform-hmr. Note that you can save changes to files and they're reflected immediately in the browser **without requiring a refresh so you don't lose your client-side state**. Nice.  I'm not aware of an equivalent experience for Angular 2 yet. If you are, please let me know.
4. It's much smaller. The built version is 216k compared to Angular 2's 764k.
