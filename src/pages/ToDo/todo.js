import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  Col,
  Container,
  Row,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

import List from '../../components/List';
import * as Action from '../../modules/itemsAction';
import * as ColorAction from '../../modules/colorsAction';


import * as T from './style';

class ToDo extends Component {
  constructor(props) {
    super(props);
    console.log('ToDo Page - constructor()');

    this.state = {
      item: '',
      color: 'black',
    };
  }

  /**
   * Saves the value to state
   *
   * @param {string} item
   * Value that needs to be saved in state as 'item'
   */
  handleItemChange = item => {
    console.log('ToDo Page - handleChange()');
    this.setState({
      item: item,
    });
  };

  /**
   * Triggers the addItem action via props and clears
   * value of the textfield.
   */
  onSaveItem = () => {
    const { item } = this.state;
    console.log('ToDo Page - onSaveItem()');
    if (item && item.trim()) {
      this.props.addItem(item);
      this.handleItemChange('');
    }
  };

  /**
   * Sends the index of item that needs to be remove to the 
   * removeItem action via props.
   *
   * @param {number} index
   * Array index of item in the list that needs to be remove
   */
  onRemoveItem = (index) => {
    console.log('ToDo Page - onRemoveItem()');
    this.props.removeItem(index);
  };

  changeColor = (e) => {
    const selectedColor = e.target.value;
    
    this.props.setColor(selectedColor);
    // this.setState({
    //   color: selectedColor
    // });

  }

  render() {
    console.log('ToDo Page - render()');
    const { items, color } = this.props;
    const { item } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <select onChange={this.changeColor} value={this.state.value}>
              <option value="red">RED</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col>
            <T.Title color={color}>React-Redux to do list</T.Title>
          </Col>
        </Row>
        <Row>
          <Col sm='6'>
            <InputGroup>
              <Input
                onChange={e => this.handleItemChange(e.target.value)}
                value={item}
              />
              <InputGroupAddon addonType='append'>
                <Button
                  color='primary'
                  onClick={() => this.onSaveItem()}
                  disabled={!item || !item.trim()}
                >
                  Add Item
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>

          <Col sm='6'>
            <List
              title="List of items in Redux"
              items={items}
              onRemoveItem={this.onRemoveItem}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ items, color }) => {
  console.log('ToDo Page - mapStateToProps()');
  return {
    items,
    color,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('ToDo Page - mapDispatchToProps()');
  return bindActionCreators(Action, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
