import del from 'rollup-plugin-delete'
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import summary from 'rollup-plugin-summary';

export default {
    input: 'dist-tsc/app.js',
    output: {
        dir: 'dist',
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        del({ targets: 'dist/*', runOnce: false }), 
        terser({
            ecma: 2022,
            module: true,
            warnings: true,
        }),
        summary()
    ]
}