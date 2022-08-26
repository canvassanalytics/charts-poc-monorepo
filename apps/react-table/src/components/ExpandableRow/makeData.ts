
export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: 'status one' | 'status two' | 'status three'
  subRows?: Person[]
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    firstName: "name",
    lastName: "lastname",
    age: Math.random()*100,
    visits: Math.random(),
    progress: Math.random(),
    status: "status one",
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
