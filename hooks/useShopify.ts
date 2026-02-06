import { useState, useEffect } from 'react';
import client from '../lib/shopify';

export const useShopify = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAllProducts = async () => {
        setLoading(true);
        try {
            const fetchedProducts = await client.product.fetchAll();
            setProducts(fetchedProducts);
            return fetchedProducts;
        } catch (err: any) {
            console.error('Error fetching products from Shopify:', err);
            setError(err.message || 'Failed to fetch products');
            return [];
        } finally {
            setLoading(false);
        }
    };

    return {
        products,
        loading,
        error,
        fetchAllProducts,
        // Add cart methods here easier later
        client,
    };
};
