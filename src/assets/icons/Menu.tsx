import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Icon from '../../types/icon';

const MenuIcon = (props: Icon) => (
	<Svg width={props.width} height={props.height} viewBox="0 0 24 24">
		<Path d="M0 0h24v24H0z" fill="none" />
		<Path
			d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
			fill={props.color}
		/>
	</Svg>
);

export default MenuIcon;
