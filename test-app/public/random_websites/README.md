See comment in `frontend/src/index.tsx` on how to build the bundle.
Then use `yarn dev` and copy the files from `frontend/dist/` to this folder

For now we check in the bundles but we can probably do better.

To create HTML files, just `cmd+s` in chrome and choose "HTML only". Then add these 2 lines to the end of `<body>` tag:

```html
<link rel="stylesheet" type="text/css" href="./style.css" />
<script src="./gandalf-react-component.es.js"></script>
```
