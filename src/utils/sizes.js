export const getMaxWidth = (width) => {
  switch (width) {
    case 'sm':
      return 'sm:max-w-sm'
    case 'xs':
      return 'sm:max-w-xs'
    case 'md':
      return 'sm:max-w-md'
    case 'lg':
      return 'sm:max-w-lg'
    case 'xl':
      return 'sm:max-w-xl'
    case '2xl':
      return 'sm:max-w-2xl'
    case '4xl':
      return 'sm:max-w-4xl'
    case '5xl':
      return 'sm:max-w-5xl'
    case '6xl':
      return 'sm:max-w-6xl'
    case '7xl':
      return 'sm:max-w-7xl'
    default:
      console.log(`modal size of ${width} not implemented yet`)
      return 'sm:max-w-md'
  }
}
