![](http://nashio.github.io/react-tiny-tabs/examples/demo/assets/img/logo-small.png)

Easy to use React tab component
* 3 different looks/themes
* Define transition speed or use the navigation in the bottom
* Nest tab components inside other tabs components
* Customize the tab nav to use title and subtitle
* Constrain content to match the nav width
* Customize colors for text and background

<br/>![http://nashio.github.io/react-tiny-tabs/examples/demo/assets/img/demo.jpg](http://nashio.github.io/react-tiny-tabs/examples/demo/page/index.html)

### Demo
See the live [DEMO:](http://nashio.github.io/react-tiny-tabs/examples/demo/page/index.html)

## Usage
<!-- ### Install -->
<!-- ``` -->
<!-- npm install -D react-tiny-tabs -->
<!-- ``` -->
#### Include the CSS
```
<link rel="stylesheet" href="node_modules/react-tiny-tabs/dist/index.css">
```
#### Include the Components

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
|index| Number | Initialize active tab index |
|color| String | active tab text color |
|bgColor| String | active tab background color |
|contentWrap| Boolean | Restrains panel content to the width of the tabs nav |
|bottomNav| Boolean | Uses the nav in the bottom |
|fadeTime| Number | (ms) Adds fade transition when switching |

### Classes
\<Tabs className="theme-x"\>

#### Themes
* .theme-default
* .theme-box
* .theme-folder
#### Nav modifier
* .two-rows (add support for 2 lines in the tab navigation)

### Carry over html attributes
Added custom html properties will be rendered in the resulting markup
```
  <Nav role="tablist" className="your-own-class">
    <div role="tab" >First Tab</div>
    <div role="tab">Second Tab</div>
    <div role="tab">Third Tab</div>
  </Nav>
```

### Files

Code example
#### [demo/index.html/](https://github.com/nashio/react-tiny-tabs/blob/master/examples/demo/index.html "code examples")

Source file
#### [src/](https://github.com/nashio/react-tiny-tabs/tree/master/src "source file")

Build files
#### [dist/](https://github.com/nashio/react-tiny-tabs/tree/master/dist "build files")



### License

MIT
