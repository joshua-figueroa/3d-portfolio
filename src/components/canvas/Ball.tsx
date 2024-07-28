import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";

const Ball = ({ icon }: { icon: string }) => {
	const [decal] = useTexture([icon]);

	return (
		<Float speed={1.75} rotationIntensity={1}>
			<directionalLight position={[0, 0, 0.05]} />
			<ambientLight intensity={0.25} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
				<Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.3]} />
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon }: { icon: string }) => {
	return (
		<Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball icon={icon} />
			</Suspense>
		</Canvas>
	);
};

export default BallCanvas;
