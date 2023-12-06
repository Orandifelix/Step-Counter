import { View } from "react-native";
import SVG, { Circle, CircleProps } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

// animation
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// color
const color = "#EE0F55";

// types  of  props
type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress: number;
};

// Component
const RingProgress = ({
  radius = 100,
  strokeWidth = 35,
  progress,
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumferene = 2 * Math.PI * innerRadius;

  // Animation
  const fill = useSharedValue(0.6);

  useEffect(() => {
    fill.value = withTiming(progress, { duration: 1500 });
  }, [progress]);
  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumferene * fill.value, circumferene],
  }));

  //  default props
  const circleDefaultProps: CircleProps = {
    r: innerRadius,
    cx: radius,
    cy: radius,
    originX: radius,
    originY: radius,
    strokeWidth: strokeWidth,
    stroke: color,
    strokeLinecap: "round",
    rotation: "-90",
  };
  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        alignSelf: "center",
      }}
    >
      <SVG>
        {/* Background  */}
        <Circle {...circleDefaultProps} opacity={0.2} />
        {/* Foreground  */}
        <AnimatedCircle {...circleDefaultProps} animatedProps={animatedProps} />
      </SVG>
      <AntDesign
        name="arrowright"
        size={strokeWidth * 0.8}
        color="black"
        style={{
          position: "absolute",
          alignSelf: "center",
          top: strokeWidth * 0.1,
        }}
      />
    </View>
  );
};

export default RingProgress;
