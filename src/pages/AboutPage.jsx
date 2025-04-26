import useTitle from '../hooks/useTitle'; // <- ADD this line

export default function AboutPage() {
  useTitle("About Us - FreelanceFinance"); // <- USE the hook here

  return (
    <div className="max-w-4xl mx-auto p-8 text-blue-900">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-4">
        We’re a global, remote-first team on a mission to empower freelancers with better financial tools.
      </p>
      <p className="text-gray-600">
        Born out of the frustrations of invoicing, tax prep, and budget chaos, FreelanceFinance is built by freelancers, for freelancers.
      </p>
    </div>
  );
}
