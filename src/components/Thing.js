import React from 'react'
import * as THREE from 'three'
import {Canvas} from 'react-three-fiber'

const Thing=({ vertices = [[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]] })=>{
    return (
        <Canvas>
            <group>
                <line>
                    <geometry attach="geometry"
                    vertices={vertices.map(v=>new THREE.Vector3(...v))}
                    onUpdate={self=>(self.verticesNeedUpdate=true)}/>

                    <lineBasicMaterial attach="material" color="black"/>
                </line>
                <mesh>
                    <octahedronGeometry attach="geometry" />
                    <meshBasicMaterial attach="material" color="peachpuff" opacity={0.5} transparent/>
                </mesh>
            </group>
        </Canvas>
    )
}

export default Thing
