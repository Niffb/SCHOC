import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Anon.",
      location: "Calgary, AB",
      date: "Nov. 2021",
      text: "We bought two cups, three bars... all gone over a weekend. I have severe allergies to so many things and I absolutely lit up when I saw the display of these.. they're local, well-priced, and taste AMAZING. they taste real, and not too sweet, but not bitter at all either. better than a lot of the alternatives out there. Amazing amazing amazing buying more hopefully soon!"
    },
    {
      name: "Leanne Z.",
      location: "Calgary, AB",
      date: "Nov. 2020",
      text: "I have tasted three products so far. Excellent quality! It's amazing that the dark chocolate is so smooth. Love the salt dusting... The oatmilk crunch is divine!.. I should have left the coconut butter cups at room temperature for a bit before I cut into it, to share. I made a mess but it was delicious. Not greasy like some \"Keto\" chocolate products."
    },
    {
      name: "L. Lawson",
      location: "Regina, SK",
      date: "Mar. 2020",
      text: "I received my Shawcolat today, and just tasted the dark/orange one, and the oatmilk one. Holy s**t!! AHHHMMMMAAZING!!!!!! It's so creamy and not super sweet. I'll be sharing with Riley and I'm sure she'll love it as well. Thank you for the freeby you sent. Your packaging is great as well. I'll be ordering more for sure! Thanks so much."
    },
    {
      name: "J. Hula",
      location: "Port Coquitlam, BC",
      date: "Feb. 2020",
      text: "Your bars are excellent. You are very talented. I can really appreciate that you are a chocolate maker and very good at your craft. There are a few people here in BC that I've come across making oat milk chocolate, but it's not nearly as smooth and creamy as yours. Your dark chocolate is incredible, and all the combinations too... sorry, I keep gushing, but your bars are amazing. I just love that they aren't too sweet either. Just perfect."
    },
    {
      name: "S. Kolb",
      location: "Calgary, AB",
      date: "July 2019",
      text: "ShawZ Chocolates are the best chocolates I have ever tasted. Each variety is filled with rich flavour, healthy goodness and with the perfect melt in your mouth experience. The coconut butter cups are my favourite and worth the price. I love chocolate and also my health...ShawZ Chocolates has both in mind when making this product. Thank you!"
    },
    {
      name: "K. Tansey",
      location: "Montreal, QC",
      date: "",
      text: "I can happily confirm that these are simply delicious treats. I think I have now tried all of these delightful confections and I loved them all. I first tasted this chocolate in Calgary and was so smitten, I placed an order to be sent to Montreal so I could try them all. Well worth it. My current favourites are the Coconut Butter Cups but it was a challenge to choose just one. I am still debating because I am convinced that all ShawZ Chocolates are sensational—they are rich, smooth, beautifully hand-crafted and so well packaged. My recommendations are: the Coconut Butter Cups, the Bold Dark with Sea salt, the Dark with Candied Orange Peel, the Bold Dark Crunch, and the Oatmilk S'mores. Enjoy!"
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f5e8] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-8xl text-[#4a2c2a] mb-8 text-center"
        >
          Testimonials
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-[#6d4c41] text-lg mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          On this page, I'll be adding testimonials as they come in. If you'd like to share your experience with ShawZ Chocolate, I welcome you to send me a message on the contact page, or via email. Thanks! <span className="italic">— Ian</span>
        </motion.p>

        <div className="space-y-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#2b1d1a] text-[#f9f5e8] p-8 md:p-10 rounded-3xl relative"
            >
              {/* Z Decorative Element */}
              <div className="absolute -top-4 -left-2 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-[#d98e46] rounded-full flex items-center justify-center">
                <span className="font-display text-xl md:text-2xl text-[#2b1d1a] font-bold">Z</span>
              </div>

              <div className="pl-6 md:pl-8">
                <p className="text-base md:text-lg leading-relaxed mb-6 italic opacity-90">
                  "{review.text}"
                </p>
                <div className="flex flex-wrap items-center gap-2 text-[#d98e46]">
                  <span className="font-display text-lg md:text-xl tracking-wider">— {review.name}</span>
                  <span className="opacity-60">{review.location}</span>
                  {review.date && <span className="opacity-60">• {review.date}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;