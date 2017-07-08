import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Nav, Content} from '../../src';
import check from './assets/img/check.svg';

// override settings
const settings = {
  index: 0
};

/* Examples */

// default theme, fade between tabs
const TabsDemo1 = () => (
  <Tabs settings={{...settings, ...{fadeTime: 250}}}>
    <Nav>
      <div>Cardinal</div>
      <div>Tufted Titmouse</div>
      <div>Blue Bird</div>
      <div>Great Tit</div>
    </Nav>
    <Content>
      <div>
        <img className="img-left" src="https://rawgit.com/nashio/react-tiny-tabs/demo-page/examples/demo/page/assets/img/cardinal.svg" alt="pic" />
        <p>Cardinals, in the family Cardinalidae, are passerine birds found in North and South America. They are also known as cardinal-grosbeaks and cardinal-buntings. The South American cardinals in the genus Paroaria are placed in another family, the Thraupidae (previously placed in Emberizidae).</p>
      </div>
      <div>
        <img className="img-left" src="https://rawgit.com/nashio/react-tiny-tabs/demo-page/examples/demo/page/assets/img/tuftedtitmouse.svg" alt="pic" />
        <p>The tufted titmouse (Baeolophus bicolor) is a small songbird from North America, a species in the tit and chickadee family (Paridae). The black-crested titmouse, found from central and southern Texas southwards, was included as a subspecies but is now considered a separate species B. atricristatus.</p>
      </div>
      <div>
        <img className="img-left" src="https://rawgit.com/nashio/react-tiny-tabs/demo-page/examples/demo/page/assets/img/bluebird.svg" alt="pic" />
        <p>The bluebirds are a group of medium-sized, mostly insectivorous or omnivorous bird in the order of Passerines in the genus Sialia of the thrush family (Turdidae). Bluebirds are one of the few thrush genera in the Americas</p>
      </div>
      <div>
        <img className="img-left" src="https://rawgit.com/nashio/react-tiny-tabs/demo-page/examples/demo/page/assets/img/greattit.svg" alt="pic" />
        <p>The great tit (Parus major) is a passerine bird in the tit family Paridae. It is a widespread and common species throughout Europe, the Middle East, Central and Northern Asia, and parts of North Africa where it is generally resident in any sort of woodland;</p>
      </div>
    </Content>
  </Tabs>);


// Tabs inside of Tabs
// contentWrap sets the content of the same size of the tabs
const TabsDemo2 = () => (
  <Tabs className="theme-box" settings={{index: 2, contentWrap: true}}>
    <Nav className="your-class" role="tablist">
      <div role="tab">First Section</div>
      <div role="tab">Second Section</div>
      <div role="tab">Third Section</div>
    </Nav>
    <Content>
      <div>An office worker android arrives at a base station to do computer work. As he attempts to make friends  with people in the office workplace, he is rejected and shunned because he is a robot. </div>
      <div className="your-class">The following day, Johns son asks him to merge his consciousness in order for John to assist him</div>
      <div>
        <p>You can also nest Tab Components inside other Tabs</p>
        <TabsDemo3 />
      </div>
    </Content>
  </Tabs>);

// attributes get inherited, for ex. role="tab" carries through the generated markup
const TabsDemo3 = () => (
  <Tabs className="theme-folder" settings={{
    index: 2, contentAligned: true, bgColor: 'salmon', color: 'black'
  }}>
    <Nav className="your-class" role="tablist">
      <div role="tab">Mercury</div>
      <div>Venus</div>
      <div>Earth</div>
      <div>Jupiter</div>
    </Nav>
    <Content>
      <div>First pane content paragraph placeholder box of text</div>
      <div className="your-class">Second pane content is a paragraph type of placeholder container</div>
      <div>Third pane content paragraph placeholder area</div>
      <div>Jupiter is the fifth planet from the Sun and the largest in the Solar System</div>
    </Content>
  </Tabs>);


// Colors demo, and folder-theme demo
const TabsDemo4 = () => (
  <Tabs className="theme-folder" settings={{bgColor: 'lightPink', color: '#333'}}>
    <Nav className="your-class" role="tablist">
      <div role="tab"><img src={check} alt="check" className="tab-icon"/>First Tab</div>
      <div><img src={check} alt="check" className="tab-icon"/>Second Tab</div>
      <div><img src={check} alt="check" className="tab-icon"/>Third Tab</div>
      <div><img src={check} alt="check" className="tab-icon"/>Fourth Tab</div>
    </Nav>
    <Content>
      <div><p>That the chandelier took the same amount of time to swing back and forth, no matter how far it was swinging. When he returned home, he set up two pendulums of equal length and swung one with a large sweep and the other with a small sweep and found that they kept time together. It was not until the work of Christiaan Huygens, almost one hundred years later</p></div>
      <div><p>To him it seemed, by comparison with his heartbeat, that the chandelier took the same amount of time to swing back and forth, no matter how far it was swinging. When he returned home, he set up two pendulums of equal length and swung one with a large sweep and the other with a small sweep and found that they kept time together. It was not until the work of Christiaan Huygens, almost one hundred years later</p></div>
      <div><p>Panel content goes To him it seemed, by comparison with his heartbeat, that the chandelier took the same amount of time to swing back and forth, no matter how far it was swinging. When he returned home, he set up two pendulums of equal length and swung one with a large sweep and the other with a small sweep and found that they kept time together. It was not until the work of Christiaan Huygens, almost one hundred years laterhere... #2</p></div>
      <div><p>Panel content goes here.To him it seemed, by comparison with his heartbeat, that the chandelier took the same amount of time to swing back and forth, no matter how far it was swinging. When he returned home, he set up two pendulums of equal length and swung one with a large sweep and the other with a small sweep and found that they kept time together. It was not until the work of Christiaan Huygens, almost one hundred years later.. #3</p></div>
    </Content>
  </Tabs>);

// Double line in the title demo
const TabsDemo5 = () => (
  <Tabs className="two-rows theme-box" settings={{contentWrap: true}}>
    <Nav>
      <div><span>Planet Mercury</span><sub>smallest planet</sub></div>
      <div><span>Planet Venus</span><sub>hottest planet</sub></div>
      <div><span>Planet Earth</span><sub>Water Abundance</sub></div>
      <div><span>Planet Mars</span><sub>Two satelites</sub></div>
    </Nav>
    <Content>
      <div>{"Mercury has no natural satellites; besides impact craters, its only known geological features are lobed ridges or rupes that were probably produced by a period of contraction early in its history.[67] Mercury's very tenuous atmosphere consists of atoms blasted off its surface by the solar wind.[68] Its relatively large iron core and thin mantle have not yet been adequately explained"}</div>
      <div> It is much drier than Earth, and its atmosphere is ninety times as dense. Venus has no natural satellites. It is the hottest planet, with surface temperatures over 400 °C (752°F), most likely due to the amount of greenhouse gases in the atmosphere.[71] No definitive evidence of current geological activity has been detected on Venus,</div>
      <div>Earth (1 AU from the Sun) is the largest and densest of the inner planets, the only one known to have current geological activity, and the only place where life is known to exist.[73] Its liquid hydrosphere is unique among the terrestrial planets, and it is the only planet where plate tectonics has been observed.</div>
  <div>Mars (1.5 AU from the Sun) is smaller than Earth and Venus (0.107 Earth masses). It has an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars (roughly 0.6% of that of Earth).[75] Its surface, peppered with vast volcanoes, such as Olympus Mons, and rift valleys</div>
    </Content>
  </Tabs>);

// Using the tab navigation in the bottom
const TabsDemo6 = () => (
  <Tabs className="theme-folder" settings={{
    contentWrap: true, bgColor: 'black', color: 'white', bottomNav: true
  }}>
    <Nav className="your-class" role="tablist">
      <div role="tab">Mercury</div>
      <div>Venus</div>
      <div>Earth</div>
      <div>Jupiter</div>
    </Nav>
    <Content>
      <div>
        <img src="assets/img/planets/mercury.jpg" alt="mercury" />
        <p>First pane content paragraph placeholder box of text</p></div>
      <div className="your-class">
        <img src="assets/img/planets/venus.jpg" alt="venus" />
        <p>Second pane content is a paragraph type of placeholder container</p></div>
      <div>
        <img src="assets/img/planets/earth.jpg" alt="earth" />
        <p>Third pane content paragraph placeholder area</p></div>
      <div>
        <img src="assets/img/planets/jupiter.jpg" alt="jupiter" />
        <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System</p></div>
    </Content>
  </Tabs>);

const Header = () => (
  <div className="github">
    <iframe src="https://ghbtns.com/github-btn.html?user=nashio&repo=react-tiny-tabs&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px">
    </iframe>
  </div>
);
const Footer = () => (
  <footer>
    <h2>License</h2>
    <h3>MIT</h3>
    <a href="https://github.com/nashio/react-tiny-tabs/">Github</a>&nbsp;/&nbsp;v.0.1.0
  </footer>
);

ReactDOM.render(
  <div>
    <p className="intro">Easy to use Tab Component for React with basic options to skin and change layout.</p>
    <Header></Header>
    <h2>Examples:</h2>
    <h4>Default Theme</h4>
    <pre>{`
      settings: {
        fadeTime: 250,
        index: 0
      }
      `}</pre>
    <TabsDemo1 />
    <h4>folder-theme</h4>
    <pre>{`
      settings: {
        bgColor: 'lightPink',
        color: '#333'
      }
    `}</pre>
    <TabsDemo4 />
    <h4>box-theme, using .two-rows</h4>
    <pre>{`
      settings: {
        contentWrap: true
      }
    `}</pre>
    <TabsDemo5 />
    <h4>Nesting components</h4>
    <pre>{`
      settings: {
        index: 2,
        contentWrap: true
      }
    `}</pre>
    <TabsDemo2 />
    <h4>Bottom Navigation</h4>
    <pre>{`
      settings: {
        bottomNav: true,
        bgColor: 'black',
        color: 'white',
        contentWrap: true
      }
    `}</pre>
    <TabsDemo6 />
    <Footer></Footer>
  </div>,
  document.getElementById('root')
);

