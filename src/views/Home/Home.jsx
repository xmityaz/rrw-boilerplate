/**
 * Created by xmityaz on 22.04.16.
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo, removeTodo, completeTodo, clearCompleted } from '../../actions/todos';
import TodoItem from '../../components/Home/TodoItem/TodoItem';
import Footer from '../../components/Home/Footer/Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../../constants/filters';
import styles from './Home.css';

const propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const filterHandlers = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: todo => todo.completed,
  [SHOW_ACTIVE]: todo => !todo.completed
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);

    this.state = { filter: SHOW_ALL };
  }

  onKeyDown(e) {
    if (e.key === 'Enter' && e.target.value) {
      this.props.actions.addTodo(e.target.value);
      e.target.value = '';
    }
  }

  onFilterChange(filter) {
    this.setState({ filter })
  }

  render() {
    const filteredTodos = this.props.todos.filter(filterHandlers[this.state.filter]);

    return (
      <div className={styles.home}>
        <input
          onKeyDown={this.onKeyDown}
          className={styles.todoInput}
          placeholder="What needs to be done?"
        />

        {filteredTodos.map(item =>
          <TodoItem
            completed={item.completed}
            key={item.id}
            onComplete={this.props.actions.completeTodo.bind(null, item.id)}
            onRemove={this.props.actions.removeTodo.bind(null, item.id)}
          >{item.text}</TodoItem>
        )}

        <Footer
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
          onClearCompleted={this.props.actions.clearCompleted}
        />
      </div>
    )
  }
}

Home.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addTodo,
      removeTodo,
      completeTodo,
      clearCompleted
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
