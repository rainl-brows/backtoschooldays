import { PricingCard } from "./components/PrincingCard";

const plans = [
  {
    plan: "Standard",
    price: "100",
    features: [
      "50,000 Requests",
      "4 contributors",
      "Up to 3 GB storage space",
    ],
  },
  {
    plan: "Pro",
    price: "200",
    features: [
      "100,000 Requests",
      "7 contributors",
      "Up to 6 GB storage space",
    ],
    isFeatured: true,
  },
  {
    plan: "Expert",
    price: "500",
    features: [
      "200,000 Requests",
      "11 contributors",
      "Up to 10 GB storage space",
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen w-full p-4 flex items-center justify-center bg-gray-900">
      <div className="flex flex-col sm:flex-row gap-1 w-full max-w-5xl justify-center items-center">
        {plans.map((plan) => (
          <PricingCard key={plan.plan} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default App;
