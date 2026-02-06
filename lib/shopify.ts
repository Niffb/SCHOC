import Client from 'shopify-buy';

const domain = import.meta.env.VITE_SHOPIFY_DOMAIN;
const storefrontAccessToken = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!domain || !storefrontAccessToken) {
    console.warn('Shopify domain or access token missing. Please check your .env file.');
}

const client = Client.buildClient({
    domain: domain || 'mock-domain',
    storefrontAccessToken: storefrontAccessToken || 'mock-token',
    apiVersion: '2024-01',
});

export default client;
