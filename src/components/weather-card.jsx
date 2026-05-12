export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const temp = Math.round(weather.main.temp - 273.15);
  const condition = weather.weather[0].main; 
  const icon = weather.weather[0].icon

  return (
    <div className="max-w-md mx-auto mt-6 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-xl font-semibold">
        {weather.name}, {weather.sys.country}
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
        className="mx-auto w-24 h-24"
      />
      <h1 className="text-5xl font-bold">{temp}°C</h1>
      <p className="text-gray-500 capitalize">{condition}</p>
    </div>
  );
}