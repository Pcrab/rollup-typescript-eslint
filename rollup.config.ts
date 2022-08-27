import { RollupOptions } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const bundle: RollupOptions = {
    input: "src/index.ts",
    output: [
        {
            file: "dist/bundle.amd.js",
            format: "amd",
        },
        {
            file: "dist/bundle.cjs.js",
            format: "commonjs",
        },
        {
            file: "dist/bundle.umd.js",
            format: "umd",
        },
        {
            file: "dist/bundle.esm.js",
            format: "esm",
        },
    ],
    plugins: [nodeResolve(), commonjs()],
};
export default bundle;
