import React from "react";
import axios from "axios";

import Item from "../Item/Item";
// import { getItems } from "../../actions/items.action";

// ---

export default class Items extends React.Component {
  state = { items: {} }

  componentDidMount() {
    axios.get("https://shop-62b9c.firebaseio.com/items.json")
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { items } = this.state;

    return (
      <ul className="items">
        {Object.entries(items).map(([i, item]) => {
          return (
            <Item
              key={i}
              item={item}
            />
          );
        })}
      </ul>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     items: state.todo.list
//   };
// };

// const mapDispatchToProps = {
//   getItems
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Items);


// ---


// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './ToDo.scss';
// import Container from '../container/Container';
// import Controls from '../controls/Controls';
// import ListItem from '../list-item/ListItem';
// import { getTasks, addTask, changeTask, deleteTask } from '../../actions/todo.actions';
// import { connect } from 'react-redux';

// const initialinputValue = '';

// const ToDo = ({ list, getTasks, addTask, changeTask, deleteTask }) => {

//   const [inputValue, setInputValue] = useState(initialinputValue);

//   const fetchData = () => {
//     getTasks();
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleChange = e => {
//     setInputValue(e.target.value);
//   };

//   const addItem = () => {
//     if (inputValue === '' || inputValue.length < 2) {
//       alert('Please, enter at least 2 characters');
//     } else {
//       addTask(inputValue);
//       setInputValue('');
//     }
//   };

//   const onKeyDown = (e) => {
//     if (e.keyCode === 13) {
//       addItem();
//     }
//   };

//   const changeItem = (newTask) => {
//     changeTask(newTask);
//   };

//   const deleteItem = (e, id) => {
//     e.stopPropagation();
//     deleteTask(id);
//   };

//   return (
//     <Container>
//       <div className="ToDo">
//         <h1>Todo App</h1>
//         <Controls inputValue={inputValue} onValueChange={handleChange} onKeyDown={onKeyDown}
//           onAddItem={addItem}></Controls>
//         <ul className="ToDo-list">
//           {list.map((item) => {
//             return <ListItem key={item.id} item={item} onChange={changeItem} onEditText={changeItem}
//               onDelete={deleteItem}></ListItem>;
//           })}
//         </ul>
//       </div> </Container>

//   );
// };

// ToDo.propTypes = {
//   inputValue: PropTypes.string,
//   list: PropTypes.array
// };

// const mapStateToProps = state => {
//   return {
//     items: state.todo.list
//   };
// };

// const mapDispatchToProps = {
//   getItems
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
