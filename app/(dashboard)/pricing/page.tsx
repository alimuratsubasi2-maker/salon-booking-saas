import { checkoutAction } from '@/lib/payments/actions';
import { Check } from 'lucide-react';
import { getStripePrices, getStripeProducts } from '@/lib/payments/stripe';
import { SubmitButton } from './submit-button';

// Prices are fresh for one hour max
export const revalidate = 3600;

async function loadStripe() {
  // Stripe anahtarı girilmemişse sayfa yine de varsayılan fiyatlarla açılsın
  try {
    return await Promise.all([getStripePrices(), getStripeProducts()]);
  } catch {
    return [[], []] as const;
  }
}

export default async function PricingPage() {
  const [prices, products] = await loadStripe();

  const basePlan = products.find((product) => product.name === 'Base');
  const plusPlan = products.find((product) => product.name === 'Plus');

  const basePrice = prices.find((price) => price.productId === basePlan?.id);
  const plusPrice = prices.find((price) => price.productId === plusPlan?.id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Salonunuza uygun paketi seçin</h1>
        <p className="mt-3 text-lg text-gray-500">
          Tüm paketlerde 14 gün ücretsiz deneme. İstediğiniz an iptal edebilirsiniz.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <PricingCard
          name="Başlangıç"
          price={basePrice?.unitAmount || 49900}
          trialDays={basePrice?.trialPeriodDays || 14}
          features={[
            '1 personel',
            'Sınırsız online randevu',
            'Müşteri kartları',
            'Aylık 300 SMS hatırlatma',
            'E-posta desteği'
          ]}
          priceId={basePrice?.id}
        />
        <PricingCard
          name="Pro"
          highlighted
          price={plusPrice?.unitAmount || 89900}
          trialDays={plusPrice?.trialPeriodDays || 14}
          features={[
            'Başlangıç paketindeki her şey',
            '10 personele kadar',
            'WhatsApp hatırlatma',
            'Kasa, prim ve aylık raporlar',
            '7/24 WhatsApp destek'
          ]}
          priceId={plusPrice?.id}
        />
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  trialDays,
  features,
  priceId,
  highlighted = false
}: {
  name: string;
  price: number;
  trialDays: number;
  features: string[];
  priceId?: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 bg-white border ${
        highlighted ? 'border-rose-400 shadow-lg ring-1 ring-rose-200' : 'border-gray-200'
      }`}
    >
      {highlighted && (
        <span className="inline-block mb-3 text-xs font-semibold bg-rose-100 text-rose-600 rounded-full px-3 py-1">
          En çok tercih edilen
        </span>
      )}
      <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-4">{trialDays} gün ücretsiz deneme</p>
      <p className="text-4xl font-medium text-gray-900 mb-6">
        ₺{(price / 100).toLocaleString('tr-TR')}{' '}
        <span className="text-xl font-normal text-gray-600">/ ay</span>
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <form action={checkoutAction}>
        <input type="hidden" name="priceId" value={priceId} />
        <SubmitButton />
      </form>
    </div>
  );
}
