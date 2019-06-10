import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PaintingListItem from "./PaintingListItem";

const PaintingsList = props => (
  <div className="ui narrow container">
    <div className="ui relaxed celled list">
      {props.paintings.map(painting => {
        return (
          <Link to={`/paintings/${painting.id}`}>
          <PaintingListItem
            selectPainting={props.selectPainting}
            painting={painting}
          />
          </Link>
        )
      })}
    </div>
  </div>
);

export default PaintingsList;

