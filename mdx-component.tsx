import { useMDXComponent } from "next-contentlayer/hooks";
import Image, { ImageProps } from "next/image";
const component = {
	Image: (props: ImageProps) => <Image {...props} alt="blog image" />,
};
interface Props {
	code: string;
}

const MDX = ({ code }: Props) => {
	const Component = useMDXComponent(code);
	return <Component components={component} />;
};

export default MDX;
