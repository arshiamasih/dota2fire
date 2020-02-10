import React from 'react';
import { render } from '@testing-library/react';
import App from '../Components/App';
import Renderer from 'react-test-renderer'
import configureStore from '../configureStore';
import { Provider } from 'react-redux'

const mockStore = configureStore

describe('<App/> ', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore(
      {
      teams: {
          apiStatus: {
            teams: 'success',
            players: 'success'
          },
          modalExpand: false,
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
        }
      }
    });
    component = Renderer.create(
      <Provider store={store}>
        <App/>
      </Provider>
    );
  });

  it('should match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  })
 
})