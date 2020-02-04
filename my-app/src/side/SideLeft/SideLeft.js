import React, { PureComponent } from 'react';
import SideLeftShops from './SideLeftShops/SideLeftShops';
import SideLeftShopsShop from './SideLeftShops/SideLeftShopsShop/SideLeftShopsShop';


class SideLeft extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      marketplaces: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMarketplaces()
      .then((marketplaces) => {
        this.setState({
          marketplaces,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  fetchMarketplaces() {
    return fetch('http://localhost:3001/marketplaces')
      .then((res) => res.json());
  }

  render() {
    const {marketplaces, loading} = this.state;

    return (
        <div>
          <div>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <SideLeftShops marketplaces={marketplaces}/>
            )}
          </div>
        </div>
    );
  }
}

export default SideLeft;
