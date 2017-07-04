# ract-tiny-tabs

Easy to use React tab component that lets you:
* Choose from 3 themes
* Customize colors for text and background
* Use double lines in the title
* Constrain content to match the nav width
* Nest tab components inside other tabs components
* Define transition speed or use the navigation in the bottom


See the live [DEMO:](nashio.github.com/tiny-tabs)

### Usage

```
  <Tabs settings={bgColor: royalBlue, color: white}>
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


### License

MIT
