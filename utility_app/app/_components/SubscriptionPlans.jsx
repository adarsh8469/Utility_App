'use client'
import React, { useState } from 'react'
import Script from 'next/script'
import { Plus } from 'lucide-react'


const plans = [
  {
    name: 'Light',
    heading: 'Essential upkeep for a tidy home',
    monthlyPrice: 2,
    description:
      'Perfect for those who need minimal help—includes basic cleaning of key living spaces like bedrooms, bathrooms, and kitchen once a week.',
    bg: 'bg-gray-100 text-black',
  },
  {
    name: 'Basic',
    heading: 'Consistent care for a clean, comfortable space',
    monthlyPrice: 10,
    description:
      'Includes all Light Plan services plus floor mopping, dusting of surfaces, trash disposal, and bi-weekly deep cleaning of kitchen and bathroom.',
    bg: 'bg-yellow-400 text-black',
  },
  {
    name: 'Universal',
    heading: 'Comprehensive housekeeping for total peace of mind',
    monthlyPrice: 18,
    description:
      'All-inclusive service covering everything in Light and Basic plans, plus laundry, linen changing, interior window cleaning, and priority scheduling—available multiple times per week.',
    bg: 'bg-red-500 text-white',
  },
]

export default function SubscriptionPlans() {
  const [billing, setBilling] = useState('Month')
  const [currency, setCurrency] = useState('USD')

  const exchangeRates = {
    USD: 1,
    EUR: 0.9,
    INR: 83,
  }

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    INR: '₹',
  }

  const currencies = ['USD', 'EUR', 'INR']

  const toggleCurrency = () => {
    const currentIndex = currencies.indexOf(currency)
    const nextIndex = (currentIndex + 1) % currencies.length
    setCurrency(currencies[nextIndex])
  }

  const formatPrice = (price) => {
    const converted = price * exchangeRates[currency]
    return `${currencySymbols[currency]}${converted.toFixed(2)}`
  }

  return (
    <div className="bg-white flex flex-col items-center justify-start py-16 px-4 sm:px-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        A transformative <br /> Home Service subscription!
      </h1>

      {/* Billing and Currency Toggle */}
      <div className="flex space-x-2 mb-10">
        <div className="flex space-x-1 bg-gray-200 rounded-full p-1">
          {['Month', 'Year'].map((period) => (
            <button
              key={period}
              onClick={() => setBilling(period)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                billing === period
                  ? 'bg-red-500 text-white'
                  : 'text-gray-700 hover:bg-white'
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Currency Toggle */}
        <button
          onClick={toggleCurrency}
          className="ml-4 px-5 py-2 rounded-full bg-gray-200 text-sm font-medium text-gray-800 hover:bg-gray-300 transition"
        >
          {currency}
        </button>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {plans.map((plan, index) => {
          const basePrice =
            billing === 'Month'
              ? plan.monthlyPrice
              : plan.monthlyPrice * 12

          return (
            <div
              key={index}
              className={`relative rounded-2xl p-6 min-h-[400px] ${plan.bg} transition-shadow hover:shadow-xl flex flex-col justify-between`}
            >
              <div className="absolute top-4 right-4">
                <Plus size={20} />
              </div>
              <span className="inline-block text-xs font-semibold mb-3 bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm">
                {plan.name}
              </span>
              <h2 className="text-4xl font-bold mb-2">
                {formatPrice(basePrice)}
              </h2>
              <h3 className="text-md font-semibold mb-4">{plan.heading}</h3>
              <p className="text-sm mb-6">{plan.description}</p>

              <button className="mt-auto bg-black text-white text-lg font-medium px-4 py-2 rounded-lg transition active:scale-95 active:bg-gray-800">
                <b>Buy Now</b>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
