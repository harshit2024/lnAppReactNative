import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const Profile = (props) => (
    <Svg
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Rect width={32} height={32} fill="#fff" rx={12} />
        <Rect width={32} height={32} fill="url(#a)" rx={12} />
        <Path
            fill="#fff"
            d="M10.874 20.25a8.698 8.698 0 0 1 2.375-1.282A8.115 8.115 0 0 1 16 18.5c.959 0 1.875.157 2.75.47.875.312 1.667.739 2.375 1.28a6.44 6.44 0 0 0 1.136-1.937c.27-.722.406-1.493.406-2.313 0-1.847-.65-3.42-1.948-4.718C19.42 9.982 17.847 9.333 16 9.333c-1.847 0-3.42.649-4.718 1.948-1.299 1.298-1.948 2.871-1.948 4.718 0 .82.135 1.59.406 2.313a6.44 6.44 0 0 0 1.135 1.937ZM16 16.832c-.82 0-1.51-.282-2.073-.844-.562-.563-.843-1.254-.843-2.073 0-.82.28-1.51.843-2.073C14.49 11.281 15.18 11 16 11c.82 0 1.51.282 2.073.844.563.563.844 1.254.844 2.073 0 .82-.281 1.51-.844 2.073-.562.562-1.253.844-2.073.844Zm0 7.5a8.115 8.115 0 0 1-3.25-.657 8.416 8.416 0 0 1-2.646-1.78 8.416 8.416 0 0 1-1.78-2.647A8.114 8.114 0 0 1 7.665 16c0-1.152.219-2.236.656-3.25a8.417 8.417 0 0 1 1.782-2.646 8.417 8.417 0 0 1 2.645-1.78A8.115 8.115 0 0 1 16 7.665c1.153 0 2.236.219 3.25.656a8.416 8.416 0 0 1 2.646 1.782 8.416 8.416 0 0 1 1.781 2.645 8.115 8.115 0 0 1 .657 3.25 8.114 8.114 0 0 1-.657 3.25 8.416 8.416 0 0 1-1.78 2.646 8.416 8.416 0 0 1-2.647 1.781 8.114 8.114 0 0 1-3.25.657Zm0-1.667a6.61 6.61 0 0 0 2.084-.323 6.273 6.273 0 0 0 1.791-.927 6.273 6.273 0 0 0-1.791-.927 6.612 6.612 0 0 0-2.084-.323c-.736 0-1.43.108-2.083.323a6.275 6.275 0 0 0-1.792.927 6.275 6.275 0 0 0 1.792.927 6.61 6.61 0 0 0 2.083.323Zm0-7.5c.361 0 .66-.118.896-.354s.354-.535.354-.896-.118-.66-.354-.896a1.214 1.214 0 0 0-.896-.354c-.36 0-.66.118-.896.354a1.214 1.214 0 0 0-.354.896c0 .361.118.66.354.896.237.236.535.354.896.354Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={16}
                x2={16}
                y1={0}
                y2={32}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#00B2FF" />
                <Stop offset={1} stopColor="#006B99" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export default Profile