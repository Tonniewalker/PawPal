// ===== ทะเบียนตัววาดของสัตว์แต่ละชนิด =====
// key ต้องตรงกับ id ใน src/species.js
import Bird from './Bird'
import Cat from './Cat'
import Dog from './Dog'
import Fox from './Fox'
import Rabbit from './Rabbit'

const BODIES = {
  dog: Dog,
  cat: Cat,
  rabbit: Rabbit,
  fox: Fox,
  bird: Bird,
}

export function getPetBody(species) {
  return BODIES[species] ?? Dog
}
