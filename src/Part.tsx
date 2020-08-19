import React from 'react';
import {CoursePart} from './index';

const Part: React.FC<{courseParts: CoursePart[]}> = (props) => {
    const {courseParts} = props;

    const assertNever = (value: never): never => {
        throw new Error(
          `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
      };
    
   const print = courseParts.map(part => {
        switch(part.name) {
            case 'Fundamentals':
                //console.log (part.name, part.description, part.exerciseCount);
                return <p key={part.name}>{part.name} {part.description} {part.exerciseCount}</p>;
            case 'Using props to pass data':
                //console.log(part.name, part.groupProjectCount, part.exerciseCount)
                return <p key={part.name}>{part.name} {part.groupProjectCount} {part.exerciseCount}</p>;
            case 'Deeper type usage':
                //console.log(part.name, part.description, part.exerciseCount, part.exerciseSubmissionLink);
                return <p key={part.name}>{part.name} {part.description} {part.exerciseCount} {part.exerciseSubmissionLink}</p>;    
            case 'TypeScript the hard parts':
                return <p key={part.name}>{part.name} {part.description} {part.exerciseCount}</p>;
            default:
                return assertNever(part);
        }
    })

    return(
        <div>
            {print}
        </div>
    )
}

export default Part;