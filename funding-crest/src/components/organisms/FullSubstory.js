import React from "react";
import SecondaryHeadlinerTag from "../atoms/SecondaryHeadlinerTag";
import SubstoryHeader from "../atoms/SubstoryHeader";
import SubstoryAuthor from "../atoms/SubstoryAuthor";
import { Link } from 'react-router-dom';

const FullSubstory = ({
  link,
  storyName,
  authorName = "William Burroughs",
  headlinerTagText,
  headlinerTagColor,
  color = "dimgray",
  height = "2px",
}) => {
  return (
    <Link to={link} style={{textDecoration: "none"}} >
      <div>
        <SecondaryHeadlinerTag
          text={headlinerTagText}
          color={headlinerTagColor}
        />
        <SubstoryHeader text={storyName} />
        <SubstoryAuthor text={authorName} />
      </div>
    </Link>
  );
};

export default FullSubstory;
