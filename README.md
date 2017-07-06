# ract-tiny-tabs

Easy to use React tab component that lets you:
* Choose from 3 themes
* Use double lines in the title
* Define transition speed or use the navigation in the bottom
* Nest tab components inside other tabs components
* Constrain content to match the nav width
* Customize colors for text and background


See the live [DEMO:](nashio.github.com/tiny-tabs)

### Usage

```
  import {Tabs, Nav, Content} from 'react-tiny-tabs';
  ...
  <Tabs className="theme-default" settings={bgColor: royalBlue, color: white}>
    <Nav>
      <div>First Tab</div>
      <div>Second Tab</div>
      <div>Third Tab</div>
    </Nav>
    <Content>
      <div>
        <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
      </div>
      <div>
        <p>Magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
      </div>
      <div>
        <p>Duis aute irure dolor in reprehenderit in voluptate</p>
      </div>
    </Content>
  </Tabs>);

```

### Options

| option  | type |  description |
|---|---|---|
|color| String | active tab text color |
|bgColor| String | active tab background color |
|contentWrap| Boolean | active tab background color |
|bottomNav| Boolean | active tab background color |
|index| Number | Initialize active tab index |

### Classes
- Apply to \<Tabs className="theme-x"\>
#### Themes
* .theme-default
* .theme-box
* .theme-folder
#### Nav modifier
* .two-rows (add support for 2 lines in the tab navigation)

### License

MIT
