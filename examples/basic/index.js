import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Nav, Content} from '../../src';

import check from './assets/img/check.svg';
import tuftedTitmouse from './assets/img/tufted-titmouse.svg';
import blueBird from './assets/img/blue-bird.svg';
import cardinal from './assets/img/cardinal.svg';
import greatTit from './assets/img/great-tit.svg';

// override settings
const settings = {
  index: 0,
  tabSeparation: 0,
  transitionSpeed: 100,
  selectedPop: false
};

/* Examples */
const TabsDemo1 = () => (
  <Tabs settings={settings}>
    <Nav>
      <div>Cardinal</div>
      <div>Tufted Titmouse</div>
      <div>Blue Bird</div>
      <div>Great Tit</div>
    </Nav>
    <Content>
      <div>
        <img className="img-left" src={cardinal} alt="pic" />
        <p>Cardinals, in the family Cardinalidae, are passerine birds found in North and South America. They are also known as cardinal-grosbeaks and cardinal-buntings. The South American cardinals in the genus Paroaria are placed in another family, the Thraupidae (previously placed in Emberizidae).</p>
      </div>
      <div>
        <img className="img-left" src={tuftedTitmouse} alt="pic" />
        <p>The tufted titmouse (Baeolophus bicolor) is a small songbird from North America, a species in the tit and chickadee family (Paridae). The black-crested titmouse, found from central and southern Texas southwards, was included as a subspecies but is now considered a separate species B. atricristatus.</p>
      </div>
      <div>
        <img className="img-left" src={blueBird} alt="pic" />
        <p>The bluebirds are a group of medium-sized, mostly insectivorous or omnivorous bird in the order of Passerines in the genus Sialia of the thrush family (Turdidae). Bluebirds are one of the few thrush genera in the Americas</p>
      </div>
      <div>
        <img className="img-left" src={greatTit} alt="pic" />
        <p>The great tit (Parus major) is a passerine bird in the tit family Paridae. It is a widespread and common species throughout Europe, the Middle East, Central and Northern Asia, and parts of North Africa where it is generally resident in any sort of woodland;</p>
      </div>
    </Content>
  </Tabs>);


// Tabs inside of Tabs
// AutoWrap sets the content of the same size of the tabs
const TabsDemo2 = () => (
  <Tabs className="theme-box" settings={{index: 2, autoWrap: true}}>
    <Nav className="your-class" role="tablist">
      <div role="tab">First</div>
      <div role="tab">Second</div>
      <div role="tab">Third</div>
    </Nav>
    <Content>
      <div>An office worker android arrives at a base station to do computer work. As he attempts to make friends  with people in the office workplace, he is rejected and shunned because he is a robot. </div>
      <div className="your-class">The following day, Johns son asks him to merge his consciousness in order for John to assist him</div>
      <div>
        <p>The following is a tab component inside of a tab</p>
        <TabsDemo3 />
      </div>
    </Content>
  </Tabs>);

// attributes get inherited
const TabsDemo3 = () => (
  <Tabs className="theme-folder" settings={{
    index: 2, autoWrap: true, bgColor: 'salmon', color: 'black'
  }}>
    <Nav className="your-class" role="tablist">
      <div role="tab">Mercury</div>
      <div>Venus</div>
      <div>Earth</div>
    </Nav>
    <Content>
      <div>First pane content paragraph placeholder box of text</div>
      <div className="your-class">Second pane content is a paragraph type of placeholder container</div>
      <div>Third pane content paragraph placeholder area</div>
    </Content>
  </Tabs>);


const TabsDemo4 = () => (
  <Tabs className="theme-folder" settings={{bgColor: '#e0e6a4'}}>
    <Nav className="your-class" role="tablist">
      <div role="tab"><img src={check} alt="check" className="tab-icon"/>First Tab</div>
      <div><img src={check} alt="check" className="tab-icon"/>Second Tab</div>
      <div><img src={check} alt="check" className="tab-icon"/>Third Tab</div>
      <div><img src={check} alt="check" className="tab-icon"/>Fourth Tab</div>
    </Nav>
    <Content>
      <div><p>To him it seemed, by comparison with his heartbeat, that the chandelier took the same amount of time to swing back and forth, no matter how far it was swinging. When he returned home, he set up two pendulums of equal length and swung one with a large sweep and the other with a small sweep and found that they kept time together. It was not until the work of Christiaan Huygens, almost one hundred years later</p></div>
      <div><p>To him it seemed, by comparison with his heartbeat, that the chandelier took the same amount of time to swing back and forth, no matter how far it was swinging. When he returned home, he set up two pendulums of equal length and swung one with a large sweep and the other with a small sweep and found that they kept time together. It was not until the work of Christiaan Huygens, almost one hundred years later</p></div>
      <div><p>Panel content goes To him it seemed, by comparison with his heartbeat, that the chandelier took the same amount of time to swing back and forth, no matter how far it was swinging. When he returned home, he set up two pendulums of equal length and swung one with a large sweep and the other with a small sweep and found that they kept time together. It was not until the work of Christiaan Huygens, almost one hundred years laterhere... #2</p></div>
      <div><p>Panel content goes here.To him it seemed, by comparison with his heartbeat, that the chandelier took the same amount of time to swing back and forth, no matter how far it was swinging. When he returned home, he set up two pendulums of equal length and swung one with a large sweep and the other with a small sweep and found that they kept time together. It was not until the work of Christiaan Huygens, almost one hundred years later.. #3</p></div>
    </Content>
  </Tabs>);

// attributes get inherited
const TabsDemo5 = () => (
  <Tabs className="theme-two-rows" settings={{autoWrap: true}}>
    <Nav>
      <div><span>Planet Mercury</span><sub>smallest planet</sub></div>
      <div><span>Planet Venus</span><sub>hottest planet</sub></div>
      <div><span>Planet Earth</span><sub>Water Abundance</sub></div>
      <div><span>Planet Mars</span><sub>Two satelites</sub></div>
    </Nav>
    <Content>
      <div>Mercury has no natural satellites; besides impact craters, its only known geological features are lobed ridges or rupes that were probably produced by a period of contraction early in its history.[67] Mercury's very tenuous atmosphere consists of atoms blasted off its surface by the solar wind.[68] Its relatively large iron core and thin mantle have not yet been adequately explained</div>
      <div> It is much drier than Earth, and its atmosphere is ninety times as dense. Venus has no natural satellites. It is the hottest planet, with surface temperatures over 400 °C (752°F), most likely due to the amount of greenhouse gases in the atmosphere.[71] No definitive evidence of current geological activity has been detected on Venus,</div>
      <div>Earth (1 AU from the Sun) is the largest and densest of the inner planets, the only one known to have current geological activity, and the only place where life is known to exist.[73] Its liquid hydrosphere is unique among the terrestrial planets, and it is the only planet where plate tectonics has been observed.</div>
  <div>Mars (1.5 AU from the Sun) is smaller than Earth and Venus (0.107 Earth masses). It has an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars (roughly 0.6% of that of Earth).[75] Its surface, peppered with vast volcanoes, such as Olympus Mons, and rift valleys</div>
    </Content>
  </Tabs>);


ReactDOM.render(
  <div>
    <p className="intro">Customize color and background for active tab. Specify flexible width or auto match the tab's width header. Nest tabs inside other tabs. Define speed of transition</p>
    <h3><i>default theme</i></h3>
    <TabsDemo1 />
    <h3><i>.folder--theme</i></h3>
    <TabsDemo4 />
    <h3><i>.two-rows-theme</i></h3>
    <TabsDemo5 />
    <h3><i>.box-theme</i></h3>
    <TabsDemo2 />
  </div>,
  document.getElementById('root')
);

