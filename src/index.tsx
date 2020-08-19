import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import Content from './Content';
import Total from './Total';

interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }

interface CoursePartBaseWithDescription extends CoursePartBase {
    description: string;
}
  
interface CoursePartOne extends CoursePartBaseWithDescription {
    name: "Fundamentals";
  }
  
interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
  }
  
interface CoursePartThree extends CoursePartBaseWithDescription {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
  }

interface CoursePartFour extends CoursePartBaseWithDescription {
    name: "TypeScript the hard parts";
}
  
export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    },
    {
      name: "TypeScript the hard parts",
      exerciseCount: 21,
      description: "The tough bits of TS."  
    }
  ];

/*   const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  courseParts.forEach(part => {
    switch(part.name) {
        case 'Fundamentals':
            break;
        case 'Using props to pass data':
            break;
        case 'Deeper type usage':
            console.log(part.description);
            break;     
        default:
            return assertNever(part);
    }
}) */

  return (
    <div>
        <Header courseName={courseName}/>
        <Content courseParts={courseParts}/>
        <Total courseParts={courseParts}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
