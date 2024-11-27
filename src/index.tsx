import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)
root.render(
    <MantineProvider defaultColorScheme="dark">
        <App />
        </MantineProvider>
)
