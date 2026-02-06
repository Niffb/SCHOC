import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, MapPin, Globe, AlertCircle } from 'lucide-react';

const Delivery: React.FC = () => {
  const shippingRates = [
    { region: "Alberta", flatRate: "$9.95", freeOver: "$75", duration: "1-2 business days" },
    { region: "BC & Sask.", flatRate: "$14.95", freeOver: "$100", duration: "1-4 business days" },
    { region: "MB & ON", flatRate: "$19.95", freeOver: "$125", duration: "2-7 business days" },
    { region: "TROC", flatRate: "$24.95", freeOver: "$150", duration: "3-8 business days" },
  ];

  return (
    <div className="min-h-screen bg-[#f9f5e8] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-8xl text-[#4a2c2a] mb-16 text-center"
        >
          Delivery Options
        </motion.h1>

        {/* Calgary Local Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#2b1d1a] rounded-3xl p-8 md:p-10 mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-[#d98e46]" size={28} />
            <h2 className="font-display text-3xl md:text-4xl text-[#f9f5e8]">
              Calgary Customers
            </h2>
          </div>
          <p className="text-[#d98e46] text-xl mb-8 font-display">FREE delivery or pickup:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#4a2c2a]/50 rounded-2xl p-6 border border-[#d98e46]/30">
              <div className="flex items-center gap-3 mb-3">
                <Package className="text-[#d98e46]" size={24} />
                <h3 className="font-display text-xl text-[#f9f5e8]">Option 1: Pickup</h3>
              </div>
              <p className="text-[#f9f5e8]/80">
                Pick up in <span className="text-[#d98e46] font-medium">Dalhousie NW</span> ($18 min order)
              </p>
            </div>

            <div className="bg-[#4a2c2a]/50 rounded-2xl p-6 border border-[#d98e46]/30">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="text-[#d98e46]" size={24} />
                <h3 className="font-display text-xl text-[#f9f5e8]">Option 2: Free Delivery</h3>
              </div>
              <p className="text-[#f9f5e8]/80">
                Free delivery on <span className="text-[#d98e46] font-medium">$40 min order</span>; your order delivered in 1 to 3 business days.
              </p>
            </div>
          </div>

          <p className="text-[#f9f5e8]/60 text-sm mt-6 text-center italic">
            Select option at checkout.
          </p>
        </motion.div>

        {/* Canadian Shipping Rates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-[#d98e46]/20 overflow-hidden mb-10"
        >
          <div className="bg-gradient-to-r from-[#d98e46] to-[#c47d3a] px-8 py-6">
            <div className="flex items-center gap-3">
              <Truck className="text-[#2b1d1a]" size={28} />
              <h2 className="font-display text-3xl text-[#2b1d1a]">
                Shipping Offer for Canadian Orders
              </h2>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#d98e46]/30">
                    <th className="text-left py-4 px-4 font-display text-lg text-[#4a2c2a]">Region</th>
                    <th className="text-center py-4 px-4 font-display text-lg text-[#4a2c2a]">Flat Rate</th>
                    <th className="text-center py-4 px-4 font-display text-lg text-[#4a2c2a]">Free On Orders Over</th>
                    <th className="text-center py-4 px-4 font-display text-lg text-[#4a2c2a]">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {shippingRates.map((rate, i) => (
                    <tr key={i} className="border-b border-[#f9f5e8] hover:bg-[#f9f5e8]/50 transition-colors">
                      <td className="py-4 px-4 font-medium text-[#2b1d1a]">{rate.region}</td>
                      <td className="py-4 px-4 text-center text-[#6d4c41]">{rate.flatRate}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-[#d98e46]/20 text-[#4a2c2a] px-3 py-1 rounded-full font-medium">
                          {rate.freeOver}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center text-[#6d4c41]">{rate.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[#6d4c41] text-sm mt-6 text-center italic">
              Website orders are usually processed next business day.
            </p>
          </div>
        </motion.div>

        {/* US & International Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#f9f5e8] border-2 border-[#6d4c41]/30 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="text-[#6d4c41]" size={24} />
            <h3 className="font-display text-2xl text-[#4a2c2a]">US and International Orders</h3>
          </div>
          <div className="flex items-center justify-center gap-2 text-[#6d4c41]">
            <AlertCircle size={18} />
            <p>Not available at this time due to international licensing and permitting costs.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Delivery;