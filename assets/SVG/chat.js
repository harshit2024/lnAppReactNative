import * as React from "react"
import Svg, { Rect, Path, Circle } from "react-native-svg"
const Chat = (props) => (
    <Svg
        width={34}
        height={34}
        fill="none"
        {...props}
    >
        <Rect width={31} height={31} x={2.5} y={0.5} fill="#fff" rx={11.5} />
        <Rect width={31} height={31} x={2.5} y={0.5} stroke="#4987FC" rx={11.5} />
        <Path
            fill="#4987FC"
            d="M17.385 24.5V23h7.307a.326.326 0 0 0 .217-.077.251.251 0 0 0 .091-.202v-6.994c0-1.912-.684-3.52-2.052-4.828-1.368-1.307-3.017-1.96-4.948-1.96-1.93 0-3.58.653-4.948 1.96C11.684 12.206 11 13.815 11 15.727v5.888h-.75c-.48 0-.891-.167-1.235-.5a1.637 1.637 0 0 1-.515-1.22v-1.943c0-.325.092-.622.277-.891.185-.27.426-.487.723-.651l.046-1.277a7.737 7.737 0 0 1 .848-3.025 8.641 8.641 0 0 1 1.86-2.424 8.333 8.333 0 0 1 2.62-1.608A8.568 8.568 0 0 1 18 7.5c1.095 0 2.135.192 3.12.576a8.527 8.527 0 0 1 2.618 1.6 8.349 8.349 0 0 1 1.86 2.416c.478.928.764 1.937.856 3.025l.046 1.252c.291.137.53.334.718.589.188.255.282.54.282.854v2.232c0 .314-.094.599-.282.854a1.864 1.864 0 0 1-.718.588v1.235a1.7 1.7 0 0 1-.53 1.259c-.353.347-.779.52-1.278.52h-7.307Zm-2.193-6.73a.87.87 0 0 1-.626-.25.821.821 0 0 1-.258-.616c0-.245.086-.452.258-.621a.86.86 0 0 1 .626-.254.86.86 0 0 1 .626.254c.173.169.259.376.259.62 0 .246-.086.451-.259.617a.87.87 0 0 1-.626.25Zm5.616 0a.87.87 0 0 1-.626-.25.822.822 0 0 1-.259-.616c0-.245.086-.452.259-.621a.86.86 0 0 1 .626-.254.86.86 0 0 1 .626.254c.172.169.258.376.258.62 0 .246-.086.451-.258.617a.87.87 0 0 1-.626.25ZM12.37 16.2c-.104-1.632.404-3.028 1.523-4.19 1.12-1.16 2.505-1.74 4.156-1.74 1.387 0 2.611.428 3.672 1.287 1.061.858 1.705 1.97 1.932 3.333a7.64 7.64 0 0 1-3.938-1.119 7.297 7.297 0 0 1-2.774-3 7.26 7.26 0 0 1-1.596 3.298 7.439 7.439 0 0 1-2.975 2.131Z"
        />
        <Circle cx={7} cy={27} r={7} fill="#fff" />
        <Path
            fill="#fff"
            d="M6.998 21.4a5.607 5.607 0 0 0-5.6 5.6c0 1.062.301 2.098.868 2.994a.238.238 0 0 1 .026.198l-.77 2.306 2.518-.663a.246.246 0 0 1 .175.023 5.599 5.599 0 0 0 2.783.742c3.087 0 5.6-2.513 5.6-5.6 0-3.087-2.513-5.6-5.6-5.6Zm3.568 9.06a.233.233 0 0 1-.082.078 1.616 1.616 0 0 1-.82.198c-.528 0-1.163-.184-1.863-.548-.77-.4-1.559-.992-2.28-1.71-.718-.722-1.31-1.51-1.71-2.28-.579-1.116-.705-2.068-.35-2.684a.234.234 0 0 1 .077-.081c.22-.138 1.197-.24 1.514-.091a.239.239 0 0 1 .126.158c.108.465.336.994.668 1.533a.235.235 0 0 1 .023.194c-.06.19-.338.541-.548.754a9.73 9.73 0 0 0 1.22 1.477 9.73 9.73 0 0 0 1.477 1.22c.212-.21.565-.488.754-.548a.235.235 0 0 1 .193.023c.54.331 1.07.56 1.533.667a.239.239 0 0 1 .16.126c.148.318.046 1.295-.092 1.515Z"
        />
        <Path
            fill="#3FBD4F"
            d="M6.998 21.4a5.607 5.607 0 0 0-5.6 5.6c0 1.062.301 2.098.868 2.994a.238.238 0 0 1 .026.198l-.77 2.306 2.518-.663a.246.246 0 0 1 .175.023 5.599 5.599 0 0 0 2.783.742c3.087 0 5.6-2.513 5.6-5.6 0-3.087-2.513-5.6-5.6-5.6Zm3.568 9.06a.233.233 0 0 1-.082.078 1.616 1.616 0 0 1-.82.198c-.528 0-1.163-.184-1.863-.548-.77-.4-1.559-.992-2.28-1.71-.718-.722-1.31-1.51-1.71-2.28-.579-1.116-.705-2.068-.35-2.684a.234.234 0 0 1 .077-.081c.22-.138 1.197-.24 1.514-.091a.239.239 0 0 1 .126.158c.108.465.336.994.668 1.533a.235.235 0 0 1 .023.194c-.06.19-.338.541-.548.754a9.73 9.73 0 0 0 1.22 1.477 9.73 9.73 0 0 0 1.477 1.22c.212-.21.565-.488.754-.548a.235.235 0 0 1 .193.023c.54.331 1.07.56 1.533.667a.239.239 0 0 1 .16.126c.148.318.046 1.295-.092 1.515Z"
        />
    </Svg>
)
export default Chat