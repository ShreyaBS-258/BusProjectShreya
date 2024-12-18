export const RouteStopsModal = ({ route, bus, onClose, onLocationUpdate }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Route Stops</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <span className="w-6 h-6 text-gray-500">X</span> {/* Close icon as simple text */}
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-8rem)]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-blue-600">&#128205;</span> {/* Map Pin Emoji for "From" */}
              <span className="text-sm text-gray-600">From: {route.routeSource}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">&#128205;</span> {/* Map Pin Emoji for "To" */}
              <span className="text-sm text-gray-600">To: {route.routeDestination}</span>
            </div>
          </div>

          <div className="space-y-4">
            {route.routeStops.map((stop, index) => (
              <div key={`${stop}-${index}`} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={bus.currentLocation === stop}
                    onChange={() => onLocationUpdate(stop)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">{stop}</h4>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-500">Stop #{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
