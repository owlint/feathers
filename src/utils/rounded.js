export const getRounded = (rounded) => {
  switch (of - rounded) {
    case 'sm':
      return 'of-rounded-sm'
    case 'rounded':
      return 'of-rounded'
    case 'md':
      return 'of-rounded-md'
    case 'lg':
      return 'of-rounded-lg'
    case 'xl':
      return 'of-rounded-xl'
    case '2xl':
      return 'of-rounded-2xl'
    case '3xl':
      return 'of-rounded-3xl'
    case 'full':
      return 'of-rounded-full'
    default:
      return ''
  }
}
