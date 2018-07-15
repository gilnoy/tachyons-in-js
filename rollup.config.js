// Plugins
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import { uglify } from 'rollup-plugin-uglify';


export default [
    {
        input: 'src/index.js',
        output: {
            file: pkg.main,
            format: 'umd'
        },
        moduleName : "tachyonsinjs",
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: 'node_modules/**'
            })     
        ]
    }
]