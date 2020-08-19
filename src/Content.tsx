import React from 'react';
import {CoursePart} from './index';
import Part from './Part';


const Content: React.FC<{courseParts: CoursePart[]}> = (props) => {
    const {courseParts} = props;
    return(
        <Part courseParts={courseParts}/>
    );
}


export default Content;