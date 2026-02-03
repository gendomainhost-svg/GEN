"use client";

import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  useMapContext,
} from "react-simple-maps";

// TopoJSON URL for world map - Using Natural Earth data
const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Coordinates for markers (longitude, latitude)
const headquarters: [number, number] = [-86.8, 32.8]; // Alabama, USA
const europeNode: [number, number] = [10.0, 50.0]; // Central Europe
const asiaNode: [number, number] = [100.0, 35.0]; // Central Asia
const africaNode: [number, number] = [20.0, 0.0]; // Central Africa
const southAmericaNode: [number, number] = [-60.0, -20.0]; // South America
const australiaNode: [number, number] = [135.0, -25.0]; // Australia

// Animated Line Component - Must be inside ComposableMap
// Creates eastward routes (all lines go to the right, no wrapping)
function AnimatedLine({
  from,
  to,
  delay = 0,
}: {
  from: [number, number];
  to: [number, number];
  delay?: number;
}) {
  const { path } = useMapContext();

  // Normalize coordinates to ensure eastward travel (to the right)
  try {
    let fromLon = from[0];
    let toLon = to[0];

    // Calculate the eastward longitude difference
    // If toLon < fromLon, we need to go east the long way (add 360)
    let lonDiff = toLon - fromLon;
    if (lonDiff <= 0) {
      lonDiff += 360; // Go east the long way
    }

    // Create intermediate points going eastward with smooth curve
    const numPoints = 40;
    const coordinates: [number, number][] = [];

    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;

      // Calculate longitude going eastward
      let currentLon = fromLon + lonDiff * t;

      // Normalize longitude to -180 to 180 range (but keep the eastward path)
      // If we exceed 180, we continue eastward by wrapping
      if (currentLon > 180) {
        currentLon = currentLon - 360; // Wrap to negative side but continue eastward
      }

      // Smooth interpolation for latitude with slight curve
      const latDiff = to[1] - from[1];
      // Add a slight curve for visual appeal
      const curveFactor = Math.sin(t * Math.PI) * 0.3; // Slight curve
      const currentLat =
        from[1] + latDiff * t + curveFactor * Math.abs(latDiff) * 0.1;

      coordinates.push([currentLon, currentLat]);
    }

    const geojson = {
      type: "LineString" as const,
      coordinates: coordinates,
    };
    const pathD = path(geojson);

    return (
      <motion.path
        d={pathD}
        stroke="#B45309"
        strokeWidth={2}
        fill="none"
        strokeDasharray="5,5"
        opacity={0.6}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay }}
      />
    );
  } catch (error) {
    // Fallback: use Line component with eastward coordinates
    let fromLon = from[0];
    let toLon = to[0];
    let lonDiff = toLon - fromLon;

    // Ensure eastward travel
    if (lonDiff <= 0) {
      lonDiff += 360;
    }

    // Create intermediate points
    const numPoints = 20;
    const coordinates: [number, number][] = [];

    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      let currentLon = fromLon + lonDiff * t;
      if (currentLon > 180) {
        currentLon = currentLon - 360;
      }
      const currentLat = from[1] + (to[1] - from[1]) * t;
      coordinates.push([currentLon, currentLat]);
    }

    // Fallback: use Line component with from/to
    return (
      <Line
        from={from}
        to={to}
        stroke="#B45309"
        strokeWidth={2}
        strokeDasharray="5,5"
        opacity={0.6}
      />
    );
  }
}

export default function MapComponent() {
  return (
    <ComposableMap
      projectionConfig={{
        scale: 150,
        center: [0, 20],
      }}
      className="w-full h-full"
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: { rsmKey: string }[] }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#334155"
              stroke="#475569"
              strokeWidth={0.5}
              style={{
                default: {
                  fill: "#334155",
                  stroke: "#475569",
                  strokeWidth: 0.5,
                  outline: "none",
                },
                hover: {
                  fill: "#475569",
                  stroke: "#64748B",
                  strokeWidth: 0.5,
                  outline: "none",
                },
                pressed: {
                  fill: "#475569",
                  stroke: "#64748B",
                  strokeWidth: 0.5,
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>

      {/* Connection Lines - Animated Great Circle Routes */}
      <g>
        <AnimatedLine from={headquarters} to={europeNode} delay={0.5} />
        <AnimatedLine from={headquarters} to={asiaNode} delay={1} />
        <AnimatedLine from={headquarters} to={africaNode} delay={1.5} />
        <AnimatedLine from={headquarters} to={southAmericaNode} delay={2} />
        <AnimatedLine from={headquarters} to={australiaNode} delay={2.5} />
      </g>

      {/* Core Hub - Alabama, US */}
      <Marker coordinates={headquarters}>
        <motion.g
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          {/* Pulsing circle */}
          <motion.circle
            r={8}
            fill="#B45309"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <circle r={4} fill="#F59E0B" />
          <circle r={2} fill="#FFFBEB" />
        </motion.g>
      </Marker>

      {/* Regional Nodes */}
      {/* Europe Node */}
      <Marker coordinates={europeNode}>
        <motion.circle
          r={4}
          fill="#B45309"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        />
      </Marker>

      {/* Asia Node */}
      <Marker coordinates={asiaNode}>
        <motion.circle
          r={4}
          fill="#B45309"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        />
      </Marker>

      {/* Africa Node */}
      <Marker coordinates={africaNode}>
        <motion.circle
          r={4}
          fill="#B45309"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6 }}
        />
      </Marker>

      {/* South America Node */}
      <Marker coordinates={southAmericaNode}>
        <motion.circle
          r={4}
          fill="#B45309"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2 }}
        />
      </Marker>

      {/* Australia Node */}
      <Marker coordinates={australiaNode}>
        <motion.circle
          r={4}
          fill="#B45309"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.8 }}
        />
      </Marker>

      {/* Headquarters Label - Positioned next to marker */}
      <Marker coordinates={headquarters}>
        <g transform="translate(15, -10)">
          <motion.foreignObject
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            width="120"
            height="40"
          >
            <div className="bg-primary-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-accent-500/50 pointer-events-none">
              <p className="text-accent-400 font-semibold text-xs whitespace-nowrap">
                Headquarters
              </p>
            </div>
          </motion.foreignObject>
        </g>
      </Marker>
    </ComposableMap>
  );
}
