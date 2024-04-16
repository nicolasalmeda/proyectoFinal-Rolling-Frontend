import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'redux': 'redux/dist/redux.esm.js',
      'redux-thunk': 'redux-thunk/dist/redux-thunk.esm.js'
    },
    extensions: ['.js', '.jsx'],
  }
})
