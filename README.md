Livingston library

Ref:
Best article:
https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c

Others:
https://prateeksurana.me/blog/react-library-with-typescript/
https://dev.to/sidv93/component-library-setup-with-react-typescript-and-rollup-onj


Steps:
0) Devops prep
Create a new repo (next door digital-design-system in Enterprise)
Register with npm (public is free, private requires a paid subscription) https://www.npmjs.com/signup

1) Create the component in src. For example: HelpBox.tsx

2) Add to index.ts

3) Check and commit
npm run format
npm run lint
npm run version
npm run build
npm run postversion

4) npm login
username: rishadauxcoza
p: )EKy,+)-7iYQQB9

4) Publish
npm publish

5) Commit your code and push to git

6) Use the code in your app
npm ...


Todo:
- Add a simple test
- check all the npm commands
- npm publish
- add and use in app