/**
 * Created by xmityaz on 25.04.16.
 */

import { expect } from 'chai';
import todosReducer from '../../src/reducers/todos';
import * as types from '../../src/constants/todos';

describe('setup reducer', () => {
  it('should return the initial state', () => {
    expect(
      todosReducer(undefined, {})
    ).to.deep.equal([
      {
        text: 'clean dishes',
        completed: false,
        id: 0
      },
      {
        text: 'move cat from the fridge',
        completed: true,
        id: 1
      }
    ]);
  });

  it('should handle ADD_TODO action', () => {
    expect(
      todosReducer(
        [
          {
            text: 'clean dishes',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          payload: 'New action arrived',
        }
      )
    ).to.deep.equal([
      {
        text: 'clean dishes',
        completed: false,
        id: 0
      },
      {
        text: 'New action arrived',
        completed: false,
        id: 1
      }
    ]);
  });

  it('should handle COMPLETE_TODO', () => {
    expect(
      todosReducer(
        [
          {
            text: 'clean dishes',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.COMPLETE_TODO,
          payload: 0,
        }
      )
    ).to.deep.equal([
      {
        text: 'clean dishes',
        completed: true,
        id: 0
      }
    ]);
  });
});
