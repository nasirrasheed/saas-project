import useTitle from '../hooks/useTitle'; // <- Add this

const faqs = [
  {
    question: 'Is FreelanceFinance free?',
    answer: 'Yes! During beta, all features are free. Paid plans will roll out after public launch.',
  },
  {
    question: 'Do you support international tax rules?',
    answer: 'We support basic estimations for over 50 countries, with more localized features coming soon.',
  },
  {
    question: 'What integrations are available?',
    answer: 'We currently support Stripe, PayPal, Wise, and manual CSV imports.',
  },
];

export default function FAQPage() {
  useTitle("FAQs - FreelanceFinance"); // <- Set the page title

  return (
    <div className="max-w-4xl mx-auto p-8 text-blue-900">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b pb-4">
            <h2 className="text-lg font-semibold">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
