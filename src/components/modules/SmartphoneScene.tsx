import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
function SmartphoneModel() {
  const gltf = useGLTF('/phone/scene.gltf');
  return (
    <motion.primitive
      key={'smartphone'}
      object={gltf.scene}
      rotation={[0, Math.PI / 1.2, 0]}
      scale={[0, 0, 0]} // Начальное значение scale - невидимый
      animate={{ scale: [1, 1, 1] }} // Конечное значение scale - исходный размер
      transition={{
        duration: 1.5, // Длительность анимации
        ease: 'easeOut', // Тип затухания
        delay: 0.5, // Задержка перед началом анимации
      }} // Длительность анимации 1 секунда
    />
  );
}

export default function SmartphoneScene() {
  return (
    <Canvas
      style={{
        width: '850px',
        height: '850px',
      }}
      camera={{ position: [0, 0, 0.16] }}
    >
      <ambientLight intensity={5} />
      <directionalLight position={[5, 5, 6]} />
      <SmartphoneModel />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
