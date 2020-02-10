import React from 'react';
import ButtonGroup from '../Components/ButtonGroup';
import Renderer from 'react-test-renderer'
import configureStore from '../configureStore';
import { Provider } from 'react-redux'
import { getGameNum } from '../reducer/actions'

const mockStore = configureStore

describe('<ButtonGroup/> ', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore(
      {
      teams: {
        teams: [{team_id: 2586976,
          rating: 1614.41,
          wins: 547,
          losses: 301,
          last_match_time: 1581265389,
          name: "OG",
          tag: "OG",
          logo_url: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2586976.png"
        }],
        gameNum: {
          n: 16,
          num: 32,
          start: false
        },
        getGameNum: ()=> {},
        getTeams: ()=> {}
    }});

    store.dispatch = jest.fn()
    component = Renderer.create(
      <Provider store={store}>
        <ButtonGroup/>
      </Provider>
    );
  });

  it('should match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  })

  // it('should dispatch an action on button click', () => {
  //   Renderer.act(() => {
  //     component.root[0].findByType('button').props.onClick();
  //   });
  //   expect(store.dispatch).toHaveBeenCalledTimes(1);
  //   expect(store.dispatch).toHaveBeenCalledWith(
  //     getGameNum({ payload: {n: 0, num: 0, start: true} })
  //   );
  // });
})