import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
    render () {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => {
                        //return  <ComponentName propName = {value}/>
                        // propName olan business, const business = {}
                        // value olan business, const business'in value'lari
                        return <Business key={business.id} business={business} />
                    })
                }
            </div>
        );
    }
}
export default BusinessList;