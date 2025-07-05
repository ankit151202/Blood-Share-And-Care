export default function DonorCard({ donor }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{donor.fullName}</h3>
        <span className="rounded-lg bg-primary px-3 py-1 text-sm font-bold text-white">
          {donor.bloodGroup}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-600">{donor.city}</p>
      <a
        href={`tel:${donor.phone}`}
        className="mt-3 inline-block rounded-md bg-primary px-4 py-2 text-sm text-white hover:opacity-90"
      >
        Call
      </a>
    </div>
  );
}
