import { run } from "./general-utils";

export const CHUNK_SIZE = 110;
export const RENDER_DISTANCE = 2;
export const CHUNK_FADE_MARGIN = 1;
export const MAX_VELOCITY = 3.0;
export const DEPTH_FADE_START = 140;
export const DEPTH_FADE_END = 260;
export const INVIS_THRESHOLD = 0.01;
export const KEYBOARD_SPEED = 0.15;
export const VELOCITY_LERP = 0.10;
export const VELOCITY_DECAY = 0.935;
export const INITIAL_CAMERA_Z = 50;

export type ChunkOffset = {
  dx: number;
  dy: number;
  dz: number;
  dist: number;
};

export const CHUNK_OFFSETS: ChunkOffset[] = run(() => {
  const maxDist = RENDER_DISTANCE + CHUNK_FADE_MARGIN;
  const offsets: ChunkOffset[] = [];
  for (let dx = -maxDist; dx <= maxDist; dx++) {
    for (let dy = -maxDist; dy <= maxDist; dy++) {
      for (let dz = -maxDist; dz <= maxDist; dz++) {
        const dist = Math.max(Math.abs(dx), Math.abs(dy), Math.abs(dz));
        if (dist > maxDist) continue;
        offsets.push({ dx, dy, dz, dist });
      }
    }
  }
  return offsets;
});
