import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign.js'; //using capital even though just a function
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

renderCards() {
  const {
    balance,
    manager,
    minimumContribution,
    requestsCount,
    approversCount
  } = this.props

  const items = [
    {
      header: manager,
      description: 'Address of the Manager',
      meta: 'The manager created this campaign and can request to withdraw funds',
      style: { overflowWrap: 'break-word'}
      //fluid: true
    },
    {
      header: minimumContribution,
      description: 'Minimum contribution in wei',
      meta: 'Minimum contribution to support this campaign'
    },
    {
      header: requestsCount,
      description: 'Requests by Manager',
      meta: 'The number of requests to withdraw funds by the Manager'
    },
    {
      header: approversCount,
      description: 'Number of approvers',
      meta: 'The number of approvers for requests'
    },
    {
      header: web3.utils.fromWei(balance,'ether'),
      description: 'Balance of contributions in ether',
      meta: 'Funds which have been contributed by supporters'
    }
  ];
  return <Card.Group items={items} />;
}


  render() {

    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={5}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
              <a>
                <Button primary>View Requests</Button>
              </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
