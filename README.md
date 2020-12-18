# ipfs-core-dist

The NPM packages `ipfs` and `ipfs-core` both have type annotations using docstrings now, but because they're still not ESM capable and only ship Node code by default Snowpack et al try to import it directly into the browser which fails.

The developers seem to have their Webpack based workflow settled, and that's pretty much the easiest way to go about it. But for those of us who would _rather not, thank you,_ this is a modern JavaScript module that reexports the browser dist bundles from within the `ipfs-core` package as well as its type for convenience.

I just use it with a simple `import IPFS from 'ipfs-core-dist` in any Snowpack project.
