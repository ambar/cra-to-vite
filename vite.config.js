import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import inject from '@rollup/plugin-inject'

const include = 'src/**/*.js'

export default defineConfig({
  plugins: [
    // provider global `React` variable to `jsxFactory`
    inject({React: 'react', include}),
    reactRefresh({include}),
  ],
  esbuild: {
    include,
    // unexpected
    exclude: [],
    loader: 'jsx',
    // Uncaught ReferenceError
    // jsxInject: `import React from 'react'`,
  },
})
