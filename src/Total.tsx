import React from 'react';
import {CoursePart} from './index';

const Total: React.FC<{courseParts: CoursePart[]}> = (props) => {
    const {courseParts} = props;
    return(
        <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    )
}

export default Total;