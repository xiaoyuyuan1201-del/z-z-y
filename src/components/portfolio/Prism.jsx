import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Prism({
  animationType = 'rotate',
  timeScale = 0.3,
  height = 3.9,
  baseWidth = 5.5,
  scale = 3.6,
  hueShift = 0,
  colorFrequency = 1,
  noise = 0,
  glow = 0.9,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create prism geometry
    const geometry = new THREE.ConeGeometry(baseWidth, height, 6);
    
    // Create gradient material
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Draw gradient
    for (let i = 0; i < canvas.height; i++) {
      const hue = ((i / canvas.height) * colorFrequency + hueShift) % 1;
      const rgb = hslToRgb(hue, 1, 0.5);
      ctx.fillStyle = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      ctx.fillRect(0, i, canvas.width, 1);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      emissive: new THREE.Color().setHSL(hueShift, 1, 0.3),
      emissiveIntensity: glow,
      metalness: 0.8,
      roughness: 0.2,
    });

    const prism = new THREE.Mesh(geometry, material);
    prism.scale.set(scale, scale, scale);
    scene.add(prism);

    // Lighting
    const light1 = new THREE.PointLight(0xff00ff, 1.5);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x00ffff, 1.5);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Animation
    let startTime = Date.now();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsed = (Date.now() - startTime) * timeScale * 0.001;

      if (animationType === 'rotate') {
        prism.rotation.x = elapsed * 0.5;
        prism.rotation.y = elapsed * 0.8;
        prism.rotation.z = elapsed * 0.3;
      } else if (animationType === 'float') {
        prism.position.y = Math.sin(elapsed) * 1.5;
        prism.rotation.y = elapsed * 0.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [animationType, timeScale, height, baseWidth, scale, hueShift, colorFrequency, glow]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}