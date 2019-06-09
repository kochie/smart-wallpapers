import * as React from 'React'
import { Navigation, List, Link } from 'fannypack';

export default () => (
    <Navigation>
  <List isHorizontal>
    <List.Item>
      <Link href="https://google.com">Google</Link>
    </List.Item>
    <List.Item>
      <Link href="https://github.com">GitHub</Link>
    </List.Item>
  </List>
</Navigation>
)