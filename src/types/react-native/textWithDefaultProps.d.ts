interface DefaultProps {
	allowFontScaling ?: boolean;
}

export default interface TextWithDefaultProps extends Text {
	defaultProps?: DefaultProps;
}
