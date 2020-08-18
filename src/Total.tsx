import React from 'react';

interface Course {
    name: string;
    exerciseCount: number;
}

interface TotalProps {
    courses: Course[];
}

const Total: React.FC<TotalProps> = (props: TotalProps) => {
    const {courses} = props;
    return(
        <p>
        Number of exercises{" "}
        {courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    )
}

export default Total;