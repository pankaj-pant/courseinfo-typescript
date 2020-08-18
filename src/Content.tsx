import React from 'react';

interface Course {
    name: string;
    exerciseCount: number;
}

interface ContentProps {
    courses: Course[];
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
    const {courses} = props;
    const courseElements = courses.map(course => {
        const {name, exerciseCount} = course;

        return(
        <p key={name}>{name} {exerciseCount}</p>
        )
    })
    return(
        <div>
            {courseElements}
        </div>
    );
}

export default Content;