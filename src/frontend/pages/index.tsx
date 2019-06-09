import * as React from 'react'
import { ThemeProvider, Set, Button } from 'fannypack';

import TopNav from '../components/TopNav'
import DisplayGrid from '../components/DisplayGrid';

export default () => (
    <ThemeProvider>
        <TopNav />
        <Set>
            <Button>Default</Button>
            <Button use="a" href="#">Anchor</Button>
        </Set>
        <DisplayGrid />
    </ThemeProvider>
)