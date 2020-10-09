import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  let array = [
    'Introduction to React Props',
    'Type of Props',
    'Children Props',
    'Destructuring',
    'PropTypes',
    'Default Props',
    'Conditional Rendering',
    'Handling Events',
  ];

  const handleAlert = (name) => {
    alert(`Hi I am an ${name}`);
  };

  return (
    <div className="parent-component">
      <ChildComponent
        title="Introduction to React Props.."
        subTitle="Friday 9 October 2020"
        studentsNumber={10}
        objectProp={{ name: "Hello, I'am an object prop" }}
        videoSeriesAgenda={array}
        handleAlert={handleAlert}
      />
    </div>
  );
}

export default ParentComponent;
