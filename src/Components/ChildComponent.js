import React from 'react';

const ChildComponent = (props) => {
  console.log(props);
  return (
    <div>
      {props.handleAlert(props.title)}
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
      <h4>Students watching the video: {props.studentsNumber}</h4>
      <p>{props.objectProp.name}</p>
      <h4>Video Series Agenda:</h4>
      <ul>
        {props.videoSeriesAgenda.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
