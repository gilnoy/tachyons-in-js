// Plugins
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import { uglify } from 'rollup-plugin-uglify';


export default [
    {
        input: 'src/index.js',
        output: {
            file: pkg.main,
            format: 'umd',
            sourcemap: true
        },
        moduleName : "tachyonsinjs",
        plugins: [
            resolve(),
            babel({
                exclude: 'node_modules/**'
            }),
            uglify()    
        ]
    }
]