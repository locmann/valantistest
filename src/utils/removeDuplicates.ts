export const removeDuplicates = (arr: string[]) =>
  arr.filter((item, index) => arr.indexOf(item) === index)

export const removeDuplicatesItems = (arr: ItemType[]) =>
  arr.filter((item, index) => {
    return index === arr.findIndex((i) => item.id === i.id)
  })
