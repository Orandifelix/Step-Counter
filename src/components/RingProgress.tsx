import { Text, StyleSheet, View } from "react-native";
import SVG, { Circle } from "react-native-svg";

const color = "#EE0F55";
type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress: number; 
};
const RingProgress = ({
  radius = 100,
  strokeWidth = 35,
  progress
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumferene = 2 * Math.PI * innerRadius;
  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        // backgroundColor: "green",
        alignSelf: "center",
      }}
    >
      <SVG>
        {/* Background  */}
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          //   fill={'blue'}
          strokeWidth={strokeWidth}
          stroke={color}
          opacity={0.2}
        />
        {/* Foreground  */}
        <Circle
          r={innerRadius}
          cx={radius}
          cy={radius}
          originX={radius}
          originY={radius}
          //   fill={'blue'}
          strokeWidth={strokeWidth}
          stroke={color}
          strokeDasharray={[circumferene * progress, circumferene]}
          strokeLinecap="round"
          rotation="-90"
        />
      </SVG>
    </View>
  );
};

const styles = StyleSheet.create({
  ring: {
    color: "white",
  },
});

export default RingProgress;
