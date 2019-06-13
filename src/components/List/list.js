import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import * as T from "./style";

class List extends Component {
  constructor(props) {
    super(props);
    console.log("List Component - constructor()");
  }

  render() {
    console.log("List Component - render()");
    const { items = [], onRemoveItem, title } = this.props;
    return (
      <ListGroup flush>
        {title && (<ListGroupItem active>{title}</ListGroupItem>)}

        {items.map((item, index) => (
          <ListGroupItem key={index}>
            {item}
            {onRemoveItem && (
              <T.ItemButton color="danger" onClick={() => onRemoveItem(index)}>
                Done
              </T.ItemButton>
            )}
          </ListGroupItem>
        ))}
        {items.length === 0 && (
          <ListGroupItem disabled>No items found</ListGroupItem>
        )}
      </ListGroup>
    );
  }
}

export default List;
