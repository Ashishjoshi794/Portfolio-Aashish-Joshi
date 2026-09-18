import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030712, 0);
    container.appendChild(renderer.domElement);

    // Particle Constellation (Neural Network Nodes)
    const particleCount = prefersReducedMotion ? 40 : 85;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    const cyanColor = new THREE.Color('#00f2fe');
    const violetColor = new THREE.Color('#8b5cf6');
    const emeraldColor = new THREE.Color('#10b981');

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 140;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 80;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      // Color variation across AI palette
      const randColor = Math.random();
      const chosenColor = randColor < 0.55 ? cyanColor : randColor < 0.85 ? violetColor : emeraldColor;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.08,
        y: (Math.random() - 0.5) * 0.08,
        z: (Math.random() - 0.5) * 0.04,
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Glowing particle texture using HTML canvas
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.8)');
        gradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Neural Network Synapse Lines
    const maxConnections = 240;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // Subtle 3D Geometric AI Core in Background
    const coreGeo = new THREE.IcosahedronGeometry(18, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(35, 0, -25);
    scene.add(coreMesh);

    // Outer orbital ring around the 3D core
    const ringGeo = new THREE.TorusGeometry(26, 0.2, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.copy(coreMesh.position);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      mouseX = (clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Visibility Observer to pause rendering when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      // Smooth camera parallax
      targetX += (mouseX * 12 - targetX) * 0.05;
      targetY += (mouseY * 8 - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(scene.position);

      // Rotate geometric objects
      coreMesh.rotation.x += prefersReducedMotion ? 0.0005 : 0.003;
      coreMesh.rotation.y += prefersReducedMotion ? 0.0007 : 0.004;
      ringMesh.rotation.z -= prefersReducedMotion ? 0.0006 : 0.005;

      // Update particles
      const positions = particleGeometry.attributes.position.array as Float32Array;
      const lPositions = lineGeometry.attributes.position.array as Float32Array;
      const lColors = lineGeometry.attributes.color.array as Float32Array;

      let lineIndex = 0;
      const connectDistance = 28;

      for (let i = 0; i < particleCount; i++) {
        if (!prefersReducedMotion) {
          positions[i * 3] += particleVelocities[i].x;
          positions[i * 3 + 1] += particleVelocities[i].y;
          positions[i * 3 + 2] += particleVelocities[i].z;

          // Boundary bouncing
          if (Math.abs(positions[i * 3]) > 70) particleVelocities[i].x *= -1;
          if (Math.abs(positions[i * 3 + 1]) > 50) particleVelocities[i].y *= -1;
          if (Math.abs(positions[i * 3 + 2]) > 40) particleVelocities[i].z *= -1;
        }

        // Connect nearby particles with synapse lines
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectDistance && lineIndex < maxConnections) {
            const alpha = 1 - dist / connectDistance;

            lPositions[lineIndex * 6] = positions[i * 3];
            lPositions[lineIndex * 6 + 1] = positions[i * 3 + 1];
            lPositions[lineIndex * 6 + 2] = positions[i * 3 + 2];

            lPositions[lineIndex * 6 + 3] = positions[j * 3];
            lPositions[lineIndex * 6 + 4] = positions[j * 3 + 1];
            lPositions[lineIndex * 6 + 5] = positions[j * 3 + 2];

            // Gradient line color between particles
            lColors[lineIndex * 6] = 0.02 * alpha;
            lColors[lineIndex * 6 + 1] = 0.71 * alpha;
            lColors[lineIndex * 6 + 2] = 0.83 * alpha;

            lColors[lineIndex * 6 + 3] = 0.54 * alpha;
            lColors[lineIndex * 6 + 4] = 0.36 * alpha;
            lColors[lineIndex * 6 + 5] = 0.96 * alpha;

            lineIndex++;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex * 2);
      particleGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
