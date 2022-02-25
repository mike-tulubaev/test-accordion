import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const headerStyle: any = {
  'backgroundColor': '#eee',
  'width': '100%',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid',
  'height': '150px'
}

const footerStyle: any = {
  'backgroundColor': '#333',
  'width': '100%',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid',
  'height': '150px'
}

const collapseStyle: any = {
  'backgroundColor': '#aaa',
  'width': '100%',
  'alignItems': 'start',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid',
}

const accordionHeadingStyle: any = {
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
};

const accordionWrapperStyle = {
  width: '50%',
};

const arrowStyle = {
  background: 'url(/icons/arrow-down.svg)',
  width: '16px',
  height: '16px',
  display: 'block',
  marginTop: 'auto',
  marginBottom: 'auto'
};

const content = [{
  heading: "This is a heading1",
  body: "This is a sample body1. This is meant to be alternating between appearing and disappearing whenever you click on the heading1"
},
{
  heading: "This is a heading2",
  body: "This is a sample body2. This is meant to be alternating between appearing and disappearing whenever you click on the heading2"
},
{
  heading: "This is a heading3",
  body: "This is a sample body3. This is meant to be alternating between appearing and disappearing whenever you click on the heading3"
}];

const App = () => {
  const [expanded, setExpanded] = useState<boolean[]>(content.map(() => false));

  const handleClick = (idx: number) => {
    const newValue = expanded.map((v, i) => i === idx ? !v : v);

    setExpanded(newValue);
  }

  return (
    <div>
    <div style={headerStyle} className="headerPage"></div>
    <div style={collapseStyle} className="bodyPage">
    {content.map((val, idx) => <div className={expanded[idx] ? 'item__expanded' : undefined} style={accordionWrapperStyle} key={idx}>
        <h2 style={accordionHeadingStyle} onClick={() => handleClick(idx)}>
          {val.heading}
          <span className="arrow" style={arrowStyle}></span>
        </h2>
        <div className="content" style={{ maxHeight: expanded[idx] ? '100px' : '0px' }}>
          {val.body}
        </div>
      </div>)}
    </div>
    <div style={footerStyle} className="footerPage"></div>
    </div>
  );
}

export default App;
