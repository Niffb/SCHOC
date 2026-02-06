import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Store, Globe, Gift } from 'lucide-react';

interface StoreLocation {
  name: string;
  address?: string;
}

interface CityStores {
  city: string;
  province: string;
  stores: StoreLocation[];
}

const StoreLocator: React.FC = () => {
  const storesByCity: CityStores[] = [
    {
      city: "Airdrie",
      province: "AB",
      stores: [
        { name: "Safeway", address: "Tower Lane Mall" }
      ]
    },
    {
      city: "Banff",
      province: "AB",
      stores: [
        { name: "Banff IGA", address: "318 Marten St." }
      ]
    },
    {
      city: "Calgary",
      province: "AB",
      stores: [
        { name: "Community Natural Foods", address: "4 locations: Crowfoot NW, Downtown, Chinook LRT, & Seton SE" },
        { name: "Divine Mine", address: "Avenida Mall (South)" },
        { name: "Elysian Alchemy", address: "Inglewood (SE)" },
        { name: "IGA", address: "Lakeview (SW)" },
        { name: "MarketSpot", address: "The Core (DT Calgary)" },
        { name: "Poke Acupuncture", address: "Kensington NW" },
        { name: "Safeway Aspen Ldg.", address: "SW" },
        { name: "Safeway Beacon Hts", address: "NW" },
        { name: "Safeway Beltline", address: "DT" },
        { name: "Safeway Beddington Square", address: "NW" },
        { name: "Safeway Bonavista", address: "SE" },
        { name: "Safeway Crowfoot", address: "NW" },
        { name: "Safeway Dalhousie", address: "NW" },
        { name: "Safeway Garrison Woods", address: "SW" },
        { name: "Safeway Glenmore Lndg", address: "SW" },
        { name: "Safeway Kensington", address: "NW" },
        { name: "Safeway Market Mall", address: "NW" },
        { name: "Safeway Mission", address: "DT" },
        { name: "Safeway Southcentre", address: "SE" },
        { name: "Safeway South Trail (130 Ave)", address: "SE" },
        { name: "Safeway Thorncliffe", address: "NW" },
        { name: "Safeway Westhills", address: "SW" },
        { name: "Safeway Woodbine", address: "SW" },
        { name: "Sobeys Bridlewood", address: "SW" },
        { name: "Sobeys Cranston", address: "SE" },
        { name: "Sobeys Mahogany", address: "SE" },
        { name: "Sobeys Mckenzie Towne", address: "SE" },
        { name: "Sobeys Nolan Hill", address: "NW" },
        { name: "Sobeys Strathcona Square", address: "SW" },
      ]
    },
    {
      city: "Canmore",
      province: "AB",
      stores: [
        { name: "Canmore Tea Co." },
        { name: "Nutters Everyday Naturals" },
        { name: "The Olde Tyme Candy Shoppe Ltd.", address: "Main Street" },
        { name: "Rusticana Grocery", address: "Main Street" },
        { name: "Safeway" }
      ]
    },
    {
      city: "Cochrane",
      province: "AB",
      stores: [
        { name: "Nutters Everyday Naturals" },
        { name: "Safeway" }
      ]
    },
    {
      city: "Drumheller",
      province: "AB",
      stores: [
        { name: "Four Crows Market" }
      ]
    },
    {
      city: "Edmonton",
      province: "AB",
      stores: [
        { name: "Community Natural Foods", address: "Old Strathcona area" }
      ]
    },
    {
      city: "Lethbridge",
      province: "AB",
      stores: [
        { name: "Nutters Everyday Naturals" }
      ]
    },
    {
      city: "Okotoks",
      province: "AB",
      stores: [
        { name: "Sheep River Market" }
      ]
    },
    {
      city: "Toronto",
      province: "ON",
      stores: [
        { name: "The Science of Chocolate", address: "purchase online or in shop" }
      ]
    }
  ];

  const onlineStores = [
    { name: "Baskits.com", description: "Purveyors of Fine Gifts" }
  ];

  return (
    <div className="min-h-screen bg-[#f9f5e8] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-8xl text-[#4a2c2a] mb-8 text-center"
        >
          Find a Store
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-[#6d4c41] text-lg mb-12 max-w-3xl mx-auto"
        >
          Check back soon as I announce new store listings! OR please contact me if you have a store and would like to carry my chocolate!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-center text-[#4a2c2a] font-display text-xl mb-16"
        >
          Find a selection of my bars, cups, & special edition products at:
        </motion.p>

        {/* Store Listings by City */}
        <div className="space-y-8 mb-16">
          {storesByCity.map((cityData, cityIndex) => (
            <motion.div
              key={cityData.city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + cityIndex * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#d98e46]/20"
            >
              <div className="bg-[#2b1d1a] px-6 py-4 flex items-center gap-3">
                <MapPin className="text-[#d98e46]" size={20} />
                <h2 className="font-display text-2xl text-[#f9f5e8]">
                  {cityData.city}, {cityData.province}
                </h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-3">
                  {cityData.stores.map((store, storeIndex) => (
                    <div
                      key={storeIndex}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#f9f5e8] transition-colors"
                    >
                      <Store className="text-[#d98e46] mt-1 flex-shrink-0" size={16} />
                      <div>
                        <span className="text-[#2b1d1a] font-medium">{store.name}</span>
                        {store.address && (
                          <span className="text-[#6d4c41] text-sm ml-1">({store.address})</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Online Gift Baskets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-[#d98e46] to-[#c47d3a] rounded-2xl p-8 text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="text-[#2b1d1a]" size={28} />
            <h2 className="font-display text-3xl text-[#2b1d1a]">Online Gift Baskets</h2>
          </div>
          {onlineStores.map((store, i) => (
            <div key={i} className="text-[#2b1d1a]">
              <span className="font-bold text-lg">{store.name}</span>
              <span className="ml-2 opacity-80">— {store.description}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StoreLocator;