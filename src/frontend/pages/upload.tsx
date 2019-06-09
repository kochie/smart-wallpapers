import * as React from 'react'
import { ThemeProvider, Input } from 'fannypack';

export default () => {

    return (
        <ThemeProvider>
            <Input type="file"/>
        </ThemeProvider>
    )
} 