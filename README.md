# ipfs-core-dist

The NPM packages [`ipfs`](https://www.npmjs.com/package/ipfs) and [`ipfs-core`](https://www.npmjs.com/package/ipfs-core) both have TypeScript typings now, but because they're still not ESM capable and only ship Node code by default, modern toolchains like [Snowpack](https://www.snowpack.dev/) or [Vite](https://vitejs.dev/) try to import it directly into the browser which fails because of all sorts of dependency related complications.

The developers seem to have their Webpack based workflow settled, and that's pretty much the easiest way to go about it. But for those of us who would _rather not, thank you,_ this is a modern JavaScript module that reexports the browser dist bundles from within the `ipfs-core` package as well as its type for convenience.

For now I am installing it from GitHub directly: `npm i 5310/ipfs-core-dist`.

I just use it with a simple `import IPFS from 'ipfs-core-dist` in any Snowpack or Vite project.
