import del from 'rollup-plugin-delete'
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
    input: 'dist-tsc/app.js',
    output: {
        dir: 'dist',
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        del({ targets: 'dist/*', runOnce: false }),
    ]
}