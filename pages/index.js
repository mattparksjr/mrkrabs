import Link from 'next/link'
import Donut from '../components/donut'
import Layout from '../components/layout'


/* Using Express
const express = require('express');
const app = express();
app.use(express.json());
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});
const client = new PlaidApi(configuration);
app.post('/api/create_link_token', async function (request, response) {
  // Get the client_user_id by searching for the current user
  const user = await User.find(...);
  const clientUserId = user.id;
  const request = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: clientUserId,
    },
    client_name: 'Plaid Test App',
    products: [Products.Auth],
    language: 'en',
    webhook: 'https://webhook.example.com',
    country_codes: [CountryCode.Us],
  };
  try {
    const createTokenResponse = await client.linkTokenCreate(request);
    response.json(createTokenResponse.data);
  } catch (error) {
    // handle error
  }
});*/

export default function Home() {
  return (
    <Layout>
      <main>
        <h1 class="text-4xl text-bold text-blue-600">Dashboard</h1>
        <div class="h-128 w-128">
          <Donut/>
        </div>
        <h1 class="title">
          Read{' '}
          <Link href="/income">
            <a>this page!</a>
          </Link>
        </h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat molestie enim, blandit maximus nisi finibus ut. Vivamus lacinia venenatis tempor. Phasellus eget aliquet eros. Nam finibus iaculis enim, sit amet imperdiet mi aliquam ac. Phasellus nec aliquam sapien, et lacinia lorem. In tristique velit et tempus porttitor. Praesent vel condimentum velit, sed porttitor ante. Curabitur sed aliquet massa, ullamcorper dictum urna. Integer luctus ipsum non nibh faucibus, non blandit nisi tincidunt. Proin ultricies lectus urna, sed pretium turpis egestas vitae. Morbi dapibus accumsan velit non dignissim. Morbi imperdiet vestibulum sapien, et iaculis mauris facilisis a. Fusce vitae molestie ligula. Integer nibh erat, aliquam consequat mattis vitae, mattis vitae tellus.

Sed elementum neque in tortor lobortis facilisis. Nunc aliquet, velit sit amet posuere gravida, urna ligula accumsan ante, nec tincidunt dolor felis vel nibh. Etiam interdum rhoncus felis vulputate pellentesque. Integer sapien metus, egestas at commodo eu, aliquet volutpat ligula. Maecenas pulvinar accumsan libero, at euismod nunc semper non. Cras aliquet ipsum ultrices lectus facilisis feugiat. Duis et est pulvinar, sagittis libero sed, sagittis neque. Morbi diam lectus, ultricies sed placerat eget, consequat id metus. Cras nec egestas lacus, nec auctor metus. Maecenas lorem ipsum, lobortis quis erat in, rhoncus consectetur est.

Donec quis ullamcorper dui. Pellentesque ac eros sollicitudin, pellentesque nunc sit amet, tristique sapien. Praesent eget justo felis. Quisque cursus sodales orci vitae dapibus. Duis cursus interdum nibh, ut iaculis dui vehicula ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis aliquet ante id ipsum sodales porttitor. Aliquam tempus erat sed dictum posuere. Pellentesque et bibendum odio. Sed accumsan est cursus lacus tempus volutpat. Aenean non varius ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vel vestibulum orci, at sodales dui.

Nam molestie neque nunc, sed pellentesque turpis vehicula sed. Aenean suscipit, diam non aliquet ullamcorper, erat velit dictum felis, a lobortis nisl urna ut ligula. Morbi vel justo eu urna rhoncus tincidunt sit amet ut lorem. In fermentum varius ligula, quis pulvinar diam dictum ut. Fusce a magna ut risus vestibulum tempor ut a sem. Maecenas sed imperdiet eros. Aliquam hendrerit, est sit amet aliquet accumsan, sapien enim tincidunt lorem, vitae vestibulum tortor urna a dolor. Donec nec metus sed augue sagittis consectetur. Curabitur scelerisque turpis et nibh rutrum faucibus. Sed feugiat varius egestas.

Aliquam finibus posuere mi sed tempor. In aliquam magna risus, vitae ultricies justo consequat sed. Morbi aliquam pretium scelerisque. Sed semper, nulla ac tempor aliquet, ipsum est pretium massa, vitae volutpat felis ante at risus. Nam eget luctus metus. Fusce venenatis purus ut nibh consectetur accumsan. Phasellus vitae diam eu ligula egestas aliquam. Curabitur rutrum justo in ante consectetur tristique. Maecenas non tempor ex, eget aliquet tortor. Maecenas est massa, sagittis id laoreet vel, molestie vitae odio. Fusce elementum nulla ultrices libero condimentum, ac pretium erat tincidunt. Sed maximus convallis tortor nec faucibus. Nulla tristique tortor tortor, vitae placerat massa sagittis sit amet. Curabitur aliquet, lorem eget dictum fermentum, felis augue sagittis leo, nec semper mauris ante feugiat nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tincidunt est, id pellentesque turpis.
      </main>
    </Layout>
  )
}
