// .\src\components\sections\PricingContent.tsx
'use client';
import Script from 'next/script';
import * as React from 'react';

export default function PricingContent() {
  // State to manage loading/rendering of the Stripe table
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    // Ensure this runs only on the client side
    setIsClient(true);
  }, []);

  return (
    // Add styling for centering and width if needed
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-charcoal dark:text-platinum mb-8">
        Choose Your Plan
      </h2>
      {isClient && ( // Conditionally render Stripe component on client
        <>
          <Script async src="https://js.stripe.com/v3/pricing-table.js" />
          <stripe-pricing-table 
            pricing-table-id="prctbl_1TEajvFtOsQQM30wVWxR3L6H"
            publishable-key="pk_live_51TEZSEFtOsQQM30wGZHRYHZ24wlH2UGnU23aGHRmnxpt10cDzmKk1QbsNza4h468OwKl4WDLoulLkbYg59gYO9Pm00NHSF0Nel" // Replace with your actual Key
          />
        </>
      )}
      {!isClient && ( // Optional: Show a placeholder while loading
        <div className="text-center p-10 text-gray-500">Loading pricing...</div>
      )}
    </div>
  );
}
