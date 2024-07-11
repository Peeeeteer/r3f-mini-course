export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-10">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-purple-600" />
    </div>
  );
}
