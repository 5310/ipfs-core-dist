// This is a shim to make Js-IPFS work within TypeScript
//
// The NPM packages `ipfs` and `ipfs-core` both have type annotations
// using docstrings, but because they're still not ESM capable
// and only ships Node code by default Snowpack et al try to 
// import it into the browser which fails.
//
// The solution is to import the browser distribution from within
// and then override it with the type from the root module.
//
// Thankfully TypeSciprt can do that. But it'd still be better if
// we could cast an imported module directly in the import statement.
// @ts-ignore
import IPFS_ from 'ipfs-core/dist/index.min.js';
const IPFS = IPFS_;
export default IPFS;
