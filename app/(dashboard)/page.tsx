import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  Users,
  Wallet,
  BarChart3,
  Smartphone
} from 'lucide-react';

const features = [
  {
    icon: CalendarCheck,
    title: 'Online randevu sayfası',
    text: 'Müşterileriniz size özel linkten 7/24 randevu alır, telefon trafiği biter.'
  },
  {
    icon: MessageCircle,
    title: 'Otomatik SMS / WhatsApp hatırlatma',
    text: 'Randevudan 1 gün önce hatırlatma gider, gelmeyen müşteri oranı yarıya iner.'
  },
  {
    icon: Users,
    title: 'Müşteri kartları',
    text: 'Her müşterinin geçmiş işlemleri, boya formülü ve notları tek ekranda.'
  },
  {
    icon: Wallet,
    title: 'Kasa ve prim takibi',
    text: 'Günlük ciro, ödeme türleri ve personel primleri otomatik hesaplanır.'
  },
  {
    icon: BarChart3,
    title: 'Aylık raporlar',
    text: 'En çok kazandıran hizmet, en sadık müşteri, boş kalan saatler.'
  },
  {
    icon: Smartphone,
    title: 'Telefondan yönetim',
    text: 'Uygulama indirmeden, telefon tarayıcısından her yerden erişin.'
  }
];

const stats = [
  { value: '%48', label: 'daha az gelmeyen müşteri' },
  { value: '6 saat', label: 'haftalık zaman tasarrufu' },
  { value: '14 gün', label: 'ücretsiz deneme' }
];

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider">
                Kuaför · Güzellik · Berber salonları için
              </p>
              <h1 className="mt-3 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Randevu defterini
                <span className="block text-rose-500">cebinize taşıyın</span>
              </h1>
              <p className="mt-5 text-base text-gray-500 sm:text-xl lg:text-lg xl:text-xl">
                Salon Defteri; online randevu, otomatik hatırlatma, müşteri
                kartları ve kasa takibini tek bir sade uygulamada toplar.
                Kurulum yok, 5 dakikada başlarsınız.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="text-lg rounded-full bg-rose-500 hover:bg-rose-600">
                  <Link href="/sign-up">
                    14 gün ücretsiz dene
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg rounded-full">
                  <Link href="/pricing">Fiyatları gör</Link>
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-400">Kredi kartı gerekmez · İstediğiniz an iptal</p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <AppPreview />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-gray-900">{s.value}</p>
              <p className="mt-1 text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Salonunuzu yönetmek için ihtiyacınız olan her şey
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title}>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rose-500 text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">{f.title}</h3>
                <p className="mt-2 text-base text-gray-500">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Defter, ajanda, Excel… hepsini bırakın.
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                İlk 14 gün ücretsiz. Mevcut müşteri listenizi Excel’den tek
                tıkla aktarıyoruz.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Button asChild size="lg" className="text-lg rounded-full bg-rose-500 hover:bg-rose-600">
                <Link href="/sign-up">
                  Hemen başla
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-400">
        © Salon Defteri (örnek uygulama) · made with{' '}
        <a className="underline" href="https://alimuratsubasi2-maker.github.io/fiyat-listesi/">
          NovaDijitalTR
        </a>
      </footer>
    </main>
  );
}

function AppPreview() {
  const rows = [
    { time: '10:00', name: 'Elif Y.', service: 'Fön + Kesim', staff: 'Derya', color: 'bg-rose-100 text-rose-700' },
    { time: '11:30', name: 'Selin K.', service: 'Dip Boya', staff: 'Merve', color: 'bg-amber-100 text-amber-700' },
    { time: '13:00', name: 'Burak T.', service: 'Saç + Sakal', staff: 'Can', color: 'bg-sky-100 text-sky-700' },
    { time: '14:30', name: 'Ayşe D.', service: 'Manikür', staff: 'Derya', color: 'bg-emerald-100 text-emerald-700' },
    { time: '16:00', name: 'Zeynep A.', service: 'Keratin Bakım', staff: 'Merve', color: 'bg-violet-100 text-violet-700' }
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div>
          <p className="text-sm text-gray-400">Bugün · Salı</p>
          <p className="text-lg font-semibold text-gray-900">5 randevu · ₺4.350 beklenen ciro</p>
        </div>
        <span className="text-xs font-medium bg-green-100 text-green-700 rounded-full px-3 py-1">
          Hatırlatmalar gönderildi
        </span>
      </div>
      <ul className="divide-y divide-gray-100">
        {rows.map((r) => (
          <li key={r.time} className="flex items-center gap-4 px-5 py-3">
            <span className="w-12 text-sm font-mono text-gray-500">{r.time}</span>
            <span className={`text-xs font-medium rounded-md px-2 py-1 ${r.color}`}>{r.service}</span>
            <span className="flex-1 text-gray-900">{r.name}</span>
            <span className="text-sm text-gray-400">{r.staff}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
