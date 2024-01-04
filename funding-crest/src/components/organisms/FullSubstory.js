import React from 'react';
import SecondaryHeadlinerTag from '../atoms/SecondaryHeadlinerTag';
import SubstoryHeader from '../atoms/SubstoryHeader';
import SubstoryAuthor from "../atoms/SubstoryAuthor"

const FullSubstory = ({storyName, authorName = "William Burroughs", headlinerTagText, headlinerTagColor,  color = "dimgray", height = "2px" }) => {
  return (

    <div>
        <SecondaryHeadlinerTag text = {headlinerTagText} color={headlinerTagColor} />
        <SubstoryHeader text = {storyName} />
        <SubstoryAuthor text = {authorName} />
    </div>


  );
};

export default FullSubstory;