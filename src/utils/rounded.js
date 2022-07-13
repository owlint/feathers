export const getRounded = (rounded) => {
  switch (rounded) {
    case 'sm':
      return 'rounded-sm'
    case 'rounded':
      return 'rounded'
    case 'md':
      return 'rounded-md'
    case 'lg':
      return 'rounded-lg'
    case 'xl':
      return 'rounded-xl'
    case '2xl':
      return 'rounded-2xl'
    case '3xl':
      return 'rounded-3xl'
    case 'full':
      return 'rounded-full'
    default:
      return ''
  }
}
