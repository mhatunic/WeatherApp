# Weather App

Responsive weather dashboard built with React, TypeScript and Vite. The app combines current weather, forecasts, air-quality data and an interactive map in one interface.

## Features

- Current weather for the selected location
- 48-hour hourly forecast
- Eight-day daily forecast
- Additional weather information: cloudiness, UV index, wind direction, pressure, sunrise and sunset
- Air pollution panel with AQI and pollutant levels
- Interactive Leaflet map with MapTiler base tiles and OpenWeatherMap overlays
- Dynamic map legend for the selected map layer
- Location search and custom coordinates selected by clicking the map
- Dark and light themes
- Responsive desktop, tablet and mobile layouts
- Skeleton loaders for every data-driven section
- Runtime API response validation with Zod

## The Process

The application is split into focused React components. Weather data is loaded with TanStack Query and validated against Zod schemas before it reaches the UI. Each data section has its own Suspense boundary and skeleton loader, so one slow request does not block the rest of the dashboard.

The layout uses Tailwind CSS responsive breakpoints. On large screens the map spans the main content area, while current weather, forecasts and additional information are arranged in columns. On smaller screens the same sections stack vertically and the air pollution panel becomes a slide-out sidebar.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- TanStack Query
- React Leaflet and Leaflet
- MapTiler Leaflet SDK
- OpenWeatherMap APIs
- Zod
- Base UI and Lucide React

## Running the Project

### Requirements

- Node.js 20.19+ (or a newer LTS version)
- npm
- An OpenWeatherMap API key with access to the One Call 3.0 API
- A MapTiler Cloud API key for the map layer

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mhatunic/WeatherApp.git
   cd WeatherApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env.local` in the project root:

   ```env
   VITE_API_KEY=your_openweathermap_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the URL printed by Vite, usually `http://localhost:5173`.

The OpenWeatherMap key is read from `VITE_API_KEY` in `src/api.ts` and `src/components/Map.tsx`. The MapTiler key and style are configured in `src/components/Map.tsx`; replace the development key with your own key before publishing the application.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with HMR |
| `npm run build` | Runs TypeScript checks and creates a production build |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project Structure

```text
src/
├── api.ts                    # OpenWeatherMap requests and validation
├── App.tsx                   # Main dashboard layout and application state
├── main.tsx                  # React entry point and providers
├── types.ts                  # Shared TypeScript types
├── schemas/                  # Zod API response schemas
├── components/
│   ├── cards/                # Current, hourly, daily and additional weather cards
│   ├── dropdowns/            # Location and map-layer selectors
│   ├── skeleton/             # Loading states matching each component
│   ├── ui/                   # Reusable UI primitives
│   ├── Map.tsx               # Leaflet and MapTiler map integration
│   ├── MapLegend.tsx         # Dynamic map-layer legend
│   ├── SidePanel.tsx         # Air pollution sidebar
│   ├── ThemeProvider.tsx     # Dark/light theme state
│   └── LightDarkToggle.tsx   # Theme switch control
└── index.css                 # Tailwind theme tokens and global styles
```

## Data Sources

- [OpenWeatherMap One Call API](https://openweathermap.org/api/one-call-3)
- [OpenWeatherMap Geocoding API](https://openweathermap.org/api/geocoding-api)
- [OpenWeatherMap Air Pollution API](https://openweathermap.org/api/air-pollution)
- [MapTiler Cloud](https://www.maptiler.com/cloud/)

## Preview

The dashboard presents a map and layer legend at the top, followed by current conditions, the hourly forecast, additional weather information and the daily forecast. The air pollution panel remains available on the right side on large screens and can be opened as a mobile sidebar on smaller screens.

## Security Note

`.env.local` is intended for local development and should not be committed. API keys exposed in a browser application can be restricted by domain and usage limits in the provider dashboards. Use your own restricted keys for deployment.
