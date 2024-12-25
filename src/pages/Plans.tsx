import { plans } from '../data/plans';
import { PageHeader } from '../components/layout/PageHeader';
import { PlanCard } from '../components/plans/PlanCard';

export default function Plans() {
  return (
    <div className="pt-16" id="plans">
      <PageHeader 
        title="Climbing Plans" 
        description="Choose your perfect mountain adventure package" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}